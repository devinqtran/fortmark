import requests
from bs4 import BeautifulSoup
import sqlite3

def scrape_data(url):
    # Send a GET request to the URL
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

        # Connect to the database
        conn = sqlite3.connect("database/fortmark.db")
        cursor = conn.cursor()

        # Insert the data into the table
        cursor.execute("""
            INSERT INTO data (name, description, price) VALUES (?, ?, ?);
        """, (name, description, price))

        # Commit the changes
        conn.commit()

        # Close the connection
        conn.close()