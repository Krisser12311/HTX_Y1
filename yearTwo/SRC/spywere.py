import keyboard
import time
import cv2
import pyautogui
from PIL import Image
cap = cv2.VideoCapture(0)

def startUp():
    if not cap.isOpened():
        print("Webcam not available")
        while True:
            screenshot = pyautogui.screenshot()
            timestamp = time.strftime("%Y%m%d-%H%M%S")
            filename = f"screenshot_{timestamp}.png"
            screenshot.save(filename)
            print(f"Screenshot saved as {filename}")
            time.sleep(5)
    else:
        while True:
            ret, frame = cap.read()
            if not ret:
                print("Couldn't read")
                break
            timestamp = time.strftime("%Y%m%d-%H%M%S")
            filename = f"image_{timestamp}.jpg"
            cv2.imwrite(filename, frame)
            print(f"Frame saved as {filename}")

            print("Taking screenshot")
            screenshot = pyautogui.screenshot()
            print("Screenshot taken")
            timestamp = time.strftime("%Y%m%d-%H%M%S")
            filenameScreenShot = f"screenshot_{timestamp}.png"

            screenshot.save(filenameScreenShot)
            print(f"Screenshot saved as {filenameScreenShot}")
            time.sleep(5)


            time.sleep(5)
        print("Closes webcam")

startUp()
