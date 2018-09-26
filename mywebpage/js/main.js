$(document).ready(()=>{
    // magic cursor
    jQuery('body').jstars({
        image_path: 'img',
        image: 'jstar-map.png',
        style: 'rand',
        width: 27,
        height: 27,
        style_map: {
            white: 0,
            blue: -27,
            green: -54,
            red: -81,
            yellow: -108
        },
        delay: 300
    });

    //effect for h1 in jumbotron
    $('.jumbotron h1').on('mouseenter', event => {
        $(event.currentTarget).toggleClass('color-black');
    }).on('mouseleave', event =>{
        $(event.currentTarget).toggleClass('color-black');
    })

});

