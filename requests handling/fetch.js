const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users
fetch(url) // Call the fetch function passing the url of the API as a parameter
  .then(resp => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log(data);
    // Your code for handling the data you get from the API
  })
  .catch(function() {
    // This is where you run code if the server returns any errors
  });

// https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
