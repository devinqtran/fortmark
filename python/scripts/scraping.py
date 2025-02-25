import requests
from bs4 import BeautifulSoup

# Send a GET request to the website
url = "https://www.example.com"
response = requests.get(url)

# Parse the HTML content using Beautiful Soup
soup = BeautifulSoup(response.content, "html.parser")

# Find the data you want to scrape
data = soup.find_all("div", class_="data")

# Extract the data from the HTML elements
for item in data:
    name = item.find("h2").text.strip()
    description = item.find("p").text.strip()
    price = item.find("span", class_="price").text.strip()

    # Print the data
    print(name, description, price)