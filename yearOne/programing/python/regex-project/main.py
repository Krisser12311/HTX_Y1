# This is a program that uses regex project that checks data to a json file. (Address book)
import json 
import re # Regex


# Regex statements (We are using the compile function to make the regex call faster and more efficient when we call it multiple times)
nameRegexStatement = re.compile(r"^[A-Za-z]*$") # name example: "Kristoffer"
addressRegexStatement = re.compile(r'\b[A-Za-zÆØÅæøå]+\s+\d{1,4}(?:\s*(?:st\.?|th\.?|tv\.?|mf\.?|[ABCD]\s*[\d]{0,2}))?(?:\s*\d{4})?(?:\s+[A-Za-zÆØÅæøå]+)?\b') # address example: "Hjørringvej 1" or "Hjørringvej 1 1 th" or "Hjørringvej 1 1 th 9000" or "Hjørringvej 1 1 th 9000 Aalborg"
phoneRegexStatement = re.compile(r"^\d{8}$") # phone example: "12345678"
emailRegexStatement = re.compile(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Z|a-z]{2,}\b') # email example: "kris@kris"
ageRegexStatement = re.compile  (r"^\d{1,3}$") # age example: "21" max 999 years old

# Class for the address book
class AddressBook:
    def __init__(self, name, address, age, phone, email):
        self.name = name
        self.address = address
        self.age = age
        self.phone = phone
        self.email = email
    
    def writeDataToJsonFile(self):
        data = { # Here we cereate a dictionary with the data we want to write to the json file
            "name": self.name,
            "address": self.address,
            "age": self.age,
            "phone": self.phone,
            "email": self.email
        }
        try:
            with open("data.json", "r") as f: 
                json_data = json.load(f) # Here we load the data from the json file
        except FileNotFoundError: # If the file is not found we create a new json file
            json_data = [] # Here we create a empty list
            
        json_data.append(data) # Here we append the data to the list
        
        with open("data.json", "w") as f: 
            json.dump(json_data, f)   #  Dumps the data to the json file

def insertUser(name, address, age, phone, email):
    if re.match(nameRegexStatement, name):
        if re.match(addressRegexStatement, address):
            if re.match(phoneRegexStatement, phone): # This does not support +45 or 0045
                if re.match(emailRegexStatement, email): 
                    if re.match(ageRegexStatement, age):
                        # creates a new object of the AddressBook class
                        newAddressBook = AddressBook(name, address, age, phone, email)
                        # Here we call the writeDataToJsonFile function to write the data to the json file
                        newAddressBook.writeDataToJsonFile()
                        print("\t User has been added success fully to the address book")
                        runProgram()
                    else:
                        print("Error: Age is not valid")
                        insertUser(name, address, input("Please enter a valid age (Only numbers): "), phone, email)
                else:
                    print("Error: Email is not valid")
                    insertUser(name, address, age, phone, input("Please enter a valid email: "))
            else:
                print("Error: Phone is not valid")
                insertUser(name, address, age, input("Please enter a valid phone number (8 digets whitout +45): "), email)
                
        else:
            print("Error: Address is not valid")
            insertUser(name, input("Please enter a valid address (valid address example: Hjørringvej 1 or Hjørringvej 1 1 th or Hjørringvej 1 1 th 9000 or Hjørringvej 1 1 th 9000 Aalborg) "), age, phone, email)
    else:
        print("Error: Name is not valid")
        insertUser(input("Please enter a valid name: "), address, age, phone, email)

    
def getPersons():
    # Show all users from the json file
    with open("data.json", "r") as f:
        json_data = json.load(f)
        for person in json_data:
            print(f"\t {person}")
    print("\n")
    runProgram()

def runProgram():
    print("\n Welcome to the address book")
    print("\n \t 1. Insert a user")
    print("\t 2. Show all users")
    print("\t 3. Exit")
    userInput = int(input("\n \tWhat do you want to do? "))
    if userInput is None:
        print(userInput.isnumeric()) 
        print("Error: You must enter a number")
    else:
        if userInput == 1: # Runs the insertUser function.  
            name = input("\t Name: ")
            address = input("\t Address: ")
            age = input("\t Age: ")
            phone = input("\t Phone: ")
            email = input("\t Email: ")
            insertUser(name, address, age, phone, email)
        elif userInput == 2: # Runs the getPersons function.
            print("\n") 
            print("Showing all users:")
            print("\n")
            getPersons()
        elif userInput == 3: # Exits the program
            print("\t Exit")
            exit()
        else:
            print("Error: You must enter a number between 1 and 3")

runProgram()