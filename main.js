const btnNo = document.querySelector(".btnNo");
const btnYes = document.querySelector(".btnYes");

btnNo.addEventListener("click",function(){
    this.style.position = "absolute"
    var br = Math.floor(Math.random() * 80);
    this.style.left = `${br}%`;
    this.style.top = `${br}%`;
});
btnYes.addEventListener("click",function(){
    document.querySelector(".modal").style.display = 'flex'
});