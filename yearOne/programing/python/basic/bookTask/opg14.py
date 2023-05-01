import math

def calculateAngel(A,B,C):
    # Cheks if the input is a number
    if not A.isnumeric() and not B.isnumeric() and not C.isnumeric():
        # Cheks if the input is a positive number
        if A <= 0 or B <= 0 or C <= 0:
            return "Error: The sides must be a positive number and not 0"
        else:
            # Calculate the degrees
            A = math.acos((B**2 + C**2 - A**2) / (2 * B * C))
            B = math.acos((A**2 + C**2 - B**2) / (2 * A * C))
            C = math.acos((A**2 + B**2 - C**2) / (2 * A * B))
            # Return the degrees
            return A, B, C
    else:
        return "Error: The sides must be a number"


# Make 2 lists with names and emails 
email = []
name = []
def myInfo():
    #chek if there is a email at the same plase as the name
    userName = input("Name: ")
    # cheks if there is a email on the same place as the name
    if userName in name:
        print("There is already a email on the same place as the name")
    else:
        userEmail = input("Email: ")
        # cheks if the email is a email
        if not "@" in email:
            print("Error: The email must be a email")
        else:
            # Add the email and name to the list
            email.append(userEmail)
            name.append(userName)
            print("Your email is added to the list")

def addressBook(password, email, name):
    # make a list with the password
    passwordList = []
    emailList = []
    nameList = []
    print("\t 1.Add a person")
    print("\n \t 2. Remove a person")
    print("\n \t 3. Change a person")
    print("\n \t 4. Search for a person")
    print("\n \t 5. Edit all persons")
    print("\n \t 6. Exit")
    userInput = input("What do you want to do? ")
    if not userInput.isnumeric():
        print("Error: You must enter a number")
    else:
        if userInput == 1:
            myInfo()
        elif userInput == 2:
            removePerson()
        elif userInput == 3:
            changePerson()
        elif userInput == 4:
            searchPerson()
        elif userInput == 5:
            editAll()
        elif userInput == 6:
            print("Goodbye")
        else:
            print("Error: You must enter a number between 1 and 6")
        