addEventListener("DOMContentLoaded", async function(){
    //Grab the search from the url after the questionmark
    const urlParams = new URLSearchParams(window.location.search)
    const songId = urlParams.get("id")
    console.log(songId)

    const response = await fetch("http://localhost:8080/songs/" + songId)
    const song = await response.json()
    console.log(song)

    let heading = ""
    heading += `${song.title}`
   document.querySelector("h1").innerHTML = heading

    let html = ""
    html += `
        <h3> Artist - ${song.artist}</h3>
        <p> Released - ${song.released}</p>
        <p>Popularity - ${song.popularity}</p>
    `
    document.querySelector("div").innerHTML = html
})