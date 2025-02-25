from scripts import validate
from scripts import scraping
from scripts import connect

def main():
    url = input("Enter the URL to scrape: ")
    scraping.scrape_data(url)

if __name__ == "__main__":
    main()