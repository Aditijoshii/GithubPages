class GitHub {
  init() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = this.searchinput.value.trim();
      if (username) {
        this.resetInputValidation();
        this.getUserDetails(username);
      } else {
        this.animateInputError();
      }
    });
  }
  constructor() {
    this.form = document.getElementById("form");
    this.searchinput = document.getElementById("search");
  }
  async getUserDetails(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const userdata = await response.json();
      console.log(userdata);
      this.createUserCard(userdata);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  animateInputError() {
    this.searchinput.classList.add("input-error");
    setTimeout(() => {
      this.searchinput.classList.remove("input-error");
    }, 200);
  }
  resetInputValidation() {
    this.searchinput.classList.remove("input-error");
  }
  createUserCard(userdata) {
    let containerdiv = document.getElementById("containermain");
    containerdiv.classList.add("mt-5");
    let cardcontainer = document.createElement("div");
    cardcontainer.classList.add("card");
    cardcontainer.classList.add("rounded-3");
    cardcontainer.classList.add("bg-custom");
    let column1 = document.createElement("div");
    column1.classList.add("row");
    let column3 = document.createElement("div");
    column3.classList.add("col-xl-3");
    column3.classList.add("col-md-3");
    column3.classList.add("p-4");
    let column2 = document.createElement("div");
    column2.classList.add("col-xl-9");
    column2.classList.add("col-md-9");
    column2.classList.add("p-4");
    column1.appendChild(column3);
    column1.appendChild(column2);
    cardcontainer.appendChild(column1);
    containerdiv.appendChild(cardcontainer);
    let img = document.createElement("img");
    img.src = userdata.avatar_url;
    img.alt = "Avatar Image";
    img.className = "img-thumbnail";
    img.className = "rounded-circle";
    img.height = 180;
    img.width = 170;
    column3.appendChild(img);
    let nameElement = document.createElement("div");
    nameElement.classList.add("row");
    let nameElementCol = document.createElement("div");
    nameElementCol.classList.add("col-xl-12");
    let name = document.createElement("h2");
    name.textContent = userdata.name;
    name.classList.add("text-white");
    nameElementCol.appendChild(name);
    nameElement.appendChild(nameElementCol);
    let bioElement = document.createElement("div");
    bioElement.classList.add("row");
    let bioElementCol = document.createElement("div");
    bioElementCol.classList.add("col-xl-12");
    let bioHeading = document.createElement("p");
    bioHeading.textContent = userdata.bio;
    bioHeading.classList.add("text-white");
    bioElementCol.appendChild(bioHeading);
    bioElement.appendChild(bioElementCol);
    let miscElement = document.createElement("div");
    miscElement.classList.add("row");
    let miscElementCol1 = document.createElement("div");
    miscElementCol1.classList.add("col-xl-3");
    let followerText = document.createElement("p");
    followerText.textContent = "Followers : " + userdata.followers;
    followerText.classList.add("text-white");
    miscElementCol1.appendChild(followerText);
    let miscElementCol2 = document.createElement("div");
    miscElementCol2.classList.add("col-xl-3");
    let followingText = document.createElement("p");
    followingText.textContent = "Following : " + userdata.following;
    followingText.classList.add("text-white");
    miscElementCol2.appendChild(followingText);
    let miscElementCol3 = document.createElement("div");
    miscElementCol3.classList.add("col-xl-3");
    let repoText = document.createElement("p");
    repoText.textContent = "Repos : " + userdata.public_repos;
    repoText.classList.add("text-white");
    miscElementCol3.appendChild(repoText);
    let miscElementCol4 = document.createElement("div");
    miscElementCol4.classList.add("col-xl-3");
    let gistText = document.createElement("p");
    gistText.textContent = "Gists : " + userdata.public_gists;
    gistText.classList.add("text-white");
    miscElementCol4.appendChild(gistText);
    let miscElementCol5 = document.createElement("div");
    miscElementCol5.classList.add("col-xl-4");
    let twitterUsername = document.createElement("p");
    twitterUsername.textContent = "Twitter : " + userdata.twitter_username;
    twitterUsername.classList.add("text-white");
    miscElementCol5.appendChild(twitterUsername);
    let miscElementCol6 = document.createElement("div");
    miscElementCol6.classList.add("col-xl-8");
    let location = document.createElement("p");
    location.textContent = "Location : " + userdata.location;
    location.classList.add("text-white");
    miscElementCol6.appendChild(location);
    miscElement.appendChild(miscElementCol1);
    miscElement.appendChild(miscElementCol2);
    miscElement.appendChild(miscElementCol3);
    miscElement.appendChild(miscElementCol4);
    miscElement.appendChild(miscElementCol5);
    miscElement.appendChild(miscElementCol6);
    column2.appendChild(nameElement);
    column2.appendChild(bioElement);
    column2.appendChild(miscElement);
  }
}
let variable = new GitHub();
variable.init();
