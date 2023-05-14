# Create 3 varibles that calculates the angel of a triangle 
def calculateAngels(Angel1, angel2, angel3):
    #chek if all varibles are numbers
    if not angel1.isnumeric() and not angel2.isnumeric() and not angel3.isnumeric():
        # check what angel that is missing
        if angel1 == 0:
            angel1 = 180 - angel2 - angel3
            return angel1
        elif angel2 == 0:
            angel2 = 180 - angel1 - angel3
            return angel2
        elif angel3 == 0:
            angel3 = 180 - angel1 - angel2
            return angel3
    else:
        return "Error: The angels must be a number"
