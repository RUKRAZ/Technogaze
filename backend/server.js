require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser')
const { Pool } = require('pg');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');
const app = express();
const PORT = 8080;

// CORS configuration: Allow requests from the frontend running on localhost:3000
// You can customize the cors options as per your requirements
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
  // Middleware to parse JSON bodies
app.use(express.json());

app.use(cookieParser());

// PostgreSQL database connection configuration
const pool = new Pool({
    user: 'postgres_user',
    host: 'technogaze.c722y6y2on6l.us-east-2.rds.amazonaws.com',
    database: 'technogaze',
    password: 'admin123',
    port: 5432, // Default PostgreSQL port
    ssl: {
        rejectUnauthorized: false // For SSL connections, if enabled
    }
});

// Test the database connection
pool.connect()
    .then(() => {
        console.log('Connected to the database');
        pool.query('SELECT NOW()', (err, res) => {
            if (err) {
                console.error('Error running query', err);
            } else {
                console.log('Current timestamp from the database:', res.rows[0].now);
            }
        });
    })
    .catch(err => console.error('Error connecting to the database:', err));

    
// Create a dashboard table if it doesn't exist
pool.query(`
    CREATE TABLE IF NOT EXISTS dashboard (
        todo TEXT NOT NULL
    )`
    , (err, res) => {
        if (err) {
            console.error('Error creating dashboard table:', err);
        } else {
            console.log('Dashboard table created or already exists');
        }
    });

app.get('/protected', auth, (req, res) => {
    res.json({ message: "Welcome to the protected route!", user: req.user });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//Users
pool.query(`
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)`
, (err, res) => {
    if (err) {
        console.error('Error creating User table:', err);
    } else {
        console.log('User table created or already exists');
    }
});

//Employee
pool.query(`
    CREATE TABLE IF NOT EXISTS employee (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)`
, (err, res) => {
    if (err) {
        console.error('Error creating User table:', err);
    } else {
        console.log('Employee table created or already exists');
    }
});

const bcrypt = require('bcrypt');

/*
// Route to get all users
app.get('/api/users', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users'); // Adjust SQL query as needed
      res.json(result.rows);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
    }
  });
*/

// Route handler for user registration
app.post('/post_register', async (req, res) => {

    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const userExist = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userExist.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user, including the username
        const newUser = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', 
                         [username, email, hashedPassword]);

        // Generate a token
        const userPayload = { email: newUser.email, id: newUser.id }; // Payload can be adjusted based on what you need
        
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not defined.");
            return res.status(400).json({ message: 'JWT_SECRET is not defined' });
        }
        
        token = jwt.sign(userPayload, process.env.JWT_SECRET, { expiresIn: 60*60 });
        res.cookie('jwt', token, { 
            httponly: true,
            maxAge: 60 * 60 * 1000,
            sameSite: 'None', // Important for cross-origin cookies
            secure: true // Important for cookies over HTTPS});
        });
        console.log(`Token for user ${userPayload.email} created: ${token}`);
        res.status(201).json({ message: 'User registered successfully.', token: token });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ message: 'Error registering user' });
    }
});

