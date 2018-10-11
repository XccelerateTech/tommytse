function removeChildElements(id) {
    var myNode = document.getElementById(id);
    while(myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    };
    //document.getElementById(id).innerHTML('');
}

