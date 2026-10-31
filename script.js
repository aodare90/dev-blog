// Theme toggle: remembers the reader's choice, otherwise follows their system.
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("theme");
    if (saved) root.dataset.theme = saved;
  } catch (e) {}

  document.querySelectorAll(".theme-toggle").forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var isDark = root.dataset.theme
        ? root.dataset.theme === "dark"
        : matchMedia("(prefers-color-scheme: dark)").matches;
      var next = isDark ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  });


  // Topic filter on the home page.
  var buttons = document.querySelectorAll(".filter");
  var posts = document.querySelectorAll(".post-item");
  var empty = document.querySelector(".empty");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var topic = button.dataset.topic;
      var shown = 0;
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b === button)); });
      posts.forEach(function (post) {
        var match = topic === "all" || post.dataset.topic === topic;
        post.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown > 0;
    });
  });
})();
