$(document).ready(function() {
  

  let queryURL = "https://gateway.marvel.com/v1/public/comics"

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {

    })




})