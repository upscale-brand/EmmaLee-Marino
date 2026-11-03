/* Apply the saved palette before first paint. */
(function () {
  try {
    var palette = localStorage.getItem("emmalee_marino_palette");
    if (palette) document.documentElement.setAttribute("data-theme", palette);
  } catch (error) {}
})();
