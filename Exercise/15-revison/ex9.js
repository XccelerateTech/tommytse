$('button').click(function (e) {
    e.preventDefault();
    callRandomGenUser(function(data){
        $('button').after(`
                <p>${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</p>
                `)
    });
});

function callRandomGenUser(cb){
    $(document).ready(function () {
        $.get("https://randomuser.me/api/"
        ).done(function(data){
                cb(data);
        })
    });
}