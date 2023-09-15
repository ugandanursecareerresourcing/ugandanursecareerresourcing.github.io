let nav = document.getElementById('nav');
let social = document.getElementById('social');

nav.innerHTML = `<div class="flex nav justify-center sticky-top shadow-sm">
    <nav class="navbar navbar-expand-lg col-7 col-8-lg col-10-md px-2-md shadow-none">
      <div class="container-fluid">
        <a class="navbar-brand" href="../index.html"><p class="m-0 bold logo">UGNCR</p></a>
        <button class="navbar-toggler" style="color: white !important;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-0">
            <li class="nav-item"><a class="nav-link" href="../index.html#more">Overview</a></li>
            <li class="nav-item dropdown">
              <p class="nav-link m-0" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Contact <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="20px" width="20px" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </p>
              <ul class="dropdown-menu bg-white shadow-sm">
                <li><a href="https://twitter.com/CareerNurses"><p class="py-1 px-3"><i class="fab fa-twitter"></i> &nbsp; Twitter</p></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100092560505803&mibextid=LQQJ4d"><p class="py-1 px-3"><i class="fab fa-facebook-f"></i> &nbsp; Facebook</p></a></li>
                <li><a onclick='copied("+447960886147")' href="#"><p class="py-1 px-3"><i class="fab fa-whatsapp"></i> &nbsp; WhatsApp</p></a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><p onclick='copied("ugandanursecareerresourcing@gmail.com")' class="py-1 px-3 m-0"><i class="fab fa-google"></i>&nbsp; Gmail</p></li>
              </ul>
            </li>
          </ul>
          <div class="d-flex pb-2-md align-items-center cursor-default">
            <p onclick="showSearch()" class="m-0 mt-2-sm flex align-items-center">Search&nbsp; 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" height="24px" width="24px" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </nav>
  </div>
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
    <a class="facebook" href="https://www.facebook.com/profile.php?id=100092560505803&mibextid=LQQJ4d"><p class="py-3 facebook"><i class="fab fa-facebook-f"></i></p></a>
    <a class="twitter" href="https://twitter.com/CareerNurses"><p class="py-3 twitter"><i class="fab fa-twitter"></i></p></a>
    <p onclick='copied("ugandanursecareerresourcing@gmail.com")' class="py-3 gmail"><i class="fas fa-envelope"></i></p></a>
    <p onclick='copied("+447960886147")' class="py-3 whatsapp"><i class="fab fa-whatsapp"></i></p>
    <p onclick="showSearch()" id="w-copy" class="py-3 wechat"><i class="fas fa-search"></i></p>
`


let foot = document.getElementById('foot');

foot.innerHTML = `
  <footer class="flex justify-center py-5">
    <div class="col-8 col-10-md flex-wrap-md px-2-md flex justify-around">
      <div class="col-3 col-10-sm col-5-md py-5">
        <p class="text-xl-7 ln-2">Uganda Nurse Career Resourcing</p>
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
          <p class="mt-2 text-md"><a href="OSCE.html">What is OSCE ?</a></p>
        </div>
      </div>
    </div>
  </footer>

  <div class="copyright py-2 mb-7-md flex justify-around align-items-center flex-wrap text-center px-2">
    <p class="text-md m-0 py-1">Check 2023 Sept</p>
    <p class="text-md m-0 py-1 opacity-70">Uganda Nurse Career Resourcing</p>
    <p class="text-md m-0 py-1 opacity-70 underlined"><a href="https://esau-lang.github.io">Designed by Variable Code</a></p>
  </div>
`

let sc = document.getElementById('search');
	bars = document.getElementsByClassName('bars')[0];
	navy = document.getElementsByClassName('navy');

sc.innerHTML = `
  <div class="mask" onclick="hideSearch()"></div>
    <div class="flex justify-center">
      <div class="col-5 col-8-md col-9-sm mt-10">
        <div class="round-sm p-2 bg-white">
          <div class="flex">
            <input placeholder="Search keywords" type="" class="form-control" name="">
          </div>
          <div class="suggested py-2">
            <div class="list-group">
              <a class="list-group-item list-group-item-action" href="nurses.html">Nurses work</a>
              <a class="list-group-item list-group-item-action" href="what-is-IELTS.html">What is IELTS?</a>
              <a class="list-group-item list-group-item-action" href="OSCE.html">OSCE examination</a>
            </div>
          </div>
        </div>
      </div>
    </div>
`


let search =  document.getElementById('search');


function blogSearch(){

}

function showSearch(){
  search.classList.remove('d-none');
}

function hideSearch(){
  search.classList.add('d-none');
}


let blogs = document.getElementById('blogs');

blogs.innerHTML = `
<div class="side py-3 px-5 px-2-sm mx-3 mx-2-lg mx-1-md mx-0-sm mb-10 mb-3-md">
  <p class="im">Checkout</p>
  <div class="mt-3">
    <img src="posters/osce-poster1.png" class="img round-sm">

      <div class="">
        <p class="text-xl mt-3 im b5">Our blogs and news</p>
        
        <div class="">

          <a href="OSCE.html" class="blog"><div class="mt-4 flex blog-card">
            <div class="blog-img col-3" style="background-image: url('img/nurses-bg.jpg');"></div>
            <div class="ml-2 col-7">
              <p class="text-md">Who is a nurse, a nurse could be a man or woman who...</p>
            </div>
          </div></a>

          <a href="what-is-IELTS.html" class="blog"><div class="mt-4 flex blog-card">
            <div class="blog-img col-3" style="background-image: url('img/ielts-bg.jpg');"></div>
            <div class="ml-2 col-7">
              <p class="text-md">What is IELTS, in full its International English Language...</p>
            </div>
          </div></a>

          <a href="OSCE.html" class="blog"><div class="mt-4 flex blog-card">
            <div class="blog-img col-3" style="background-image: url('img/osce-bg.jpg');"></div>
            <div class="ml-2 col-7">
              <p class="text-md">What is OSCE, in full its objective structured clinical...</p>
            </div>
          </div></a>

        
        </div>
      </div>

    </div>
  </div>
</div>
`
