function incrementeBouton(){
    var value = parseInt(document.getElementById('mybutton').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('mybutton').value = value;
}