# Technogaze

## Background

Team Technogaze was formed by the students of California State University - Sacramento to develop infrastructure solutions for Bay Develops and to complete their Senior Project requirements. This team is led by Indraneel Bhattacharjee and consists of 7 more team members who are engineers, developers, and UI/UX Designers.

## Team information

1. Indraneel Bhattacharjee
2. Dip Patel
3. Sanjot Chandi
4. Saniya Patel
5. Cathy Khong
6. Tanner Colbert
7. Kevinpreet Singh
8. Julian Martinez

Repository for CSC 191 - Infrastructure Development for Bay Develops

## Install
To rebuild the project, run the following commands in order:
* Make sure `node` is in your path.
* `git clone https://github.com/RUKRAZ/Technogaze.git` - latest version on GitHub
* `npm install --global yarn` - installing the package manager
* `yarn add --save react react-dom @types/react @types/react-dom` -install dependencies
* `npm update react-icons` - install icons for social media platforms

## Configuration
To run using yarn, input the following commands in order:
*`yarn`
*`yarn start `

## Usage

Once the webpage is running, point your browser to http://localhost:3000 to access the web interface.

## API

StripeAPI: For payment.

Auth0: For user authentication.

OpenAI: For custom chatbot. 

## Testing

## Deployment

## Developer Instructions

Here is a tutorial on how to get the repo onto your local machine as well as pushing and pulling.

Step 1: Go to our main repo on github here is the link. https://github.com/RUKRAZ/Technogaze
Step 2: Click on code and drop down menu will apear. Leave it on the HTTPS tab and copy that url.
Step 3: Now that you have the link open up your command prompt and change the directiory to where you would like the project to be.
Step 4: type in this command git clone https://github.com/RUKRAZ/Technogaze.git
Step 5: Now you have the project on your local machine.
Step 6: Download and Install GitHub Desktop this will allow for updating your branch and push to the main without having to use the command prompt
Step 7: Sign into GituHub Desktop and then open your repo. Choose the branch you would like to work on and then open it in your IDE make changes come back to the Github Desktop and it will say would you like to push. You click that then you will make a pull request to the main branch now you are all done
## Key Milestones

## UI/UX

The user interface (UI) adopts a sleek, minimalistic design with a modern aesthetic, characterized by its intuitive navigation and thoughtful placement of elements. Each component is strategically positioned, enhancing the user experience through logical arrangement and generous whitespace that provides clarity and breathing room. The choice of a black and muted red color scheme not only exudes sophistication but also creates striking contrast, drawing attention to key features. Additionally, the carefully selected font size ensures optimal readability, catering to users of all preferences and ensuring a seamless interaction with the interface.

Logo: 

<img width="304" alt="image" src="https://github.com/RUKRAZ/Technogaze/assets/113735951/471480cb-e549-48bf-bc63-19b808e70125">

Logo with transparent background (what we use):

![Bay Develops Logo](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/baydevelopslogo-1-1%402x.png)

### Web Pages

<img width="505" alt="image" src="https://github.com/RUKRAZ/Technogaze/assets/113735951/49dd99a4-730c-422c-84bd-6c747e6aa908">

<img width="544" alt="image" src="https://github.com/RUKRAZ/Technogaze/assets/113735951/117cbc56-f6fa-4166-83a5-a5f88c2fa070">

<img width="718" alt="image" src="https://github.com/RUKRAZ/Technogaze/assets/113735951/37579608-e491-48b3-91da-159ffc34f7d5">

![Dashboard](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/Mockups/User%20Dashboard.jpg)

![Contact Us](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/Mockups/Contact%20Us.png)

![Services](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/Mockups/ServicesPage.jpg)

## ERD 

