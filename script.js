const initialLikes = 100;
const initialDislikes = 20;

let likeCount = initialLikes;
let dislikeCount = initialDislikes;

const likeBtn = document.getElementById("likebtn");
const dislikeBtn = document.getElementById("dislikebtn");
const commentBox = document.getElementById("commentBox");
const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");
const commentlist = document.getElementById("commentsList");


likeBtn.innerText = "👍" + likeCount;
dislikeBtn.innerText = "👎" + dislikeCount;

likeBtn.addEventListener("click", () => {
    likeCount++;
    likeBtn.innerText = "👍" + likeCount;
    setCookie();
})

dislikeBtn.addEventListener("click", () => {
    dislikeCount++;
    dislikeBtn.innerText = "👎" + dislikeCount;
    setCookie();
})

submitBtn.addEventListener("click", ()=>{
    const pElm= document.createElement("p");
    pElm.innerText = commentBox.value.trim();
    commentlist.appendChild(pElm);
    commentBox.value="";
    setCookie();
})

clearBtn.addEventListener("click", ()=>{
    commentBox.value = "";
    document.cookie = "voted= true; path=/; expires=" + new Date(Date.now()-1).toUTCString();
})

function setCookie(){
    console.log("cookie reset");
    const expireOn = new Date(Date.now() + 1 * 60 * 1000);
    const cookieString = "voted= true; path=/; expires=" + expireOn.toUTCString();
    document.cookie = cookieString;
}

window.onload = () =>{
    if(document.cookie && document.cookie.indexOf("voted") > -1){
        likeBtn.disabled = true;
        dislikeBtn.disabled = true;
        submitBtn.disabled = true;
    }
}