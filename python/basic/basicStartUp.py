# This is made for "opgavesæt 1" in the course "Python for begyndere"

# Imports
import random


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

def eightBall():
    question = input("Ask a question: ")
    TheBall = random.randrange(0, 8)
    print(question)
    print(eightBallTxT[TheBall])

def trollEightBall():
    TheBall = random.randrange(0, 8)
    print(TheBall)
    print(trollEightBallTxT[TheBall])


def isLeapYear(year):
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                print("True")
            else:
                print("False")
        else:
            print("True")
    else:
        print("False")

def isPrimeInt(number):
    if number == 2:
        print("True")
    elif number % 2 == 0:
        print("False")
    else:
        for i in range(3, number, 2):
            if number % i == 0:
                print("false")
                break
        else:
            print("True")

def primeInts():
    for i in range(0, 1000000):
        print(i)
        isPrimeInt(i)

def factorial(number):
    if number == 0:
        print("1")
    else:
        for i in range(1, number):
            number *= i
        print(number)


def tipCalculator(bill):
    if bill * 0.15 < 20:
        print("20")
    elif bill * 0.15 <= 100:
        print(bill * 0.15)
    else:
        print(f"100 you could also pay {bill * 0.15}")
