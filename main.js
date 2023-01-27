const button = document.querySelector('.btn');
const image = document.querySelector('.image');
const url = "http://aws.random.cat//meow";

button.addEventListener('click', () => {
    let isLoaded = image.complete;

    if (isLoaded) {
        fetchHandler()
    }
})

async function fetchHandler() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        image.src = data.file
    }catch(error){
        console.log(error)
    }
}
