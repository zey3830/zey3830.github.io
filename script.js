let ownerName = "Ze"
let userName = "zey3830";

document.querySelectorAll(".owner-name").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href = "http://github.com/" + userName + "/" + userName + ".github.io";
