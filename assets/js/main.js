let caret = document.getElementsByClassName('caret');
let dw = document.getElementsByClassName('down');


for(let i = 0; i < caret.length; i++){
  caret[i].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="20px" fill="none" viewBox="0 0 24 24" stroke-width="1.3" stroke="#00A6EB" class="w-6 h-6 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>`
}

for(let i = 0; i < dw.length; i++){
  dw[i].innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff90" class="w-6 h-6 pt-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
`
}


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


