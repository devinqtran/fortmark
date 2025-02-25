import sqlite3

# Connect to the database
conn = sqlite3.connect("database.db")
cursor = conn.cursor()

# Create a table to store the data
cursor.execute("""
    CREATE TABLE IF NOT EXISTS data (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        price REAL NOT NULL
    );
""")

# Insert the data into the table
for item in data:
    name = item.find("h2").text.strip()
    description = item.find("p").text.strip()
    price = item.find("span", class_="price").text.strip()

    # Insert the data into the table
    cursor.execute("""
        INSERT INTO data (name, description, price) VALUES (?, ?, ?);
    """, (name, description, price))

# Commit the changes
conn.commit()

# Close the connection
conn.close()