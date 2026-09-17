(function () {
  if (window.__mbgOrderFormats) return;
  window.__mbgOrderFormats = true;

  var PAPERBACK =
    "https://shop.ingramspark.com/b/084?params=K49XlfjVAkmXLbkSb7h3kbY3UXNzUm6bDRd7KtnaLSv";
  var EBOOK = "https://a.co/d/0eJcdXta";

  var style = document.createElement("style");
  style.textContent =
    "#mbg-order-root{position:fixed;inset:0;z-index:9999;display:flex;align-items:flex-end;justify-content:center}" +
    "@media(min-width:640px){#mbg-order-root{align-items:center;padding:24px}}" +
    "#mbg-order-root .mbg-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.85);backdrop-filter:blur(8px)}" +
    "#mbg-order-root .mbg-panel{position:relative;z-index:1;width:100%;max-width:32rem;background:#0f0f0f;color:#f2f2f2;border:1px solid rgba(201,164,90,.4);box-shadow:0 24px 80px rgba(0,0,0,.7)}" +
    "#mbg-order-root .mbg-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:20px 24px;border-bottom:1px solid rgba(255,255,255,.1)}" +
    "#mbg-order-root .mbg-kicker{margin:0;font-family:Oswald,sans-serif;font-size:12px;letter-spacing:.28em;text-transform:uppercase;color:hsl(43,54%,56%)}" +
    "#mbg-order-root .mbg-title{margin:8px 0 0;font-family:Oswald,sans-serif;font-size:28px;letter-spacing:.16em;text-transform:uppercase}" +
    "#mbg-order-root .mbg-sub{margin:8px 0 0;font-family:Lora,serif;font-size:14px;color:rgba(255,255,255,.55)}" +
    "#mbg-order-root .mbg-close{background:none;border:0;color:rgba(255,255,255,.6);padding:8px;cursor:pointer}" +
    "#mbg-order-root .mbg-close:hover{color:hsl(43,54%,56%)}" +
    "#mbg-order-root .mbg-opts{display:grid;gap:12px;padding:24px}" +
    "#mbg-order-root .mbg-opt{display:flex;align-items:center;gap:16px;padding:20px;text-decoration:none;border:1px solid rgba(255,255,255,.2);color:#fff;font-family:Oswald,sans-serif;letter-spacing:.2em;text-transform:uppercase;font-weight:700;transition:background .2s,border-color .2s,color .2s}" +
    "#mbg-order-root .mbg-opt.primary{background:hsl(43,54%,56%);border-color:hsl(43,54%,56%);color:#111}" +
    "#mbg-order-root .mbg-opt.primary:hover{background:#fff;border-color:#fff}" +
    "#mbg-order-root .mbg-opt.ghost:hover{border-color:hsl(43,54%,56%);color:hsl(43,54%,56%)}" +
    "#mbg-order-root .mbg-opt span{display:block}" +
    "#mbg-order-root .mbg-note{margin-top:6px;font-family:Lora,serif;font-size:12px;letter-spacing:.02em;text-transform:none;font-weight:400}" +
    "#mbg-order-root .mbg-opt.primary .mbg-note{color:rgba(0,0,0,.7)}" +
    "#mbg-order-root .mbg-opt.ghost .mbg-note{color:rgba(255,255,255,.5)}" +
    "#mbg-order-root .mbg-cta{margin-left:auto;font-size:10px;letter-spacing:.22em}" +
    "@media(max-width:639px){#mbg-order-root .mbg-cta{display:none}}";
  document.head.appendChild(style);

  function close() {
    var root = document.getElementById("mbg-order-root");
    if (root) root.remove();
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKey);
  }

  function onKey(e) {
    if (e.key === "Escape") close();
  }

  function open() {
    if (document.getElementById("mbg-order-root")) return;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    var root = document.createElement("div");
    root.id = "mbg-order-root";
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-labelledby", "mbg-order-title");
    root.innerHTML =
      '<button type="button" class="mbg-backdrop" aria-label="Close format options"></button>' +
      '<div class="mbg-panel">' +
      '<div class="mbg-head">' +
      "<div>" +
      '<p class="mbg-kicker">Get the book</p>' +
      '<h2 id="mbg-order-title" class="mbg-title">Choose your format</h2>' +
      '<p class="mbg-sub">MR. BIG GUY: The Rise and Fall of Curtis Slade is available in paperback and ebook.</p>' +
      "</div>" +
      '<button type="button" class="mbg-close" aria-label="Close">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M6 18L18 6"/></svg>' +
      "</button>" +
      "</div>" +
      '<div class="mbg-opts">' +
      '<a class="mbg-opt primary" href="' +
      PAPERBACK +
      '" target="_blank" rel="noopener noreferrer sponsored">' +
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 7h8M8 11h6"/></svg>' +
      "<div><span>Paperback</span><span class='mbg-note'>Trade paperback · ships to your door</span></div>" +
      '<span class="mbg-cta">Order Paperback</span>' +
      "</a>" +
      '<a class="mbg-opt ghost" href="' +
      EBOOK +
      '" target="_blank" rel="noopener noreferrer sponsored">' +
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>' +
      "<div><span>eBook</span><span class='mbg-note'>Kindle edition · instant download</span></div>" +
      '<span class="mbg-cta">Order eBook</span>' +
      "</a>" +
      "</div></div>";

    document.body.appendChild(root);
    root.querySelector(".mbg-backdrop").addEventListener("click", close);
    root.querySelector(".mbg-close").addEventListener("click", close);
    root.querySelectorAll(".mbg-opt").forEach(function (a) {
      a.addEventListener("click", close);
    });
  }

  function isAmazonOrder(href) {
    if (!href) return false;
    return (
      href.indexOf("a.co/d/0eJcdXta") !== -1 ||
      (href.indexOf("amazon.com") !== -1 && href.toLowerCase().indexOf("mr-big-guy") !== -1)
    );
  }

  document.addEventListener(
    "click",
    function (e) {
      var a = e.target.closest && e.target.closest("a");
      if (!a) return;
      if (a.closest && a.closest("#mbg-order-root")) return;
      if (!isAmazonOrder(a.getAttribute("href") || a.href || "")) return;
      e.preventDefault();
      e.stopPropagation();
      open();
    },
    true
  );

  function decorateFooter() {
    var lists = document.querySelectorAll("footer ul");
    lists.forEach(function (ul) {
      var links = ul.querySelectorAll("a");
      var hasKindle = false;
      var hasPaperback = false;
      links.forEach(function (a) {
        var t = (a.textContent || "").toLowerCase();
        if (t.indexOf("kindle") !== -1 || t.indexOf("ebook") !== -1) hasKindle = true;
        if (t.indexOf("paperback") !== -1) hasPaperback = true;
      });
      if (hasKindle && !hasPaperback) {
        var li = document.createElement("li");
        li.innerHTML =
          '<a href="' +
          PAPERBACK +
          '" target="_blank" rel="noopener noreferrer sponsored" class="hover:text-primary transition-colors text-sm flex items-center gap-2">Paperback</a>';
        ul.insertBefore(li, ul.firstChild);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", decorateFooter);
  } else {
    decorateFooter();
  }
})();
