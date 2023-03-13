import math

# This program calculates the temperature of a mixture of two liquids of different temperatures
# The formula is: T = (m1*c1*T1+m2*c2*T2)/(m1*c1+m2*c2)

def mixLiquids():
    # Get the input from the user
    m1 = float(input("Enter the mass of the first liquid: "))
    c1 = float(input("Enter the specific heat of the first liquid: "))
    T1 = float(input("Enter the temperature of the first liquid: "))
    m2 = float(input("Enter the mass of the second liquid: "))
    c2 = float(input("Enter the specific heat of the second liquid: "))
    T2 = float(input("Enter the temperature of the second liquid: "))

    # Calculate the temperature of the mixture
    T = (m1*c1*T1+m2*c2*T2)/(m1*c1+m2*c2)

    # Print the result
    print("The temperature of the mixture is", T)

def sameLiquid():
    # To calculate the water temperature of a mixture, multiply the mass and temperature of the first container together and add it to the product of the mass and temperature of the second container. Finally, take that result and divide it by the sum of the masses of water of each container.
    # The formula is: T = (m1*T1+m2*T2)/(m1+m2)
    # Get the input from the user
    m1 = float(input("Enter the mass of the first liquid: "))
    T1 = float(input("Enter the temperature of the first liquid: "))
    m2 = float(input("Enter the mass of the second liquid: "))
    T2 = float(input("Enter the temperature of the second liquid: "))
    # Calculate the temperature of the mixture
    T = (m1*T1+m2*T2)/(m1+m2)
    # Print the result
    print("The temperature of the mixture is", T)

mixLiquids()