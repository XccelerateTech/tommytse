function whoIsInSpace(callback) {
    var http = new XMLHttpRequest();
    http.open(
        'GET',
        `http://api.open-notify.org/astros.json`,
        true
    );

    http.onreadystatechange = function() {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            let data = JSON.parse(http.responseText);
            callback(data);
            // callback(data.people.map(function(person) {
            //     return person.name;
            // }));
            console.log(http.responseText)
        } else {
            console.log("error occurred" + http.status);
        }
    };

    http.send();
};

whoIsInSpace(function(data) {
    var arr =[];
    for(x in data.people) {
    arr[x] = data.people[x].name;
    }
    console.log(arr);
});