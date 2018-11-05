/*
Construct a button in an html file, when pressed, the button calls
this api: https://randomuser.me/api/, get information for two users when you
have this information fire off a second request to
https://api.sunrise-sunset.org/ api, you will need to
 pass the users latitude and longitude into the api call,
 once you have the information using JQuery add the users timezone
 to the html page as well as the Sunrise and Sunset time.
 */
class User {
    constructor(options) {
        this.name = options.name.title +" "+ options.name.first + " " + options.name.last;
        this.coordinates.latitude = options.coordinates;
    }
}

$('button').click(function (e) {
    e.preventDefault();
    callRandomGenUser();
});

function callRandomGenUser(){
    $(document).ready(function () {
        $.get("https://randomuser.me/api/?results=2"
        ).done(function(data){
            let people =  data.results.map(user=>new User(user));
            for(i in people){

            $('button').after(`
            <p>${people[i].name}</p>
            `)
            console.log(people)[i];
            Time(people[i]);
            }
        })
    });
}

function Time(person) {
    $(document).ready(function () {
        $.get(`https://api.sunrise-sunset.org/json?lat=${person.coordinates.latitude}&lng=${person.coordinates.longitude}&formatted=0`
        ).done(function(data){
            let sunset = new Date(data.results.sunset);
            let sunrise = new Date(data.results.sunrise);
            append(`
            <p>Sunset is at:${sunset}</p>
            <p>Sunrise is at:${sunrise}</p>
            `);
        });
    });
}

