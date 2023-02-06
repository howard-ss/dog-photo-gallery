const fetchButton = document.querySelector("#fetch-dog-btn");
const clearButton = document.querySelector("#clear-list-btn");
const list = document.querySelector("#dog-list");

fetchButton.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      const dogImage = data.message;
      const listItem = document.createElement("li");
      const dogImg = document.createElement("img");
      dogImg.src = dogImage;
      listItem.appendChild(dogImg);
      list.appendChild(listItem);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      alert(
        "An error occurred while fetching the dog image. Please try again later."
      );
    });
});

clearButton.addEventListener("click", function () {
  list.innerHTML = "";
});



