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


function copies(txt){
  navigator.clipboard.writeText('+447960886147');
  alert('Copied data to clipboard');

  notification(`<p class="text-center ln-2">copied information <span class="b6">${txt}</span> to clipboard.</p>`)
}



let search =  document.getElementById('search');

function blogSearch(){

}

function showSearch(){
  search.classList.remove('d-none');
}

function hideSearch(){
  search.classList.add('d-none');
}

function notYet(){
  alert('No posts yet');
}
