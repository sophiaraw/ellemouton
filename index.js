
function loadData() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/todos/1";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            processData(data);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function processData(data) {
    console.log(data);
}