const xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
    console.log(this);
    if (this.readyState == 4 && this.status == 200) {
        console.log(xhr.responseText);
    }
}

xhr.open("GET", "https://gold-api.netlify.app/api")
xhr.send()