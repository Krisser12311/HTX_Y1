# selenium 4
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

# Notet: This variavble is used to set the path of the webdriver
url = "https://studio.code.org/projects/applab/AuKpIVK2yflFAc8rpeXJdx8FjY39o2nOZIbynKS3KTE"

driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))

driver.get(url)
print(driver.title)
driver.implicitly_wait(1)

# Gets the main element called visualization 
visualization = driver.find_element(By.ID, "visualization")

print(visualization)

#def GrabScreenShot(): # This function is used to grab a screenshot of each page
#    driver.save_screenshot("screenshot.png") # This is the name of the screenshot TODO: Make this dynamic

def HTMLGrab(): # This function is used to grab the element inside of the visualization container and save it as a html file
    html = visualization.get_attribute('innerHTML')
    

def CSSGrab(): # This function is used to grab the element inside of the visualization container and save it as a css file TODO: make it dynamic so it can be used for other elements as well
    #css = visualization.get_attribute('style')
    print("Success")

def JSGrab(): # This function is used to grab the element inside of the visualization container and save it as a js file TODO: make it dynamic so it can be used for other elements as well
    #js = visualization.get_attribute('script')
    print("Success")