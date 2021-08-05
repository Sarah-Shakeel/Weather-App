// const file = require('fs');
 const request = require('request');
const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');
//Creating a new file using the fs module above in line 1
// file.writeFileSync('problems.txt','This is the issues page, where my code is not running although it is correct.');

//Making http request
// const url = 'http://api.weatherstack.com/current?access_key=38f69e42a1607377d86f465ae91f214b&query=29.478720,-25.772230' 
// request({ url: url, json: true}, ( error,response) => {
//     // const data = JSON.parse(response.body);
//     //console.log(data);
//      console.log(response.body.current);
//     console.log('It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.');
// })


//Customizing Http request
// //GeoCoding
// // Address -> (extracts) longitude/latitude -> Weather


//we are providing wrong address here in url to check the else if statement
//in order to make it work, replace 12what with lahore or any other valid place name
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1Ijoic2FyYWgtMTIzIiwiYSI6ImNrcW04NGk1YzA2anUycHFiZHNkZ2l2ejMifQ.ABPWxz_clTIe0iPrLwqWXw&limit=1&fuzzyMatch=false';
// request({ url: geocodeURL, json: true}, ( error,response) => {
//     if(error){
//         console.log('Unable to connect to the Weather Service!');
//     }
//     else if(response.body.features.length === 0){
//         console.log('Unable to find location.');
//     }
//     else{
//         const longitude = response.body.features[0].center[0];
//         const latitude = response.body.features[0].center[1];
//         console.log(longitude, latitude);
//     }
    
// })

//callback function

const add = (a,b, callback) => {

    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    },2000)
    
}
add(4,5,(sum) => {
    console.log(sum);
})
/*
//callback abstraction 'geoCode' function defined in utils directory
geoCode('Lahore', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})
//callback abstraction 'geoCode' function defined in utils directory
forecast(31.497754, 74.360106, (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})
*/
//callback chaining (one callback abstraction called in other one)

const address = process.argv[2];

if(!address)
{
    console.log('Please provide an address!');
}
else {
geoCode(address, (error, {latitude, longitude, location}) => {
    if(error) {
        return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if(error) {
            return console.log(error);
        }
        console.log(location);
        console.log(forecastData);
    })
}) 
}

//object destructuring and short hand property
const name = 'Sarah';
const myAge = 23;

const user = {
    name, //using short hand property of object, bcoz same name variable is defined above, so we're using 
          //that name in our object
    age: myAge,
    location: 'Lahore'
}

console.log(user);
//object destructurig
const product = {
    label: 'Red Notebook',
    price: 34,
    rating: 3
}

// const {label: productLabel, price, rating = 5} = product
// console.log(productLabel, price, rating);

const transaction = (type, {label, price, rating}) => {
    console.log(type, label, price, rating);
}

transaction('order', product);