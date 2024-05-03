import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Set up the WebDriver
driver = webdriver.Chrome()  # or use Firefox(), Edge(), etc.

# Define the URL of the page to test
url = "http://localhost:3000/path-to-your-react-app"

# Navigate to the specified URL
driver.get(url)

# Allow some time for the page to load completely
time.sleep(5)

# Fill out the form
driver.find_element(By.ID, "name").send_keys("John Doe")
driver.find_element(By.ID, "cardNumber").send_keys("4111 1111 1111 1111")  # Example Visa test card number
select_month = Select(driver.find_element(By.ID, "month"))
select_month.select_by_visible_text("05")  # May
select_year = Select(driver.find_element(By.ID, "year"))
select_year.select_by_visible_text("2027")  # Example year
driver.find_element(By.ID, "code").send_keys("123")  # CVV
driver.find_element(By.ID, "email").send_keys("test@example.com")

# Submit the form
submit_button = driver.find_element(By.XPATH, "//button[@type='submit']")
submit_button.click()

# Wait for a response that indicates completion or a new page load, adjust according to your app's behavior
try:
    # Example: Wait for an element that confirms the submission
    element_present = EC.presence_of_element_located((By.ID, 'confirmation_message_id'))
    WebDriverWait(driver, 10).until(element_present)
    
    print("Form submitted and confirmation received.")
except TimeoutException:
    print("Timed out waiting for page to load")

# Optionally, assert conditions here to verify successful payment or navigation

# Clean up: close the browser window
driver.quit()




