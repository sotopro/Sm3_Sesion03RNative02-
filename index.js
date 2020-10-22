// Semana 3 - Sesión 03

// define three example functions

function first(){
    console.log(1)
}
function second(callback){
    setTimeout(() => {
        console.log(2)
        callback();
    }, 0)
}
function third(){
    console.log(3)
}

// first();
// second(third);


// functions
function fn() {
    console.log('just a function');
}
// a function that take another function as an argument

function higherOrderFunction(callback) {
    // when you call a function that is passed as an argument, it is referred to as a  callback
    callback();
}

// passing a function
// higherOrderFunction(fn);

// demonstration of nested callback

function pyramidOfDoom() {
    setTimeout(() => {
        console.log(1)
        setTimeout(() => {
            console.log(2)
            setTimeout(() => {
                console.log(3)
            }, 600)
        }, 2200)
    }, 1200)
}

// pyramidOfDoom();

// example asynchronous function
function asynchronousRequest(args, callback) {
    // throw error if no argument passed
    if(!args){
        return callback(new Error('Who! Something went wrong!'))
    } else {
        return setTimeout(
            // Just adding in a random number 
            // returned different data
            () => callback(null, {body: args + ' ' + Math.floor(Math.random() * 10)}),
            500
        )
    }
}

// Nested asynchronous requests

function callbackHell() {
    asynchronousRequest('First', function first(error, response) {
        if(error) {
            console.log(error)
            return
        }
        console.log(response.body)
        asynchronousRequest(null, function third(error, response) {
            if(error) {
                console.log(error)
                return
            }
            console.log(response.body)
        })
    })
}

// execute
// callbackHell();

// initialize a promise

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolving an asynchronous request'), 2000)
})

promise.then((response) => {
    console.log(response)
})
// chain promise

promise
    .then((firstResponse) => {
        // return a new value for the nex then
        return `${firstResponse} And chaining!`
    })
    .then((secondResponse) => {
        console.log(secondResponse)
    })
function getUsers(onSuccess) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Handle resolve & reject in the asynchronous
            if(onSuccess) {
                resolve([
                    {id: 1, name: 'Pedro'},
                    {id: 2, name : 'Gustavo'},
                    {id: 3, name: 'Ismael'}
                ])
            } else {
                reject('Failed to fetch data!')
            }
        } , 1000)
    })
}

getUsers(true)
.then((response) => {
    console.log(response)
})
.catch((error) => {
    console.log(error)
})
// fetch('https://jsonplaceholder.typicode.com/posts/')
//     .then((response) => {
//         console.log(response)
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log('error', error)
//     })

// Async Function with async/ await
async function getUser() {
    try { 
        const response = await fetch('https://api.github.com/users/sotopro')
        const data = await response.json();

        console.log(data)
    }catch(error) {
        // handle error in catch
        console.error(error)
    }
}

const getUser = async () => {
    try { 
        const response = await fetch('https://api.github.com/users/sotopro')
        const data = await response.json();

        console.log(data)
    }catch(error) {
        // handle error in catch
        console.error(error)
    }
}

getUser();