var inputText  = document.querySelector("#input-area");
var btn        = document.querySelector("#trans-btn");
var outputText = document.querySelector("#output");


function contructUrl(text){
    var server = "https://api.funtranslations.com/translate/minion.json" + "?text=" + text ;
    return server;

}

function tanslator(event){
    var text = inputText.value;
    var url = contructUrl(text);
    fetch(url).then(response => response.json()).then(json => {
     outputText.innerText =  json.contents.translated;
 })
 .catch(() => alert("error occured"));


}


btn.addEventListener("click", tanslator)