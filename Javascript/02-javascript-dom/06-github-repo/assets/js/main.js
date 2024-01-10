// Intern UserName List
const internsUserName = [
  "esakki2104prsnl",
  "Vk2401",
  "suriyamassmsd",
  "riyaz1000",
  "hema-venkat3",
  "yrd369",
  "mushkir",
  "bearcin46",
  "dineshdevelope",
  "jeya-rosini",
  "swethadsalvatore",
  "mshajid",
  "muthuakalya",
  "vedhatech002",
  "danielace1",
  "sharif-22",
  "gayathrihg",
  "kishorekumar-kp",
  "muthukumarimoorthi",
];

// **************** function ******************* //
function viewInternsProfiles(user) {
  const xmlReq = new XMLHttpRequest();
  xmlReq.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(xmlReq.responseText);

      const cardContainerEl = document.getElementById("card");
      const cardEl = document.createElement("div");
      const buttonEl = document.createElement("div");
      cardEl.className = "user-card";
      cardEl.innerHTML = `
    <img src="${data.avatar_url}"  alt="${data.login}-image" class="img">
      <h3 class="username">${data.name} </h3>
    <span class="role">Junior Full Stack Engineer</span>
       <span class="location">${data.location}</span>
       `;

      //  button
      // buttonEl.className = "flex items-center justify-center"
      buttonEl.innerHTML = `
       <button
       class="button-style"
     >
       <a href="${data.html_url}" target="_blank">Github Home</a>
     </button>
     <button
       class="button-style"
     >
       <a href="${data.html_url}/cyberdude-challenges" target="_blank"
         >CyberDude Challenges</a
       >
     </button>
       `
      cardContainerEl.append(cardEl);
      cardEl.append(buttonEl);
    }
  };
  xmlReq.open("GET", `https://api.github.com/users/${user}`);
  xmlReq.send();
}

internsUserName.forEach((intern) => viewInternsProfiles(intern));