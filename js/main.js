//generate a radonm meme using an API

//api: https://api.imgflip.com/get_memes

//The user will click a button to get an suggested Meme. This will start a function.
document.querySelector('button').addEventListener('click', getMeme)

//Make a function that requests data from meme API.
function getMeme() {


    fetch('https://api.imgflip.com/get_memes')
        //turn it to a json object
        .then(res => res.json())
        //process the data and do something with it
        .then(data => {

            // get the list of memems from meme object
            //data.memes is the parentof the meme object
            const memes = data.data.memes
            //get a random meme from the list(this will go through the whole list and pick a random number from 0)
            //some help with michael k on nasa complex assignment, I applied the same concept here
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
            const randomIndex = Math.floor(Math.random() * memes.length)

            const randomMemes = memes[randomIndex]
            //log a random meme in the console to see if it works.
            console.log(randomMemes)

            //display meme name and image
            document.querySelector('h2').innerText = randomMemes.name
            document.querySelector('img').src = randomMemes.url
        })
        //cathes errors
        .catch(err => {
            console.log(`error ${err}`)
        });

}


