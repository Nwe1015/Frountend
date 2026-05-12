addEventListener("DOMContentLoaded", function (){
    document.querySelector("#addBtn").addEventListener("click", addSong)

})
// add the song to the database.. it has to be async functions because we are calling data outside of our function
async function addSong(){
    //create a song objevt based on the form that user fills out. This will make life easier when we want to send the data to the backend 
    const song = {
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        released: document.querySelector("#released").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") : [] 
    }
    const response = await fetch("http://localhost:8080/songs",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song)
    })
    if(response.ok){
        const result = await response.json()
        alert("Added song with Id of " + result._id)
        //reset the forms after song is sucessfully added
        document.querySelector("#form").reset()
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot add song" 
    }
    
}