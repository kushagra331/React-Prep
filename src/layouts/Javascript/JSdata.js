export const questions = [
    {
        id : 1,
        question : "Difference between var & let ?",
        answer : `var is function scope, it can be redeclared, let is block scope, it can not be redeclared`
    },
    {
        id : 2,
        question : `Use arrow function`,
        answer : `It reduces the syntax, it makes code more readable also we can't use this 
        keyword. but if we want to use this then we need to bind the keyword with arrow function`
    },
    {
        id : 3,
        question : `Difference map() & filter()`,
        answer : `arr=[1,2,3,4]<br>
        map() : fun is used to manipulate the elements. ex : lets if we want to multiply each element of array with 2 
        arr.map((res)=>{
            return res*2
        })
        \n filter() : fun is used to filter the elements from the array. ex : if we want elements which are greater than 2 then will use filter 
        arr.filter((res)=>{
            return res>2
        })`
    },
    {
        id : 4,
        question : `Use arrow function`,
        answer : `It reduces the syntax, it makes code more readable also we can't use this 
        keyword. but if we want to use this then we need to bind the keyword with arrow function`
    },
    {
        id : 5,
        question : `How to create a new object `,
        answer : `With the help of object.create() method we can create a new object 
        const person = new Object();
        person.firstName = "John";`
    },
    {
        id : 6,
        question : `Use of slice method`,
        answer : `It used to extract particular part of the string. it does modify the original
         string const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
         const citrus = fruits.slice(1, 3); // Orange,Lemon`
    },
    {
        id : 7,
        question : `Type-Conversion`,
        answer : `Converting one datatype to another is call typeconversion`
    },
    {
        id : 8,
        question : `Difference between OR and AND operator`,
        answer : `AND && : if both oprands are true then only it will return true 
        OR || : if any one oprand is true then it will return true`
    },
    {
        id : 9,
        question : `Difference btw '==' vs '==='`,
        answer : `“==” is used to compare values whereas, “ === “ is used to compare both values and types.`
    },
    {
        id : 10,
        question : `Difference btw setTimeout() & setInterval()`,
        answer : `setTimeout will get called after a certain time where as 
        setInterval will get called repeatedly after a certain time.`
    },
    {
        id : 11,
        question : `Methods for API`,
        answer : `
        GET : to get the data from the server \n
        POST : to insert the data on the server
        Delete : to delete the data on the server
        PUT : to update the data on the server
        BATCH : to update the data on the server`
    },
    {
        id : 10,
        question : `Status code from the API response`,
        answer : `
        102 : Determines that there is no response available as of now but server has received & it's processing the request
        200 : Determines the status as "OK", it used to determine request has been succeed
        202 : The request has been recevied, but has not been completed
        300 : Request tells that, req has more than 1 responses
        302 : Found
        400 : bad request
        401 : un-aurthorize
        403 : Forbidden
        404 : Not found
        fetch() & Axios for using http request.
        To handle the fetch req we use try , catch method`
    },
    {
        id : 11,
        question : `How javascript works inside browser ?`,
        answer : `Every browser has js engine, there are 2 methods that js performs callstack & heap.
        Heap hv the memory pool for storing all the objects where in callstack all the code gets executed.`
    },
    {
        id : 12,
        question : `Use of event loop`,
        answer : `Event loop Used to handle async operations.`
    },
    {
        id : 13,
        question : `Difference synchronous btw async`,
        answer : `
        Synchronous : it runs the code line by line. its waits for one line to get executed until it runs the next line
        Asynchronous : It is independent of the other task. it can run simaltenously as well.`
    },
    {
        id : 14,
        question : `How to make synchronous task as asynchronous ?`,
        answer : `We can make it by using async await.`
    },
    {
        id : 15,
        question : `What is Closure ?`,
        answer : `lets say we hv one inner fun and outer fun, so the inner fun will form a 
        closure with the outer fun & inner fun will be able to access the variables of outer fun`
    },
    {
        id : 16,
        question : `What is function currying ?`,
        answer : `It is a adverse method to convert a fun with multiple arguments into multiple 
        fun with single arguments each. Currying in JavaScript transforms a function with 
        multiple arguments into a nested series of functions, each taking a single argument. 
        Currying helps you avoid passing the same variable multiple times, and it helps you 
        create a higher order function.
        Currying JS transforms a function which takes multiple arguments into fun with series 
        of functions, each fun taking single argument. currying helps you avoid passing the 
        same variable.`
    },

    {
        id : 17,
        question : `Why we use promises ?`,
        answer : `it is used to handle async operations, it is useful when we want to manage
        the conditions where we want to wait for the result.`
    },
    {
        id : 18,
        question : `What are the different data types present in javascript?`,
        answer : `JavaScript includes primitive and non-primitive data types. 
        The primitive data types in JavaScript include string, number, boolean, undefined, null, and symbol. 
        The non-primitive data type includes the object. A variable of primitive data type can contain only a single value.`
    },
    {
        id : 19,
        question : `Explain Hoisting in javascript.`,
        answer : `**Hoisting** is a concept which enables us to extract values of variables 
        and functions even before initialising/assigning value without getting error and this 
        is happening due to the 1st phase (memory creation phase) of the Execution Context.
        OR Hoisting is the default behaviour of javascript where all the variable and 
        function declarations are moved on top.`
    },
    {
        id : 20,
        question : `Why do we use the word “debugger” in javascript?`,
        answer : `The debugger keyword is used in the code to force stop the execution of the 
        code at a breaking point and calls the debugging function.`
    },
    {
        id : 21,
        question : `Difference between “ == “ and “ === “ operators.`,
        answer : `Both are comparison operators. The difference between both the operators 
        is that “==” is used to compare values whereas, “ === “ is used to compare both 
        values and types.`
    },
    {
        id : 22,
        question : `Difference between var and let keyword in javascript.`,
        answer : `The difference between let and var is in the scope of the variables they 
        create: Variables declared by let are only available inside the block where they're 
        defined. Variables declared by var are available throughout the function in which 
        they're declared.`
    },
    {
        id : 23,
        question : `Explain Implicit Type Coercion in javascript.`,
        answer : `Used to handle async operations.`
    },
    {
        id : 13,
        question : `Is javascript a statically typed or a dynamically typed language?`,
        answer : `JS is dynamically typed language.  In a dynamically typed language, the type of a variable is checked during run-time in contrast to a statically typed language, where the type of a variable is checked during compile-time.
        Since javascript is a loosely(dynamically) typed language, variables in JS are not associated with any type. A variable can hold the value of any data type.`
    },
    {
        id : 13,
        question : `Event loop : `,
        answer : `Used to handle async operations.`
    },
    {
        id : 13,
        question : `Event loop : `,
        answer : `Used to handle async operations.`
    },
    {
        id : 13,
        question : `Event loop : `,
        answer : `Used to handle async operations.`
    },

]