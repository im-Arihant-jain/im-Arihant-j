const elemCard = document.querySelector(".card");
const elemClickIcon = document.querySelector(".click-icon");
const secondImage = document.getElementById("secondimg");
elemCard.addEventListener("click", function () {
  if (!elemCard.classList.contains("is-opened")) {
    secondImage.classList.remove("hidden");
    elemCard.classList.add("is-opened");
  }
})
function updateMessage() {
    const nameInput = document.getElementById("nameInput").value.trim();
    const nameSpan = document.getElementById("name");
    const personalizedMessage = document.getElementById("msg");
    const specialMessage = document.getElementById("specialMessage");
    const secondImage = document.getElementById("secondimg");

    if (nameInput !== "") {
        nameSpan.textContent = ` ${nameInput} `;
        personalizedMessage.textContent = `Happy New Year!\n  Dear ${nameInput} ❤️ Cheers!! ❤️`;
        // Hide the special message and show the default image
        specialMessage.innerHTML = "Hey " + nameInput + "<br>Thanks a million for being the awesome human you are. Your presence has made my days brighter, and I'm grateful for that. Let's crush it together in the coming year!<br>Cheers to more laughs and adventures!❤️";
 specialMessage.classList.remove("hidden");
        secondImage.classList.add("hidden");
    } else {
        nameSpan.textContent = "❤️";
        
        // Show the special message and hide the default image
        specialMessage.classList.add("hidden");
        secondImage.classList.remove("hidden");
    }
}
