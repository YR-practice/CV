document.querySelectorAll(".copy").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var done = function () {
      btn.textContent = t("copied");
      setTimeout(function () { btn.textContent = t("copy"); }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(btn.dataset.copy).then(done);
    } else {
      var area = document.createElement("textarea");
      area.value = btn.dataset.copy;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      done();
    }
  });
});

function isOctet(n) {
  return n >= 0 && n <= 255;
}

var input = document.getElementById("num");
var result = document.getElementById("result");

function check() {
  if (input.value === "") { result.textContent = ""; return; }
  var ok = isOctet(Number(input.value));
  result.textContent = ok ? "true" : "false";
  result.className = ok ? "ok" : "bad";
}
input.addEventListener("input", check);
check();