// Route handler for user login
app.post('/post_login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Retrieve user by email
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (user.rows.length == 0) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }
        // Generate a token
        const userPayload = { id: user.rows[0].id, email: user.rows[0].email }; // Payload can be adjusted based on what you need
        
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not defined.");
            return res.status(400).json({ message: 'JWT_SECRET is not defined' });
        }
        token = jwt.sign(userPayload, process.env.JWT_SECRET), {expiresIn: 60*60}
        res.cookie('jwt', token, { 
            httponly: true,
            maxAge: 60 * 60 * 1000,
            sameSite: 'None', // Important for cross-origin cookies
            secure: true // Important for cookies over HTTPS});
        });
        console.log(`Token for user ${userPayload.email} created: ${token}`);
        res.status(200).json({message: "Logged in succesfully", token: token }); // Send the token to the client   
    } catch (err) {
        res.status(500).json({message : 'Error logging in'});
        console.error('Error logging in:', err);
    }
});
//Route Handler for Employee login
app.post('/employee_login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Retrieve user by email
        const employee = await pool.query('SELECT * FROM employee WHERE email = $1', [email]);
        if (employee.rows.length == 0) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, employee.rows[0].password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }
        // Generate a token
        const userPayload = { id: employee.rows[0].id, email: employee.rows[0].email }; // Payload can be adjusted based on what you need
        
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not defined.");
            return res.status(400).json({ message: 'JWT_SECRET is not defined' });
        }
        token = jwt.sign(userPayload, process.env.JWT_SECRET), {expiresIn: 60*60}
        res.cookie('jwt', token, { 
            httponly: true,
            maxAge: 60 * 60 * 1000,
            sameSite: 'None', // Important for cross-origin cookies
            secure: true // Important for cookies over HTTPS});
        });
        console.log(`Token for user ${userPayload.email} created: ${token}`);
        res.status(200).json({message: "Logged in succesfully", token: token }); // Send the token to the client   
    } catch (err) {
        res.status(500).json({message : 'Error logging in'});
        console.error('Error logging in:', err);
    }
});
// Route handler for user registration
app.post('/employee_register', async (req, res) => {

    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const employeeExist = await pool.query('SELECT * FROM employee WHERE email = $1', [email]);
        if (employeeExist.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user, including the username
        const newEmployee = await pool.query('INSERT INTO employee ( email, password) VALUES ($1, $2 )', 
                         [email, hashedPassword]);

        // Generate a token
        const userPayload = { email: newEmployee.email, id: newEmployee.id }; // Payload can be adjusted based on what you need
        
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not defined.");
            return res.status(400).json({ message: 'JWT_SECRET is not defined' });
        }
        
        token = jwt.sign(userPayload, process.env.JWT_SECRET, { expiresIn: 60*60 });
        res.cookie('jwt', token, { 
            httponly: true,
            maxAge: 60 * 60 * 1000,
            sameSite: 'None', // Important for cross-origin cookies
            secure: true // Important for cookies over HTTPS});
        });
        console.log(`Token for user ${userPayload.email} created: ${token}`);
        res.status(201).json({ message: 'User registered successfully.', token: token });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ message: 'Error registering user' });
    }
});

app.post('/logout', (req, res) => {
    res.clearCookie('jwt', { sameSite: 'None', secure: true }); // Adjust attributes as necessary
    res.status(200).json({ message: 'Logged out successfully' });
  });

const generateCode = () => {
    return crypto.randomBytes(3).toString('hex'); // Generates a 6-character hex string
  };
  
  // Example usage in an endpoint
  app.post('/api/send-verification-code', async (req, res) => {
    const { email } = req.body;
    const client = await pool.connect();
    try {
      const userResult = await client.query('SELECT * FROM users WHERE email = $1', [email]);
      if (userResult.rows.length === 0) {
        return res.status(404).send('User not found.');
      }
  
      const code = generateCode();
      // Here, add the code to a verification_codes table, for example
      // Make sure to add expiration logic as per your requirements
  
      // Assuming sendVerificationEmail sends the email with the code
      await sendVerificationEmail(email, code); // Implement this function based on your email service
  
      res.send('Verification code sent.');
    } catch (err) {
      console.error('Error sending verification code:', err);
      res.status(500).send('An error occurred.');
    } finally {
      client.release();
    }
  });

  app.get('/userdashboard', auth, (req, res) => {
    console.log(req.userId);
    res.status(201).json({message: "user dashboard"})
  });

  // Route handler to insert a new task into the database (dashboard)
app.post('/api/dashboard', async (req, res) => {
    const { todo } = req.body;
    try {
        await pool.query('INSERT INTO dashboard (todo) VALUES ($1)', [todo]);
        console.log('Todo inserted successfully');
        res.status(201).send('Todo inserted successfully');
    } catch (err) {
        console.error('Error inserting todo:', err);
        res.status(500).send('Error inserting todo');
    }
});

// Route handler to remove a todo item by text
app.delete('/api/dashboard/:todo', async (req, res) => {
    const { todo } = req.params;
    try {
        await pool.query('DELETE FROM dashboard WHERE todo = $1', [todo]);
        console.log('Todo removed successfully');
        res.send('Todo removed successfully');
    } catch (err) {
        console.error('Error removing todo:', err);
        res.status(500).send('Error removing todo');
    }
});
  
