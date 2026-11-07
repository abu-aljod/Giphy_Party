Welcome to Giphy Party

What is this page about?

On this page, you can search for multiple GIFs and you could remove them.

How it works?

The process is based on requesting and getting responses back from a specific API
The end point is: http://api.giphy.com/v1/gifs/

It takes a key to access the GIFs: http://api.giphy.com/v1/gifs/search?api_key=api_key

and it chooses the GIF to display by adding the gif type to the url:

```js

const response = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${gifType}`);

// giphyApiKey is your api key created on your giphy account. Note that you should create your own key, declare it in a separete file that is not being tracked using gitignore, and export it your main file

// gifType is the gif that is being searched


```

Once the user hits search, an http request is sent. There is an EvenListener for a click, once clicked, the function "giphyRequest" run. This function sends a request for the API and does the logic of choosing the GIF and returns it. 
The response is in JSON format which has a lot  of information
The gifs are located under response.data.data.images (under the images that is under data of data)

Since the response includes a lot of images, I have to pick one to display. The way I choose the one to display is by generating a random number and access its index and display it.

The browser has by default, a random GIF that says "HI" once the user opens the browser and it automatically go away once they search for a GIF.

This is Giphy Party!