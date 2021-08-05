//callback abstraction
const request = require('request');

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FyYWgtMTIzIiwiYSI6ImNrcW04NGk1YzA2anUycHFiZHNkZ2l2ejMifQ.ABPWxz_clTIe0iPrLwqWXw&limit=1';
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to the Weather Service!', undefined);
        }
        else if(body.features.length === 0) {
            callback('Unable to find location. Try another search!', undefined);
        }
        else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
             
        }
    })
}

module.exports = geoCode;