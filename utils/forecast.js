const request =require('request');

// add the comment below (in next line after longitude in url) for making temperature in farenheit instead of celcius.
const forecast = (latitude, longitude, callback) => { // + '&units=f';
    const url = 'http://api.weatherstack.com/current?access_key=38f69e42a1607377d86f465ae91f214b&query=' + latitude + ',' + longitude
    request({ url, json: true}, (error, {body}) => {//changes: url: url (used shorthand) (error, response)
        // instead we used {body} coz response is object and only body property is used so {body}.
    if(error) {
        callback('Unable to connect to the Weather Service!', undefined);
    }
    else if(body.error) {
        callback('Unable to find location!', undefined);
    }
    else { // here and in line 10 we have replace response.body by body (using object destructuring) and 
        // in line 6 instead of writing response, we were just writing body, bcoz we r using response.body
        // below everywhere.
        callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
    }
    
    // console.log(response.body.current);
    // console.log('It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.');
})
}

module.exports = forecast