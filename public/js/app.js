console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message1 = document.getElementById("messageOne");
const message2 = document.getElementById("messageTwo");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = search.value;

  message1.textContent = "Loading...";
  message2.textContent = "";

  fetch(`http://localhost:3000/weather?address=${query}`).then((res) =>
    res.json().then((data) => {
      if (data.error) {
        return (message1.textContent = data.error);
      }
      message1.textContent = data.location;
      message2.textContent = data.forecast;
    })
  );
});
