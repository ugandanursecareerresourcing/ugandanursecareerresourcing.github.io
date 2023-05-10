let nav = document.getElementById('nav');
let social = document.getElementById('social');

nav.innerHTML = `
  <nav class="flex bg-gradient-secondary flex-wrap-md py-4 align-items-center sticky-top justify-around px-2-sm">
    <div class="flex flex-wrap-md align-items-center justify-end w-100-md px-2-md">
      <div class="w-100-md flex align-items-center justify-between">
        <p class="text-xl b9"><a href="../index.html" class="b8 title text-xl-2 im">UgNCR</a></p>
        <p class="d-none d-block-md bars"><i class="fas fa-bars"></i></p>
      </div>
      <div class="flex navy d-none-md flex-wrap-md w-100-sm align-items-center justify-start ml-4 ml-0-md">
        <p class="px-3 px-1-md py-3-md w-100-md"><a href="#more" class="flex align-items-center">Know More <span class="down"></span></a></p>
        <p class="px-3 px-1-md py-3-md w-100-md"><a href="#about" class="flex align-items-center">About Us <span class="down"></span></a></p>
        <p class="px-3 px-1-md py-3-md w-100-md"><a href="#services" class="flex align-items-center">Our Show Case <span class="down"></span></a></p>
        <p class="px-3 px-1-md py-3-md w-100-md"><a href="#contact" class="flex align-items-center">Contact Us <span class="down"></span></a></p>
      </div>
    </div>

    <div class="py-2-md px-3-md navy d-none-md w-100-md">
      <svg role="img" aria-labelledby="exampleicon" id="search-icon" class="search-icon w2 h2 fill-white">
        <title id="exampleicon">informational icon description</title>
        <use xlink:href="#search-28" />
      </svg>
    </div>

  </nav>
`

let show = document.getElementById('notify');

function notification(note){
  show.innerHTML = note;
  show.classList.remove('d-none');

  setTimeout(() => {
    show.classList.add('d-none');
  }, 2000)
}


function copied(txt){
  navigator.clipboard.writeText(txt);
  alert('copied contact to clipboard');

  notification(`<p class="text-center ln-2">copied <span class="b6">${txt}</span> to clipboard.</p>`);
}


social.innerHTML = `
    <p onclick='copied("+447960886147")' class="py-3 bg-light-green"><i class="fab text-xl-3 fa-whatsapp"></i></p>
    <p onclick='copied("ugandanursecareerresourcing@gmail.com")' class="py-3 bg-light-red"><i class="fab text-xl-3 fa-google"></i></p></a>
    <a href="https://www.facebook.com/profile.php?id=100092560505803&mibextid=LQQJ4d"><p class="py-3 bg-blue"><i class="fab text-xl-3 fa-facebook"></i></p></a>
    <a href="https://twitter.com/CareerNurses"><p class="py-3 bg-light-blue"><i class="fab text-xl-3 fa-twitter"></i></p></a>
`


let foot = document.getElementById('foot');

foot.innerHTML = `
  <footer class="flex justify-center py-5">
    <div class="col-8 col-10-md flex-wrap-md px-2-md flex justify-around">
      <div class="col-3 col-10-sm col-5-md py-5">
        <p class="text-xl-7 text-black ln-2">Uganda Nurse Career Resourcing</p>
        <p class="mt-2 pl-2 text-md">Nurses here for others.</p>
      </div>
      <div class="col-2 col-5-md">
        <div class="py-5">
          <p class="c text-xl">Location</p>
          <p class="mt-2 text-md">Mulago</p>
          <p class="text-md mt-2">City Kampala, Uganda</p>

          <p class=" text-xl c mt-5">Admission office</p>
          <p class="mt-2 text-md">+44 7960 8861 47</p>
          <p class="text-md mt-2">Francis Mubiru</p>
          <p class="mt-2 text-md">ugandanursecareerresourcing@gmail.com</p>
        </div>
      </div>
      <div class="col-2 col-5-md">
        <div class="line pl-3 py-5">
          <p class="c text-xl">Popular Links</p>
          <p class="mt-2 text-md"><a href="what-is-IELTS.html">What is IELTS ?</a></p>
          <p class="mt-2 text-md o-60">Tackling nursing interviews</p>
          <p class="mt-2 text-md o-60">Choosing country of choose.</p>
        </div>
      </div>
    </div>
  </footer>

  <div class="copyright py-2 flex justify-around align-items-center flex-wrap text-center px-2">
    <p class="text-md py-2">Latest 2023 10 May</p>
    <p class="text-md py-2">Uganda Nurse Career Resourcing</p>
    <p class="text-md py-2 underlined"><a href="https://esau-lang.github.io">Designed by Variable Code</a></p>
  </div>
`

let sc = document.getElementById('search');
	bars = document.getElementsByClassName('bars')[0];
	navy = document.getElementsByClassName('navy');

sc.innerHTML = `
  <div class="mask search-away"></div>
    <div class="flex justify-center">
      <div class="col-5 col-8-md col-9-sm mt-10">
        <div class="flex">
          <input placeholder="Search keywords" type="" class="search hk-input py-3 pl-2 round-sm bg-white" name="">
        </div>
        <div class="suggested">
          <ul>
            <a href="what-is-IELTS.html"><li class="py-3 px-3 dark-gray">What is IELTS ?</li></a>
          </ul>
        </div>
      </div>
    </div>
`

bars.onclick = ()=>{
  for(let i = 0; i < navy.length; i++){
    if(navy[i].classList.contains('d-none-md'))
      navy[i].classList.remove('d-none-md');
    else
      navy[i].classList.add('d-none-md');
  }
}


let search =  document.getElementById('search');
    searchAway =  document.getElementsByClassName('search-away')[0];
    searchBtn =  document.getElementsByClassName('search-icon')[0];


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



let blogs = document.getElementById('blogs');

blogs.innerHTML = `
<div class="flex mt-10 justify-center smoky pb-10 pt-5" id="contact">
    <div class="col-7 col-9-md col-10-sm ">
      <div class="px-2-sm">
        <p class="text-xl-4 bold purple mt-7">Our blogs and news</p>
        
        <div class="flex flex-wrap justify-between mt-3">
          <a href="what-is-IELTS.html" class="col-4 col-5-lg col-10-sm"><div class="mt-4 flex">
            <div class="blog-img" style="background-image: url('img/ielts.png');"></div>
            <div class="ml-2">
              <p class="fw5">What is IELTS?</p>
              <p class="mt-1 ln-2">IELTS in full is International English Language Testing System that is designed</p>
            </div>
          </div></a>

          <a href="blogs/what-is-IELTS.html" class="col-4 d-none col-5-lg col-10-sm"><div class="mt-4 ml-7 ml-4-lg ml-2-md ml-0-sm flex">
            <div class="blog-img" style="background-image: url('blogs/img/ielts.png');"></div>
            <div class="ml-2">
              <p class="fw5">What is IELTS?</p>
              <p class="mt-1 ln-2">IELTS in full is International English Language Testing System that is designed</p>
            </div>
          </div></a>

        </div>
        
      </div>

    </div>
  </div>
`
