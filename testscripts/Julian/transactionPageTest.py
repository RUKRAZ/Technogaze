import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select

# Start a new browser session
driver = webdriver.Chrome()  # Or use another browser like Firefox or Edge

# Open the payment page URL
driver.get("http://localhost:3000/paymentPage")

# Fill in credit card details
driver.find_element(By.ID, "name").send_keys("John Doe")
driver.find_element(By.ID, "card").send_keys("1234 5678 9012 3456")
select_month = Select(driver.find_element(By.ID, "month-select"))
select_month.select_by_visible_text("May")  # Example month
select_year = Select(driver.find_element(By.ID, "year-select"))
select_year.select_by_visible_text("2027")  # Example year
driver.find_element(By.ID, "code").send_keys("123")

# Fill in billing address
driver.find_element(By.ID, "country").send_keys("United States")
select_country = Select(driver.find_element(By.ID, "country-select"))
select_country.select_by_visible_text("United States")
driver.find_element(By.ID, "adress").send_keys("123 Elm Street")
driver.find_element(By.ID, "city").send_keys("Anytown")
driver.find_element(By.ID, "state").send_keys("CA")
driver.find_element(By.ID, "zip").send_keys("90210")

# Fill in contact information
driver.find_element(By.ID, "email").send_keys("john.doe@example.com")

# Submit the form
driver.find_element(By.CLASS_NAME, "btn").click()

# Wait for a response page to load (if applicable)
time.sleep(5)

# Verify that the form was submitted (e.g., by checking the URL or page content)
# This part will depend on the specific behavior of the application after form submission.

# Close the browser session
driver.quit()




