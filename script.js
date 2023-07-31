// //for to generate random image for cards

// const imageArray = new Array(
//     "image/1.jpg",
//     "image/2.jpg",
//     "image/3.jpg",
//     "image/4.jpg",
//     "image/5.jpg",
//     "image/6.jpg",
//     "image/7.jpg",
//     "image/8.jpg",
//     "image/9.jpg",
//     "image/10.jpg",
// );

// function loadRandomImage() {
//     const randomIndex = Math.floor(Math.random() * imageArray.length);
//     const imgElement = window.getElementById('myimage');
//     imgElement.src = imageArray[randomIndex];
// }
// const mycards = document.getElementById("mycards");

// //for the cards
// let url = "https://kontests.net/api/v1/all";
//   fetch(url)
//     .then((response) => response.json())
//     .then((contest) => {
//       let inhtml = "";
//       for (const item in contest) {
//         inhtml += `<div class="card" style="width: 18rem;">
//                     <img src="${imageArray[item % imageArray.length]}" id="myimage">
//                     <div class="card-body">
//                       <h5 class="card-title">${contest[item].name}</h5>
//                       <div class="card-text">
//                         <p>On Site ${contest[item].site}</p>
//                         <p>Start time: ${contest[item].start_time} to end time: ${contest[item].end_time}</p>
//                         <p>In 24 hours? ${contest[item].in_24_hours}</p>
//                       </div>
//                       <a href="${contest[item].url}" class="btn btn-primary">Go somewhere</a>
//                     </div>
//                   </div>`;
//       }
//       mycards.innerHTML = inhtml;
//     })
//     .catch((error) => console.error("Error fetching data:", error));
  

const imageArray = [
  "image/1.jpg",
  "image/2.jpg",
  "image/3.jpg",
  "image/4.jpg",
  "image/5.jpg",
  "image/6.jpg",
  "image/7.jpg",
  "image/8.jpg",
  "image/9.jpg",
  "image/10.jpg",
];

function loadRandomImage(imgElement) {
  const randomIndex = Math.floor(Math.random() * imageArray.length);
  imgElement.src = imageArray[randomIndex];
}

const mycards = document.getElementById("mycards");

let url = "https://kontests.net/api/v1/all";
fetch(url)
  .then((response) => response.json())
  .then((contest) => {
    let inhtml = "";
    for (const item in contest) {
      const card = document.createElement("div");
      card.className = "card";
      card.style.width = "20rem";
      card.style.display = "inline";

      const imgElement = document.createElement("img");
      imgElement.id = "myimage";
      loadRandomImage(imgElement); // Call to set random image for each card

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const cardTitle = document.createElement("h5");
      cardTitle.className = "card-title";
      cardTitle.textContent = contest[item].name;

      const cardText = document.createElement("div");
      cardText.className = "card-text";
      cardText.innerHTML = `
        <p>On Site ${contest[item].site}</p>
        <p>Start time: ${contest[item].start_time} to end time: ${contest[item].end_time}</p>
        <p>In 24 hours? ${contest[item].in_24_hours}</p>
      `;

      const cardLink = document.createElement("a");
      cardLink.href = contest[item].url;
      cardLink.className = "btn btn-primary";
      cardLink.textContent = "Go somewhere";

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardLink);

      card.appendChild(imgElement);
      card.appendChild(cardBody);

      mycards.appendChild(card);
    }
  })
  .catch((error) => console.error("Error fetching data:", error));
