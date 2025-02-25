import re

# Define a function to validate the data
def validate_data(name, description, price):
    # Check if the name is valid
    if not re.match("^[a-zA-Z0-9 ]+$", name):
        return False

    # Check if the description is valid
    if not re.match("^[a-zA-Z0-9 ]+$", description):
        return False

    # Check if the price is valid
    if not re.match("^[0-9]+(\.[0-9]+)?$", price):
        return False

    # If all checks pass, return True
    return True

# Validate the data
for item in data:
    name = item.find("h2").text.strip()
    description = item.find("p").text.strip()
    price = item.find("span", class_="price").text.strip()

    # Validate the data
    if validate_data(name, description, price):
        print(name, description, price)
    else:
        print("Invalid data")