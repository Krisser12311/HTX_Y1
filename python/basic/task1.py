# This is made for "opgavesæt" 1 in the course "Python for begyndere"

# Imports
import random

# variables
num = 0
num1 = 0
num2 = 0
num3 = 0

# array list
eightBallTxT = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
trollEightBallTxT = ["Fuck off", "Fuck off", "Fuck off", "Fuck off", "Fuck off", "Fuck off", "Fuck off", "Fuck off"]

def isPosetiveOrNegative(num):
    if num > 0:
        print("Positive")
    elif num < 0:
        print("Negative")
    else:
        print("Zero")

def isEvenOrOdd(num):
    if num % 2 == 0:
        print("The number is even")
    else:
        print("The number is odd")


def findLowestNumber(num1, num2, num3):
    if num1 < num2 and num1 < num3:
        print(num1)
    elif num2 < num1 and num2 < num3:
        print(num2)
    else:
        print(num3)

# make random 8 ball
def eightBall():
    TheBall = random.randrange(0, 8)
    print(eightBallTxT[TheBall])

# make random troll 8 ball
def trollEightBall():
    TheBall = random.randrange(0, 8)
    print(TheBall)
    print(trollEightBallTxT[TheBall])

trollEightBall()