
def eatIceCream():
    eatAIceCream = input("When was the last time you ate ice cream? ")
    yourName = input("What is your name? ")
    print(f"Hello {yourName}! I hope you are having a good day! Did you know that it has been {eatAIceCream} days since you last ate ice cream?")

def SodaUpgradet():
    # gets the amount of sodas
    sodas = int(input("How many sodas do you have? "))
    box = 12
    # Checks how many boxes you need and how many sodas you have left
    boxes = sodas // box
    sodasLeft = sodas % box
    print(f"You need {boxes} boxes and you have {sodasLeft} sodas left")

# Calculate celcius to fahrenheit
def celciusToFahrenheit():
    celcius = int(input("What is the temperature in celcius? "))
    fahrenheit = celcius * 9/5 + 32
    print(f"{celcius}°C is {fahrenheit}°F")

def whenIsTheBreakOver():
    # gets the time when the break starts
    breakStart = int(input("What time does the break start? "))
    breakLength = int(input("How long is the break? "))
    # calculates the time when the break ends
    if breakLength <= 15:
        breakEnd = breakStart + breakLength
        print(f"The break ends at {breakEnd}")
    else:
        print("The break is too long")


whenIsTheBreakOver()
    