function removeChildElements(id) {
    var myNode = document.getElementById(id);
    while(myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    };
}