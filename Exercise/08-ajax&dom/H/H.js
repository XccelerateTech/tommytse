var icons = document.getElementsByClassName('icon');

for (let icon of icons) {
    icon.addEventListener('mouseover', function(){
            icon.style.width = '179.2px';
            icon.style.height = '179.2px';
        })
    icon.addEventListener('mouseleave', function(){
            icon.style.width = '128px';
            icon.style.height = '128px';
        })
}

var button = document.getElementById('learn-more');
    button.addEventListener('click', function() {
        document.getElementsByClassName('banner')[0].style.backgroundColor = 'transparent';
        console.log('hi');
    // document.getElementsByClassName('banner')[0].
    })