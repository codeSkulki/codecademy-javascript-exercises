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

        //mixed array of numbers and string
        const someArr = [1, 2, 3, 'Apple', 9];


        //chaining of two iteration methods
        const onlyNumSum = someArr.filter(item => typeof item === 'number')
        .reduce((accumulator, currentValue) => accumulator + currentValue)


        //spits out total sum of numbers in someArr
        console.log(onlyNumSum);

// Use the optional arguments in an iterator to include the index or the entire array. (Check out MDN’s Array iteration methods page for more information)

        //some array
        const newArr = [1, 2, 3, 4, 58, 49, 56, 69];
        
        //utilized optional arguments
        let newerArr = newArr.filter((item, index) => {
        return item > 7 && index > 4;

        });
        
        console.log(newerArr);

// Use .reduce() to take a multi-layered array and return a single layer array from scratch.

        const multiDimensArr = [
            [2556, 2300],
            [21256, 400],
            [3430, 5600],
            [4566, 1640000],
        ];
        
        //reduces multidimensional array to single layer array
        const reducedArray = multiDimensArr.reduce((prev, curr) => {
            console.log(prev, curr);
            return prev.concat(curr);
        })
        
        console.log(reducedArray);