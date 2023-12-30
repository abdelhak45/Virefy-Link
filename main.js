let inputUrl = document.getElementById("inputUrl")
let virify = document.getElementById("virify")
let solition = document.getElementById("solition")
let reload = document.getElementById("reload")
let safe = document.querySelector('.safe')

// console.log(inputUrl,virify,solition);

virify.onclick = () => {
    reload.style.display = "block"
    setTimeout(()=>{
        if (inputUrl.value == "") {
            preventDefault()
        }else{
            let arr = inputUrl.value
            let hasHttps = arr.includes("https://")
            if (hasHttps) {
                solition.innerHTML = `<div>
                <h3>This is website in <span style="color: green;">Safe</span></h3>
                <br>
                <img src="./img/l5f3sv0r.png" width="200">
            </div>`
            }else{
                solition.innerHTML = `<div>
                <h3>This is website in <span style="color: red;">Not Safe</span></h3>
                <br>
                <img src="./img/udbtxz0f.png" width="200">
            </div>`
            }
        }
    },3000)
}