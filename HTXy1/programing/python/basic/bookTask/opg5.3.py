import math

IMPORTANTNUMBERS = [112, 114, 93993739]

daysSinceIce = 120
myNameIs = "Kristoffer"

def nameAndDaysSinceIce():
    print(f"My name is {myNameIs} and it has been {daysSinceIce} days since i ate a icecream")

def iWillNotGetIceInTenDays():
    print(f"My name is {myNameIs} and it has been {daysSinceIce + 10} days since i ate a icecream")

def explainHowTheNewLineWorks():
    print("If you want to make a new line you can use the \\n feature this will make a new line")

explainHowTheNewLineWorks()

# We got 52 sodas we want to put them all into a box in the box there are space for 24 we dont want to have any half full boxes
def sodas():
    boxes = 52 % 12
    print(f"you need {boxes} boxes")

sodas()

def calculateCircle(radius):
    circleA = math.pi * radius**2
    print(circleA)

calculateCircle(5)

def needToKnowPhoneNumbers():
    for number in IMPORTANTNUMBERS:
        print(number)

needToKnowPhoneNumbers()
