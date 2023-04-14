// com js
console.log(document.getElementById("email").getAttribute("value"));

// com jquery
console.log($("#email").attr("value"));

var settings = {
    "url": "https://www.googleapis.com/books/v1/volumes/FVYtAAAAYAAJ",
    "method": "GET"
}

$.ajax(settings).done(function(response){
    console.log(response);

    $("#book-title").text(response.volumeInfo.title);
    $("#book-author").text(response.volumeInfo.authors[0]);
});

$("#form").submit(function(e){
    e.preventDefault();
    $("#response").text("Requisição recebida. Boa sorte!")
})