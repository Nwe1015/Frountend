//we are going to make an event listener.. it will trigger with the DOM is loaded (aka upon visiting webpage)
addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("http://localhost:8080/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs) {
        let songId = song._id
        html += '<li> ${song.title} -  ${song.artist} - <a href="/details.html?id=${song._id}">Details</a> - </li>'
    }
    document.querySelector("#list_of_songs").innerHTML = html
    
})