// Lightning exercise:
// Create three `<h3>` tags in an HTML page that each contain 
// any text you want. Use javascript to listen for a click event 
// on the header tags and `console.log` their text.
// const h3Arr = document.querySelectorAll("h3")


const buttons = document.querySelectorAll("h3")
for (const button of buttons){
    button.addEventListener("click", event => {
        console.log(button.textContent)
    })
}