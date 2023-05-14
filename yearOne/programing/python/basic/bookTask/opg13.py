import math 

# Calculate the cirkel area by math.py
def area(radius):
    # Check if the radius is a number
    if not radius.isnumeric():
        if radius <= 0:
            return "The radius must be a positive number and not 0"
        else:
            print(math.pi * radius**2)
    else:
        return "Error: The radius must be a number"


# This is a triangle degrea calculator via trigonometry
def triangleDegree(a, b, c): 
    print("Tell me the length of the sides of the triangle and I will tell you all the degrees of the triangle")
    a = int(input("Side a: "))
    b = int(input("Side b: "))
    c = int(input("Side c: "))
    # Check if the sides are a number
    if not a.isnumeric() and not b.isnumeric() and not c.isnumeric():
        if a <= 0 or b <= 0 or c <= 0:
            return "Error: The sides must be a positive number and not 0"
        else:
            # Calculate the degrees
            A = math.acos((b**2 + c**2 - a**2) / (2 * b * c))
            B = math.acos((a**2 + c**2 - b**2) / (2 * a * c))
            C = math.acos((a**2 + b**2 - c**2) / (2 * a * b))
            # Return the degrees
            # Wheen the result is printed it must restart the function
            print(A, B, C)
            
    else:
        return "Error: The sides must be a number"
    

# Here we need to calculate if the int is a primint by takeing the sqrt of the int and then run it truh the loop
def isPrime(n):
    print("Tell me a number and I will tell you if it is a prime number")
    n = int(input("Number: "))
    # Check if the number is a number
    if not n.isnumeric():
        if n <= 0:
            return "Error: The number must be a positive number and not 0"
        else:
            # Calculate the sqrt of the number
            sqrt = math.sqrt(n)
            # Check if the number is a primint
            for i in range(2, int(sqrt) + 1):
                if n % i == 0:
                    return "The number is not a prime number"
            return "The number is a prime number"
    else:
        return "Error: The number must be a number"