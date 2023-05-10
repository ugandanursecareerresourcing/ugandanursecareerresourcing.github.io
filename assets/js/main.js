let cops = document.getElementById('copy');
let show = document.getElementById('notify');
let wcopy = document.getElementById('w-copy');

function notification(note){
  show.innerHTML = note;
  show.classList.remove('d-none');

  setTimeout(() => {
    show.classList.add('d-none');
  }, 2000)
}


function copyNumber(){
  navigator.clipboard.writeText('+447960886147');
  alert('Copied number to clipboard');

}

cops.onclick = () => {
  copyNumber();
  notification(`<p class="text-center ln-2">copied whatsapp number <span class="b6">+44 7960 8861 47</span> to clipboard.</p>`)
};

wcopy.onclick = () => {
  copyNumber();
  notification(`<p class="text-center ln-2">copied whatsapp number <span class="b6">+44 7960 8861 47</span> to clipboard.</p>`)
};

let navy = document.getElementsByClassName('navy');
    bars = document.getElementById('bars');

bars.onclick = ()=>{
  for(let i = 0; i < navy.length; i++){
    if(navy[i].classList.contains('d-none-md'))
      navy[i].classList.remove('d-none-md');
    else
      navy[i].classList.add('d-none-md');
  }
}


let search =  document.getElementById('search');
    searchAway =  document.getElementById('search-away');
    searchBtn =  document.getElementById('search-icon');

function blogSearch(){

}

function awaySh(){
  search.classList.add('d-none');
}

searchAway.onclick = () => {
  awaySh();
}

searchBtn.onclick = () => {
  search.classList.remove('d-none');
}

function notYet(){
  alert('No posts yet');
}
