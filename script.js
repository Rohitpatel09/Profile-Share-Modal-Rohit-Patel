const modal=document.getElementById("modal");
const overlay=document.getElementById("overlay");

//open Model function
openModal=()=>{
    // modal.setAttribute("class","active") //problem ye h ki jo phle se class h usko replace kr rhi h
    console.log("Modal is opening")
    modal.classList.add("active")
    overlay.classList.add("overlayactive");

};


//close Model function
closeModal=()=>{
    console.log("Modal is Closing")
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive")

};


