// "use strict"
// const name = document.getElementsByClassName("UserName")
// const password = document.getElementsByClassName("password")
// const form = document.getElementsByClassName("form")
// const email = document.getElementsByClassName("email")

// const errorElement = document.getElementsByClassName("error")

// form.addEventListener('submit', (e) => {
//     let messages = [];
//     if (name.value === "" || name.value === null) {
//         messages.push("Name is required")
//     }
//     if (messages.length > 0) {
//         e.preventDefault()
//         errorElement.innerHTML = messages.join(',')

// }
// })
const successCallback = (position) => {
    console.log(position);
}

const errorCallback = (error) => {
    console.error(error);
}

const UserLocation = () => {
    navigator.geolocation.getCurrentLocation(successCallback, errorCallback)
}