// header and navigations
document.querySelector('main').insertAdjacentHTML(
	'beforebegin',
	`<header class="container" style="--bs-gutter-x: 0;">
		<a class="header_title" href="index.html">Lennie Moore</a>
		<span class="header_subtitle">the composer's official website</span>

		<!-- slide out nav -->
		<a data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" role="button" aria-controls="offcanvasScrolling" aria-label="toggle"><i class="fa-solid fa-bars fa-2xl"></i></a>

		<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasScrollingLabel"></h5>
				<i class="fa-solid fa-xmark fa-2xl" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close""></i>
			</div>
			<div class="offcanvas-body">
				<nav>
					<a class="nav-link" href="index.html">HOME</a>
					<a class="nav-link" href="news.html">NEWS</a>
					<a class="nav-link" href="about.html">ABOUT</a>
					<a class="nav-link" href="credits.html">CREDITS</a>
					<a class="nav-link" href="blog.html">BLOG</a>
					<a class="nav-link" href="connect.html">CONNECT</a>
					<a class="nav-link" href="mentors.html">MENTORS</a>
					<!--<a class="nav-link disabled" href="store.html">STORE</a>-->
				</nav>
  		</div>
		</div>
		<!-- top nav -->
		<nav class="nav nav-fill">
			<a class="nav-link" href="index.html">HOME</a>
			<a class="nav-link" href="news.html">NEWS</a>
			<a class="nav-link" href="about.html">ABOUT</a>
			<a class="nav-link" href="credits.html">CREDITS</a>
			<a class="nav-link" href="blog.html">BLOG</a>
			<a class="nav-link" href="connect.html">CONNECT</a>
			<a class="nav-link" href="mentors.html">MENTORS</a>
			<!--<a class="nav-link disabled" href="store.html">STORE</a>-->
		</nav>
	</header>`
)

const mediaQuery = window.matchMedia('(max-width: 992px)')
const mediaQueryDark = window.matchMedia('(prefers-color-scheme: dark)')
const menuToggle = document.querySelector('.fa-bars')

// toggle mobile menu
function displayNone(e) {
	e.matches
		? (menuToggle.style.display = 'block')
		: (menuToggle.style.display = 'none')
}

mediaQuery.addListener(displayNone)
displayNone(mediaQuery)

// footer
document
	.querySelector('main')
	.insertAdjacentHTML(
		'afterend',
		`<footer class="container"><p>&copy; 2023 Lennie Moore. All Rights Reserved.<br><a href="https://twitter.com/lenniemooremus" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fa-brands fa-twitter fa-xl"></i></a> <a href="https://www.facebook.com/lenniemooremusic" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fa-brands fa-facebook fa-xl"></i></a> <a href="https://www.youtube.com/@LennieMoore" target="_blank" rel="noopener noreferrer" aria-label="Youtube"><i class="fa-brands fa-youtube fa-xl"></i><br></a> <a href="#top" class="top">Back to Top</a></p></footer>`
	)
