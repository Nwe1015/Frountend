//we are going to make a listener... it will trigger with the DOM is loaded (aka upon visiting wepage)
addEventListener("DOMContentLoaded", async() {
    const response = await fetch("http://localhost:3000/songs")
    const songs = await response.json()

    let html = ""
    for(let song of songs){
        html += `<li>${song.title} - ${song.artist}</li>`
    }
    document.querySelector("#addedsongs").innerHTML = html
})
