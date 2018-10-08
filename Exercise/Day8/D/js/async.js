class User {
    constructor (input) {
        this.firstName = input.name.first;
        this.lastName = input.name.last;
        this.email = input.email;
        this.DOB = input.dob.date;
    }

}

function genRandUser() {
    var http = new XMLHttpRequest();
    http.open(
        'GET',
        'https://randomuser.me/api/',
        true
    );

    http.onreadystatechange = function() {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            var data = JSON.parse(http.responseText);
            var user = new User(data.results[0]);
            users.push(user);
        } else {
            console.log("error occurred" + http.status);
        }
    };

    http.send();
}

var users=[];
for(let i=0;i<5;i++){
    genRandUser();
}
console.log(users);
