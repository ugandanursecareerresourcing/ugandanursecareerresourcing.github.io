let nav = document.getElementById('nav');
let social = document.getElementById('social');

nav.innerHTML = `
  <nav class="navbar sticky-top navbar-expand-lg py-4 py-2-sm flex justify-center border-bottom shadow-none">
  <div class="col-6 col-8-lg col-10-md flex flex-wrap justify-between px-2-sm">
    <a class="navbar-brand" href="../index.html">
      <div class="flex align-items-center">
        <img src="../assets/logos/svg/logo.svg" class="img" alt="Logo" />
      </div>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-0">
        <li class="nav-item"><a class="nav-link" aria-current="page" href="../index.html#more">Overview</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact Us</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://twitter.com/CareerNurses">Twitter page</a></li>
            <li><a class="dropdown-item" href="https://www.facebook.com/profile.php?id=100092560505803&mibextid=LQQJ4d">Facebook page</a></li>
            <li><span onclick='copied("+447960886147")' class="dropdown-item" href="#">Whatsapp number</span></li>
            <li><hr class="dropdown-divider" /></li>
            <li><span onclick='copied("ugandanursecareerresourcing@gmail.com")' class="dropdown-item" href="#">Gmail account</span></li>
          </ul>
        </li>
      </ul>
      <div class="d-flex align-items-center flex-column flex-lg-row">
        <input onclick="showSearch()" class="form-control" aria-label="readonly input example" readonly type="text" placeholder="Search blog" />
        <button onclick="showSearch()" class="btn decoration flex align-items-center justify-between py-2 ml-2 px-3">search <i class="fas ml-2 fa-search"></i></button>
      </div>
    </div>
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
    <a href="https://www.facebook.com/profile.php?id=100092560505803&mibextid=LQQJ4d"><p class="py-3 bg-blue-300"><i class="fab fa-facebook-f"></i></p></a>
    <p onclick='copied("ugandanursecareerresourcing@gmail.com")' class="py-3 gmail"><i class="fas fa-envelope"></i></p></a>
    <a href="https://twitter.com/CareerNurses"><p class="py-3 twitter"><i class="fab fa-twitter"></i></p></a>
    <p onclick='copied("+447960886147")' class="py-3 whatsapp"><i class="fab fa-whatsapp"></i></p>
    <p onclick="showSearch()" id="w-copy" class="py-3 bg-orange-400"><i class="fas fa-search"></i></p>
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
          <p class="mt-2 text-md o-60">Tackling nursing interviews</p>
          <p class="mt-2 text-md o-60">Choosing country of choose.</p>
        </div>
      </div>
    </div>
  </footer>

  <div class="copyright py-2 flex justify-around align-items-center flex-wrap text-center px-2">
    <p class="text-md py-1">Latest 2023 10 May</p>
    <p class="text-md py-1 opacity-50">Uganda Nurse Career Resourcing</p>
    <p class="text-md py-1 opacity-50 underlined"><a href="https://esau-lang.github.io">Designed by Variable Code</a></p>
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
            <input placeholder="Search keywords" type="" class="form-control form-control-lg" name="">
          </div>
          <div class="suggested py-2">
            <div class="list-group">
              <a class="list-group-item list-group-item-action" href="what-is-IELTS.html">What is IELTS?</a>
              <a class="list-group-item list-group-item-action" href="OSCE.html">OSCE examination</a>
              <a class="list-group-item list-group-item-action active" href="#">More blogs awaiting</a>
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
<div class="flex mt-10 justify-center smoky pb-10" id="contact">
    <div class="col-7 col-9-md col-10-sm ">
      <div class="px-2-sm">
        <p class="text-xl-4 b5 mt-6">Our blogs and news</p>
        
        <div class="flex flex-wrap justify-between mt-2">
          <a href="what-is-IELTS.html" class="col-4 blog col-5-lg col-10-sm"><div class="mt-4 flex">
            <div class="blog-img" style="background-image: url('img/ielts.png');"></div>
            <div class="ml-2">
              <p class="text-md"><span class="b6 text-lg">What is IELTS?</span><br>IELTS in full is International English Language Testing System that is designed</p>
            </div>
          </div></a>

          <a href="OSCE.html" class="col-4 blog col-5-lg col-10-sm"><div class="mt-4 flex">
            <div class="blog-img" style="background-image: url('img/osce.jpeg');"></div>
            <div class="ml-2">
              <p class="text-md"><span class="b6 text-lg">What is OSCE?</span><br>OSCE in full is objective structured clinical examination that accesses nurses skill...</p>
            </div>
          </div></a>

        </div>
        
      </div>

    </div>
  </div>
`
