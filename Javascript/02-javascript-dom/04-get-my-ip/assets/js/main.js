const valueEl = document.getElementById("val");
let ip = new XMLHttpRequest();

let ipAddress = ip.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    valueEl.textContent = ip.responseText
  }
};

ip.open("GET", "https://ipv4.icanhazip.com/");
ip.send();

// Copy