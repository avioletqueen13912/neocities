const nesting = getNesting();

document.addEventListener("DOMContentLoaded", function () {
  loadLayoutByPetraPixel();
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToLinks();
}

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
<header>

        <div class="header-content">
			<div class="header-title">jay's spot (under construction)</div>
	        <nav style="display:none;">
	          <ul>
	            <li><a href="https://midsummerjay.neocities.org">⌂</a></li>
              <li><a href="https://midsummerjay.neocities.org/bio.html">bio</a></li>
	          </ul>
	        </>
		</div>
      </header>
	  
            <aside class="left-sidebar">
	          <nav>
          <div class="sidebar-title">Navigation</div>
          <ul>
            <li><a href="https://midsummerjay.neocities.org">⌂</a></li>
              <li><a href="https://midsummerjay.neocities.org/bio.html">bio</a></li>
			
            <li>
              	<details>
				<summary><a href="#">Test Submenu</a></summary>
                <ul>
                  <li><a href="#">Page A</a></li>
                  <li><a href="#">Page B</a></li>
                  <li><a href="#">Page C</a></li>
                  <li><a href="#">Page D</a></li>
                  <li><a href="#">Page E</a></li>
                </ul>
				</details>
            </li>
          </ul>
        </nav>
        <div class="sidebar-section">
          <div class="sidebar-title">status</div>
          <p>09/18/2024 - looking at different neocities for inspo on what to put on mine</p>
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title">chatbox</div>
          <iframe src="https://www3.cbox.ws/box/?boxid=3540886&boxtag=85Jf6C" width="100%" height="225" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>
        </div>
      </aside>

            <aside class="right-sidebar">
	  
        <div class="sidebar-section">
          <div class="sidebar-title">currently...</div>
          <p>eventually this will show what i'm currently watching/reading/listening to.</p>
        </div>
      </aside>
	
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
all rights reserved. (idk what that means it just seems like the thing to say.) <a href="https://midsummerjay.neocities.org/index">home.</a> template generated with <a href="https://petrapixel.neocities.org/coding/layout-generator.html">petrapixel's layout generator</a>.`;
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}

function giveActiveClassToLinks() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");

    if (href == "/" || href == "/index.html") {
      if (window.location.href == "http://localhost:8080/" || pathname == "/") {
        el.classList.add("active");
      }
    } else {
      if (window.location.href.includes(href)) {
        el.classList.add("active");

        if (el.closest("summary")) {
          el.closest("details").addAttribute("open");
          el.closest("summary").classList.add("active");
        }
      }
    }
  });
}
