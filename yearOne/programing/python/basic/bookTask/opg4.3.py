def nordicCountries(): # task 4.1 in 4.3
    print(" Norden  \n Nordę  \n Pohjoismaat  \n Norðurlöndin \n Norðurlond  \n Nunat Avannarliit \n Davveriikkat \n Nuorttarijkka \n Tave-enâmeh \n Noerhtelaanten  \n Tâʹvvjânnam ")
nordicCountries()

def ageOfFriends(): # task 4.2 in 4.3
    print(" Alfred \t 17 \n Noah \t \t 16 \n Daniel \t 16 \n Lærke \t \t 16 \n Gustav \t 16") # This is the names of the 5 people I know

ageOfFriends()


# This is a arrow generator that generates a arrow, with arrows pointing in the direction you want! (You can only choose between up, down, left and right)
def arrow(direction): # task 4.3 in 4.3
    if direction.lower() == "up":
        arrowUnitCode = "\u2191"

        # make a arrow out of arrowUnitCode using the print function and \t and \n
        print(f"\t \t \t {arrowUnitCode} \n \t \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n \t \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n \t \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n \t \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode}")
    elif direction.lower() == "down":
        arrowUnitCode = "\u2193"
        print(f"\t \t{arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n \t \t{arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n \t \t{arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n \t \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n \t \t \t {arrowUnitCode}")
    elif direction.lower() == "left":
        arrowUnitCode = "\u2190"
        print(f"\t \t \t {arrowUnitCode} \n \t \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n \t \t {arrowUnitCode} \t {arrowUnitCode} \t {arrowUnitCode} \n \t \t \t {arrowUnitCode}")
        print("You must be a phykopath")
    elif direction.lower() == "right":
        print("Are you sure you are okay?")
    else:
        print("Missing par")
""" 
What am i actually doing? 
"""

arrow("down")
arrow("up")