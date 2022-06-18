let quotesDiv = document.getElementById('quotes')
let catDiv = document.getElementById('cat-pic');


fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
});


let catButton = document.getElementById("give-cat")

catButton.addEventListener("click", evt => {

    
    fetch("https://api.thecatapi.com/v1/images/search?")
    .then(res => res.json())
    .then(function(cats) {
        catImageGen(cats)
    }); 
});

var catImageGen = function (cats) {
        cats.forEach(catssss => {
            catDiv.innerHTML = `<h3> Here is this cat wishing you the best day </h3>
            <img src="${catssss.url}" alt="kitty" />`
        });
    }


