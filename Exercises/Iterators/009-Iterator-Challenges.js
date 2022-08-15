// Define a callback function before you use it in a iterator.

        //function to callback in specificMessage
        function greeting(name) {
            console.log(`Hello, ${name}`);
        }
        //function to callback in specificMessage
        function farewell(name) {
            console.log(`Goodbye, ${name}`);
        }
        
        //function to utilize callback functions
        function specificMessage(callback, name) {
            callback(name);
        }
        
        //logs of greetings/farewells for custom names
        specificMessage(greeting, 'Tom');
        specificMessage(farewell, 'John');


// Chain two iteration methods on the same array.



// Use the optional arguments in an iterator to include the index or the entire array. (Check out MDN’s Array iteration methods page for more information)



// Use .reduce() to take a multi-layered array and return a single layer array from scratch.