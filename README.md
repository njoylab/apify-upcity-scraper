# UpCity Reviews and Companies Scraper

A web scraper built with Apify SDK to extract company information and reviews from UpCity.com.

## Features

- Scrapes company listings from category pages
- Extracts detailed company profile information
- Supports Apify proxy configuration

## Input Parameters

The scraper accepts the following input parameters:

| Parameter | Type | Description | Required |
|-----------|------|-------------|-----------|
| `url` | string | The URL to scrape. Can be either a category page (e.g., "https://upcity.com/advertising") or a company profile page (e.g., "https://upcity.com/profiles/company-name") | Yes |
| `page` | integer | Page number to scrape for category pages (default: 1) | No |

## Example inputs:

### For scraping company listings:
```json
{
    "url": "https://upcity.com/advertising?list_sort_by=review_count&list_sort_order=desc&filter=0",
    "page": 1
}
```

### For scraping individual company details:
```json
{
    "url": "https://upcity.com/profiles/company-name"
}
```

## Output Format

### Company Listing
The output for category pages will be an array of company profiles.

### Company Detail
The output for individual company profiles will contain detailed company information as provided by the UpCity.

## Usage

1. **Configure input**: Set the required URL (either a category page or company profile) and optional page number
2. **Run the actor**: Execute the Apify actor with your input configuration
3. **Process results**: Access the structured company data from Apify's storage

## Disclaimer

This actor is designed for legitimate data collection from UpCity's public directory. Please ensure your usage complies with upcity.com's terms of service and robots.txt policies.