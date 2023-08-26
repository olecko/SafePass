# SafePass - API Documentation

Welcome to the API documentation for SafePass, a security app that provides comprehensive scanning and analysis of URLs and domains. This API allows you to interact with external services such as VirusTotal and Censys for threat analysis and data retrieval.

## Table of Contents
1. Censys API
    * Search
2. VirusTotal API
    * Scan URL

## Censys API

### Search
Search the Censys database for information related to a query.

* URL: /api/censys/search
* Method: GET
* Authentication: Required (Bearer token)

### Query Parameters
* query: The search query to retrieve data from Censys.

### Headers
* Authorization: Bearer token for user authentication.

### Response
* Status Code: 200 (OK)
* Response Format: JSON

### Example: Request
`GET /api/censys/search?query=example.com`
`Authorization: Bearer your_auth_token`

### Example: Response
```
{
  "data": {
    // Retrieved data from Censys
  }
}
```

## VirusTotal API

### Scan URL
Scan a URL for potential threats using the VirusTotal API.

* URL: /api/virusTotal/scan
* Method: GET

### Query Parameters
* url: The URL to be scanned.

### Headers
* Authorization: Bearer token for user authentication.

### Response
* Status Code: 200 (OK)
* Response Format: JSON

### Example Request
`GET /api/virusTotal/scan?url=https://example.com`
`Authorization: Bearer your_auth_token`

### Example Response
```
{
  // Scan results from VirusTotal
}
```
