function loadDoc(url, resType, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.responseType = resType;
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            callback(xhttp.response);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhttp.send();
    return false;
}

function getMovieInfo(title){

}

function extractTitles(wikiPage) {
    const parser = new DOMParser();
    wikiPage = parser.parseFromString(wikiPage, "text/html");
    let table = wikiPage.getElementById("Feature_films").parentElement.nextSibling.nextSibling;
    let i = table.getElementsByTagName('i');
    for (title of i) {
        title = title.innerText.trim();
        document.getElementById("titles").innerHTML+= "<li class='list-group-item bg-dark'><a href='javascript:void(0)' onclick='return getMovieInfo("+title+")'>" +title+"</a></li>";
    }
}

loadDoc("https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/Tim_Burton_filmography", "text/html", extractTitles)
