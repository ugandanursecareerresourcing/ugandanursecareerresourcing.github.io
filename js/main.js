$(document).ready(()=>{
	let fake = $('#fake').text();

	$('#nav').html(`
		<nav class="p-0 flex sticky-top bg-white justify-center align-items-center">
			<div class="flex flex-wrap-sm justify-between align-items-center col-8-xxl px-15-xxl px-4-lg col-10-md px-2-md">
				<div class="flex justify-between col-10-sm  align-items-center">
					<a href="${fake}index.html"><div class="flex align-items-center">
						<p class="m-0">
							<img src="${fake}images/logo.svg" class="img pr-2" style="height: 37px;">
						</p>
						<p class="logo m-0 py-2">Frankie Res</p>
					</div></a>
					<p id="togglemore" class="icon-menu text-xl-7 px-2 py-2-xxl m-0 d-none-xxl d-block-sm"></p>
				</div>
				<div id="more" class="flex d-none-sm col-10-sm flex-wrap-sm align-items-center justify-end">
					<p class="m-0 col-10-sm py-3 px-2"><a href="${fake}index.html">Home</a></p>
					<p class="m-0 col-10-sm py-3 px-2"><a href="${fake}index.html#blogs">Blog Pages</a></p>
					<p class="m-0 col-10-sm py-3 px-2"><a href="${fake}index.html#services">Find Service</a></p>
					<p class="m-0 col-10-sm py-3 px-2"><a href="#ex1" rel="modal:open">Contact Us</a></p>
					<p class="m-0 col-10-sm py-3 px-2"><a href="#ex1" rel="modal:open">Check Our Reseach</a></p>
					<p class="m-0 col-10-sm py-2 px-2"><a href="#ex1" rel="modal:open">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height="30px" width="30px">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</a></p>
				</div>
			</div>
		</nav>

	`);


	$('#togglemore').click(()=>{
		$('#more').fadeToggle();
	})


	$('#footer').html(`
		<footer class="flex flex-wrap justify-center py-10-xxl py-5-sm">
			<div class="col-8-xxl col-9-lg col-10-md px-2-md px-3-sm flex flex-wrap-md ">
				<div class="col-3-xxl col-10-sm">
					<div class="flex align-items-center">
						<p class="m-0">
							<img src="${fake}images/logo.svg" class="img pr-2" style="height: 37px;">
						</p>
						<p class="logo m-0 py-2 text-black b5">Frankie Res</p>
					</div>
				</div>
				<div class="col-3-xxl col-10-sm">
					<p class="m-0 bold mb-1 pt-4-sm">ON PAGE</p>
					<a href="${fake}index.html"><p class="m-0 py-1">Home</p></a>
					<a href="${fake}index.html#blogs"><p class="m-0 py-1">Blog Pages</p></a>
					<a href="${fake}index.html#services"><p class="m-0 py-1">Find Services</p></a>
					<a href="#ex1" rel="modal:open"><p class="m-0 py-1">Contact Us</p></a>
					<a href="${fake}index.html"><p class="m-0 py-1">Check Out Research</p></a>
				</div>
				<div class="col-3-xxl col-10-sm">
					<p class="m-0 bold mb-1 pt-4-sm">USEFUL LINKS</p>
					<a href=""><p class="m-0 py-1">Nurses</p></a>
					<a href=""><p class="m-0 py-1">Care Assistants</p></a>
					<a href="${fake}blogs/ielts.html"><p class="m-0 py-1">IELTS</p></a>
					<a href="${fake}blogs/oet.html"><p class="m-0 py-1">OET</p></a>
					<a href="${fake}blogs/cbt.html"><p class="m-0 py-1">CBT</p></a>
				</div>
				<div class="col-3-xxl col-10-sm">
					<p class="m-0 bold mb-1 pt-4-sm">CONTACT US</p>
					<p class="m-0 py-1"><i class="icon-whatsapp"></i> &nbsp;+447960886147</p>
					<p class="m-0 py-1"><i class="icon-email"></i> &nbsp;frankieres@gmail.com</p>

					<p class="m-0 pb-3 pt-4 bold uppercase">Follows Us</p>
					<div class="flex justify-start flex-wrap">
						<a href=""><p class="m-0 px-2"><i class="text-xl-3 icon-facebook"></i></p></a>
						<a href=""><p class="m-0 px-2"><i class="text-xl-3 icon-instagram"></i></p></a>
						<a href=""><p class="m-0 px-2"><i class="text-xl-3 icon-twitter"></i></p></a>
						<a href=""><p class="m-0 px-2"><i class="text-xl-3 icon-youtube"></i></p></a>
					</div>
				</div>
			</div>

			<div class="col-8-xxl col-10-md mt-3 up px-3 flex justify-between">
				<p class="m-0 py-3 px-2-xxl px-1-sm">latest at Oct 2023</p>
				<p class="m-0 py-3 px-2-xxl px-1-sm">Built by <a href="">Variable Code</a></p>
			</div>
		</footer>
	`)

})