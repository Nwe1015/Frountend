addEventListener("DOMContentLoaded", async function (){
    document.querySelector("updateBtn").addEventListener("click", updateSong)
    const urlParams = new URLSearchParams(window.location.search)
    const songId = urlParams.get("id")
    const response = await fetch("http://localhost:8080/songs/" + songId)
    if(response.ok){
        let song = await response.json()
        document.querySelector("#songId").value = song._id
        document.querySelector("#title").value = song.title
        document.querySelector("#artist").value = song.artist
        document.querySelector("#released").value = song.released
        document.querySelector("#popularity").value = song.popularity
        document.querySelector("#genre").value = song.genre
    }    

})

async function updateSong(){
    //create a song object from fields
    const songID = document.querySelector("#songId").value
    const song = {
        _id: document.querySelector("#songId").value,
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        released: document.querySelector("#released").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value ?
         document.querySelector("#genre").value.split(",") : []
    }
    const response = await fetch("http://localhost:8080/songs/" + songID, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song)
    })

    if(response.ok){
        alert("Song updated successfully")
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot update song"
    }
}