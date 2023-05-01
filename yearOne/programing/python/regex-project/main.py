# Author: Kristoffer Sørensen
# This is a program that uses regex project that checks data to a json file. (Address book))
import json 
from json import JSONEncoder
import re # Regex

# Class for the address book
class AddressBook:
    def __init__(self, name, address, age, phone, email):
        self.name = name
        self.address = address
        self.age = age
        self.phone = phone
        self.email = email

def insertUser(name, address, age, phone, email):
    # Here we check if the user input is valid by using regex'
    # We use the re.match() function to check if the user input is valid
    if re.match(r"^[A-Za-z]*$", name):
        print("Name is valid")
        if re.match(r"^\d{1,3}\s?[A-Za-zæøåÆØÅ]+(?:\s\w+){0,3}\s?\d{0,4}$", address):
            print("Address is valid")
            if re.match(r"^\d{8}$", phone): # This does not support +45 or 0045
                print("Phone is valid")
                if re.match(r"^[^@]+@[^@]+\.[^@]+$", email): 
                    print("Email is valid")
                    if re.match(r"^\d{1,3}$", age):
                        print("Age is valid")
                        # First will ned to convert the data to json data
                        address = AddressBook(name, address, age, phone, email)
                        json_data = json.dumps(address.__dict__)
                        with open('data.json', 'w') as f:
                            json.dump(json_data, f)

                    else:
                        print("Error: Age is not valid")
                else:
                    print("Error: Email is not valid")
            else:
                print("Error: Phone is not valid")
                
        else:
            print("Error: Address is not valid")
    else:
        print("Error: Name is not valid")

insertUser("Kristoffer", "Hjørringvej 1", "21", "12345678","kris@kisrt.dk")
def getPersons():
    print("Getting persons")

def runProgram():
    print("Welcome to the address book!")