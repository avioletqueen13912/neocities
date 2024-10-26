const nesting = getNesting();

document.addEventListener("DOMContentLoaded", function () {
  loadLayoutByPetraPixel();
});

window.addEventListener('message', event => {
  if (event.origin === 'https://avioletqueen13912.github.io') {
    if (event.data.frame_id === 'update') {
      if (event.data.height) {
        resize_example_frame(event.data.height);
      }
    }
  }
}, false);

function resize_example_frame(nh) {
  document.getElementById('update').height = nh;
}

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
			<div class="header-title">a midsummer jay's zone</div>
		</div>
      </header>
	  
            <aside class="left-sidebar">
	          <nav class="sidebar-section">
          <div class="sidebar-title">menu</div>
          <ul>
            <li>⌂<a href="https://midsummerjay.neocities.org/index.html">home</a></li>
              <li>
              <details>
                <summary class="sum">about</summary>
              <ul>
              <li>➜<a href="https://midsummerjay.neocities.org/bio.html">bio</a></li>
              <li>➜<a href="https://midsummerjay.neocities.org/memes.html">memes</a></li>
              </ul>
              </details>
              </li>
              <li>➜<a href="https://midsummerjay.neocities.org/blog.html">blog</a></li>
              <li>
              <details>
                <summary class="sum"><a href="https://midsummerjay.neocities.org/shrines.html">shrines</a></summary>
              <ul>
              <li>➜<a href="https://midsummerjay.neocities.org/shrines/loona.html">loona</a></li>
              <li>➜<a href="https://midsummerjay.neocities.org/shrines/p-o-k-accent-e-mon.html">pokémon</a></li>
              </ul>
              </details>
              </li>
              <li>➜<a href="https://midsummerjay.neocities.org/guestbook.html">guestbook</a></li>
              <li>➜<a href="https://midsummerjay.neocities.org/blinkies.html">blinkies</a></li>
              <li>➜<a href="https://midsummerjay.neocities.org/credits.html">credits</a></li>
          </ul>
        </nav>
        <div class="sidebar-section">
        <div class="sidebar-title">visitors</div>
        <iframe srcdoc="<div style='text-align:center;padding-top:8px;'><script language='javascript' type='text/javascript' src='//counter1.fc2.com/counter.php?id=39945556&main=1'></script><noscript><img src='//counter1.fc2.com/counter_img.php?id=39945556&main=1' /></noscript></div>" width="100%" frameborder="0" marginheight="0" marginwidth="0" height="30px" scrolling="no"></iframe>
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title">chatbox</div>
          <iframe 
            src="https://www3.cbox.ws/box/?boxid=3540886&boxtag=85Jf6C" 
            width="100%" height="225" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>
        </div>
      </aside>

            <aside class="right-sidebar">
            <p style="text-align:center;margin-top:-5px;"><a href="https://hillhouse.neocities.org/journal/notes/palestine"><img src="${nesting}/images/palestinegif.gif" height="25px"></a></p>
	  <div class="sidebar-section">
          <div class="sidebar-title">latest update</div>
          <iframe 
            src="https://avioletqueen13912.github.io/neocities/statuscafe.html"
            width="100%" frameborder="0" marginheight="0" marginwidth="0" id="update" scrolling="no">
          </iframe>
        </div>
        
            <div class="sidebar-section">
          <div class="sidebar-title">currently...</div>
          <p>
          <table class="table-class">
            <tr>
              <td><img src="${nesting}/images/game-console.png" height="25px"></td>
              <td>balatro</td>
            </tr>
            <tr>
              <td><img src="${nesting}/images/headphones.png" height="25px"></td>
              <td>dust - svt</td>
            </tr>
            <tr>
              <td><img src="${nesting}/images/rating.png" height="25px"></td>
              <td>count of monte cristo (slowly)</td>
            </tr>
            <tr>
              <td><img src="${nesting}/images/tv.png" height="25px"></td>
              <td>northernlion vods</td>
            </tr>
          </table>
          </p>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-title">to-do</div>
          <ul>
          <li>add my tamanotchi</li>
          <li>fix menu bolding on active links</li>
          <li>add my own button!!</li>
          <li>collect more blinkies + stamps</li>
          <li>tweak formatting on "latest blog posts" page</li>
          <li>find dividers + graphics i like</li>
          </ul>
        </div>
      </aside>
	
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
<footer><div>all rights reserved. (idk what that means, it just seems like the thing to say.) | <a href="https://midsummerjay.neocities.org/sitemap">sitemap.</a></div></footer>`;
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
    console.log("href: " + href);
    console.log("pathname: " + pathname);
    console.log("window location: " + window.location.href);
    if (href == "/" || href == "/index.html") {
      if (window.location.href == "http://localhost:8080/" || pathname == "/") {
        el.classList.add("active");
      }
    } else {
      if (window.location.href.includes(href)) {
        el.classList.add("active");
        console.log(el.closest(".sum"));
        console.log(el.closest("details summary"));
        if (el.closest(".sum")) {
          el.closest("details").open = true;
          el.closest("summary").classList.add("active");
        }
      }
    }
  });
}
