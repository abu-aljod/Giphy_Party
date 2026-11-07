// API key is essential you should creat an account and your own key and add it to the API
// endpoint: http://api.giphy.com/v1/gifs/search?api_key=<api_key>&q=<search_term>


let imgsDiv = document.getElementById("imgs-div");
const searchBtn = document.getElementById("search-btn");
const remvoeBtn = document.getElementById("remove-btn");
let counter = 0;

// working API key //
// You should create your own API key 
const giphyApiKey = GIPHY_API_KEY;

async function giphyRequest(gifType) {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${gifType}`);
    
    // generate a random number to pick a one gif from the result
    let resLeng = response.data.data.length;
    let num = Math.floor(Math.random() * resLeng)

    let imgData = response.data.data[num].images.downsized;

    return imgData;
}

async function createGif(gifType) {
    let imgData = await giphyRequest(gifType);

    let imgUrl = imgData.url;

    let newGif = document.createElement('img');

    newGif.src = imgUrl;

    // give it the class i created for gifs
    newGif.classList.add('gifs')

    imgsDiv.appendChild(newGif);
}

function removeGifs() {
    imgsDiv = document.getElementById("imgs-div");
    let children = imgsDiv.children;
    if (children.length <= 0) {
        console.log("No gifs to remove");
        return;
    }

    // as long as there is at least one child, remove it
    while (imgsDiv.firstChild) {
        imgsDiv.firstChild.remove();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    createGif("HELLO!");
    counter = 1;
});

searchBtn.addEventListener('click', function(e) {
    // if this is the first time a user serches, remove the default gif
    if (counter > 0) {
        // change it back to 0
        counter--;
        removeGifs();
    }

    let gifSearch = document.querySelector("#gif-search").value;
    if (gifSearch === "") {
        alert("Enter a valid search");
        throw new Error("Enter a valid search");
        
    }
    // encode the value the user seached for to insert it to the url
    let encodedSearch = encodeURIComponent(gifSearch);

    createGif(encodedSearch);
})

remvoeBtn.addEventListener('click', function(e) {
    removeGifs();
})