![ERD](https://github.com/RUKRAZ/Technogaze/blob/main/src/Database/erd.png)

## Flow Diagram

![Flow Diagram](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/Bay%20Develops%20Flow.jpg)

## Database

## Purpose and Scope
This database system is designed to support a web-based application that manages user interactions, transactions, and project-related activities. The primary goal of the database is to store and retrieve data efficiently, ensure data integrity, and support complex business logic required by the application.

## Database Schema Description
The database consists of five main tables: `User`, `Employee`, `Transaction`, `Dashboard`, and `Project`. Each table serves a distinct purpose:

1. **User Table**:
   - **Purpose**: Stores all data related to the users of the application.
   - **Fields**:
     - `user_id`: Serial primary key.
     - `username`: VARCHAR(50), not nullable.
     - `email`: VARCHAR(100), unique, not nullable.
     - `password`: VARCHAR(100), not nullable.

2. **Employee Table**:
   - **Purpose**: Contains information about employees who manage and operate the application.
   - **Fields**:
     - `employee_id`: Serial primary key.
     - `username`: VARCHAR(50), not nullable.
     - `email`: VARCHAR(100), unique, not nullable.
     - `password`: VARCHAR(100), not nullable.

3. **Transaction Table**:
   - **Purpose**: Logs all transactions made within the application.
   - **Fields**:
     - `transaction_id`: Serial primary key.
     - `user_id`: Integer, foreign key referencing `User`.
     - `product_id`: Serial, unique.
     - `product_name`: VARCHAR(100).
     - `transaction_date`: TIMESTAMP, default CURRENT_TIMESTAMP.

4. **Dashboard Table**:
   - **Purpose**: Used by employees to manage tasks and monitor progress.
   - **Fields**:
     - `task_id`: Serial primary key.
     - `employee_id`: Integer, foreign key referencing `Employee`.
     - `task_description`: TEXT.
     - `created_at`: TIMESTAMP, default CURRENT_TIMESTAMP.

5. **Project Table**:
   - **Purpose**: Manages information related to various projects within the organization.
   - **Fields**:
     - `project_id`: Serial primary key.
     - `project_name`: VARCHAR(100).
     - `status`: VARCHAR(50).
     - `manager`: VARCHAR(100), referring to an employee.
     - `notes`: TEXT.

## Relationships
- **Users and Transactions**: One-to-many relationship where each user can have multiple transactions.
- **Employees and Tasks**: One-to-many relationship from `Employee` to `Dashboard`, indicating that each employee can manage multiple tasks.
- **Projects and Employees**: A referential link via the `manager` field in the `Project` table to the `Employee` table, suggesting that each project is managed by one employee.

## Database Features
- **Relational Integrity**: Ensured through foreign keys and unique constraints.
- **Data Consistency**: Enforced by transaction controls and consistent schema definitions.
- **Scalability and Performance**: Indexes on frequently queried fields like `user_id`, `employee_id`, and email fields improve query 
performance. The database is designed to efficiently scale with increasing data volume and complexity.
- **Security**: Passwords are stored securely using hashing algorithms. Access control mechanisms restrict unauthorized database access.

## Technical Specifications
- **Database Management System (DBMS)**: PostgreSQL
- **Hosted**: AWS RDS, providing high availability, backup solutions, and easy scalability.
- **Access Patterns**: Primarily CRUD (Create, Read, Update, Delete) operations with complex queries supporting business intelligence and data analysis.

## Maintenance and Monitoring
- **Backup and Recovery**: Regular backups are scheduled, and disaster recovery plans are tested bi-annually.
- **Performance Monitoring**: Continuous monitoring with alerts set up for any performance anomalies or operational issues.
- **Data Integrity Checks**: Regular integrity checks are performed to ensure no corruption or data loss.


## Interactions:
1. When the employee makes an update to the “To-Do List” or the “Project” section of the employee dashboard the employee dashboard and user dashboard are updated. Which requires the Dashboard table to be updated with this new information.
2. When the employee creates a project it gets saved to the Project table.
3. When a user purchases a product the “Recommended Products” section of the user dashboard and the “Clients” section of the employee dashboard must be updated. The transaction information gets saved in the Transaction table. The corresponding product icon will be removed from the “Recommended Products” tab and the client information along with what product they bought will be displayed in the “Clients” tab.

