# API Handling in JavaScript

APIs (Application Programming Interfaces) allow JavaScript to communicate with servers and external services.

## Fetch API

Modern way to make HTTP requests in JavaScript

### Basic Usage
```javascript
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### HTTP Methods
- **GET**: Retrieve data
- **POST**: Send data
- **PUT**: Update data
- **DELETE**: Delete data
- **PATCH**: Partial update

### Request Options
- method
- headers
- body
- credentials
- mode

## Working with JSON

### JSON.stringify()
Convert JavaScript object to JSON string

### JSON.parse()
Convert JSON string to JavaScript object

## Async/Await with Fetch

Cleaner syntax for API calls

## Error Handling

### HTTP Status Codes
- 200: Success
- 404: Not Found
- 500: Server Error

### Try-Catch
Handle errors in async/await

## Common Use Cases
- Fetching data from REST APIs
- Submitting forms
- Real-time data updates
- Third-party service integration

## Examples
Check the example files in this folder to see API handling in action!
