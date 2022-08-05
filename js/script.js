const btn= document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', ()=>{
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');  
    nav.classList.toggle('transition-shadow');
})

function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}
  window.onclick = function(event){
      if (!event.target.matches('.img-compress')){
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for(i=0;i<dropdowns.length;i++){
      var openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
}
  }
// for first modal on merchant add new product
var modal = document.getElementById("myModal");
var btt = document.getElementById("myBtn");
var span = document.getElementsByClassName("cllose")[0];
btt.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
// modal call and close for Edit Product
var mod = document.getElementById("myMo");
var btc = document.getElementById("mybtt");
var pan = document.getElementsByClassName("lose")[0];
btc.onclick = function () {
  mod.style.display = "block";
}
pan.onclick = function () {
  mod.style.display = "none";
}

