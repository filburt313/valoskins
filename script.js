"use strict";

//VALORANT SKINS INFO APP

// SKIN INFO BUTTON
const btn = document.querySelector(".btn-light");

const inputSkin = document.querySelector(".skinName");

// CREATING THE ELEMENTS FOR LEVELS AND CHROMAS

const countriesContainer = document.querySelector(".countries");
const acordeon = document.querySelector("#accordionExample");
const acordeonItem = document.createElement("div");
const acordeonItem1 = document.createElement("div");
const acordeonItem2 = document.createElement("div");
const acordeonItem3 = document.createElement("div");
const acordeonItem4 = document.createElement("div");
const acordeonItemUnique = document.createElement("div");
const acordeonItemNew = document.createElement("div");

const acordeonLevel1 = document.createElement("div");
const acordeonLevel2 = document.createElement("div");
const acordeonLevel3 = document.createElement("div");
const acordeonLevel4 = document.createElement("div");
const acordeonLevelUnique = document.createElement("div");
const acordeonLevel5 = document.createElement("div");

// CARD WITH NAME AND IMAGE INFO
let icono = document.getElementById("iconomin");
let iconoElemento = document.createElement("img");

let titulo = document.getElementById("tituloSkin");
let tituloSkinElemento = document.createElement("h5");

function infoSkin(skin) {
  fetch(`https://valorant-api.com/v1/weapons/skins`)
    .then((response) => {
      if (response.status === 403) {
        document.write("<p>The website is busy, try again later 🧭</p>");
      }
      return response.json();
    })
    .then((data) => {
      let myObject = JSON.stringify(
        data.data.find((obj) => obj.displayName == skin),
        null,
        2
      );
      console.log(myObject);
      let myObjectNoString = data.data.find((obj) => obj.displayName == skin);

      function PopoverFunction() {
        const myPopover = new bootstrap.Popover(btn);
        myPopover.hide();

        if (!myObjectNoString) {
          console.log("Bad skin name");

          myPopover.show(); // Linea a borrar

          // Detect clicks outside of the popover
          document.addEventListener("click", function (event) {
            // If the clicked element is not the button or the popover

            if (
              !btn.contains(event.target) &&
              !myPopover._element.contains(event.target)
            ) {
              // Hide the popover
              //myPopover.dispose();

              myPopover.dispose(); // Linea a borrar
            }
          });
        } else {
          myPopover.dispose();
        }
      }
      PopoverFunction();
      // Detect clicks outside of the popover

      // If the clicked element is not the button or the popover

      // document.write(`---------Name---------`);
      //document.write(`${myObjectNoString}`);
      if (myObjectNoString) {
        //myPopover.hide();

        icono.classList.add("card");
        // acordeon.appendChild(acordeonItem);

        icono.appendChild(iconoElemento);
        titulo.appendChild(tituloSkinElemento);

        //APPENDING THE CHROMAS TO THE PARENT
        acordeon.appendChild(acordeonItem);
        acordeon.appendChild(acordeonItem1);
        acordeon.appendChild(acordeonItem2);
        acordeon.appendChild(acordeonItem3);
        acordeon.appendChild(acordeonItem4);
        acordeon.appendChild(acordeonItemUnique);
        acordeon.appendChild(acordeonItemNew);

        //APPENDING THE LEVELS TO THE PARENT
        acordeon.appendChild(acordeonLevel1);
        acordeon.appendChild(acordeonLevel2);
        acordeon.appendChild(acordeonLevel3);
        acordeon.appendChild(acordeonLevel4);
        acordeon.appendChild(acordeonLevelUnique);
        acordeon.appendChild(acordeonLevel5);
      }

      titulo.innerHTML = `<h5 class="card-title">${myObjectNoString.displayName}</h5>`;

      iconoElemento.setAttribute("src", `${myObjectNoString.displayIcon}`);
      iconoElemento.setAttribute("alt", "Image description");

      iconoElemento.setAttribute("width", "${this.width}");
      iconoElemento.setAttribute("height", "{this.height}");

      console.log("---------Propiedades---------");
      for (const info in myObjectNoString) {
        console.log(info);
      }

      if (acordeonItem.innerHTML !== ``) {
        acordeonItem.innerHTML = ``;
      }
      /////////

      //  SOME ELEMENTS

      ///////
      acordeonLevel1.innerHTML = `<br> <br> <br> <div class="accordion-item" style="background-color: transparent;">
      <h2 class="accordion-header" id="heading1Level">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse1Level"
          aria-expanded="false"
          aria-controls="collapse1Level" 
        
        >
        Level # 1
        </button>
      </h2>
      <div
        id="collapse1Level"
        class="accordion-collapse collapse"
        aria-labelledby="heading1Level"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <video
            width="854"
            height="480"
            src="${myObjectNoString.levels[0].streamedVideo}"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </div>`;

      acordeonLevel2.innerHTML = `<div class="accordion-item" style="background-color: transparent;">
      <h2 class="accordion-header" id="heading2Level">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse2Level"
          aria-expanded="false"
          aria-controls="collapse2Level" 
        
        >
        Level # 2
        </button>
      </h2>
      <div
        id="collapse2Level"
        class="accordion-collapse collapse"
        aria-labelledby="heading2Level"
        data-bs-parent="#accordionExample" 
      >
        <div class="accordion-body">
          <video
            width="854"
            height="480"
            src="${
              myObjectNoString.levels.length > 1
                ? myObjectNoString.levels[1].streamedVideo
                : ""
            }"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </div>`;

      /////// CHECK HOW MANY ELEMENTS WILL DISPLAY

      for (const chromas of myObjectNoString.chromas) {
        console.log(chromas.streamedVideo);
        console.log(myObjectNoString.chromas.length);
        console.log(myObjectNoString.chromas);
        console.log("Iteracion");
        acordeonItemUnique.style.display = "none";
        acordeonItemNew.style.display = "none";

        if (
          myObjectNoString.chromas.length === 1 &&
          myObjectNoString.levels.length === 1 &&
          !myObjectNoString.chromas[0].streamedVideo &&
          !myObjectNoString.levels[0].streamedVideo
        ) {
          acordeonItemUnique.style.display = "none";
          acordeonItem1.style.display = "none";
          acordeonItem2.style.display = "none";
          acordeonItem3.style.display = "none";
          acordeonItem4.style.display = "none";

          acordeonLevel1.style.display = "none";
          acordeonLevel2.style.display = "none";
          acordeonLevel3.style.display = "none";
          acordeonLevel4.style.display = "none";
          acordeonLevel5.style.display = "none";
          acordeonLevelUnique.style.display = "none";
        }

        if (
          myObjectNoString.chromas.length === 1 &&
          !myObjectNoString.chromas[0].streamedVideo &&
          myObjectNoString.levels.length === 4 &&
          myObjectNoString.levels[0].streamedVideo &&
          myObjectNoString.levels[1].streamedVideo &&
          myObjectNoString.levels[2].streamedVideo &&
          myObjectNoString.levels[3].streamedVideo
        ) {
          acordeonItemUnique.style.display = "none";
          acordeonItemNew.style.display = "none";
          acordeonItem1.style.display = "none";
          acordeonItem2.style.display = "none";
          acordeonItem3.style.display = "none";
          acordeonItem4.style.display = "none";

          acordeonLevel1.style.display = "block";
          acordeonLevel2.style.display = "block";
          acordeonLevel3.style.display = "block";
          acordeonLevel4.style.display = "block";
          console.log("champions");

          //VER PORQUE NO MUESTRA LOS ELEMENTOS
        }

        if (myObjectNoString.chromas.length > 1) {
          if (
            myObjectNoString.chromas.length === 3 &&
            !myObjectNoString.chromas[0].streamedVideo &&
            myObjectNoString.chromas[1].streamedVideo &&
            myObjectNoString.chromas[2].streamedVideo &&
            myObjectNoString.levels.length === 1 &&
            myObjectNoString.levels[0].streamedVideo
          ) {
            acordeonItemUnique.style.display = "none";
            acordeonItemNew.style.display = "none";
            acordeonItem1.style.display = "none";
            acordeonItem2.style.display = "none";
            acordeonItem3.style.display = "none";
            acordeonItem4.style.display = "none";

            acordeonLevel1.style.display = "block";

            acordeonLevel2.style.display = "none";
            acordeonLevel3.style.display = "none";
            acordeonLevel4.style.display = "none";
            acordeonLevel5.style.display = "none";
            acordeonLevelUnique.style.display = "none";
          }
          if (
            !myObjectNoString.chromas[0].streamedVideo &&
            myObjectNoString.chromas.length === 2 &&
            myObjectNoString.chromas[1].streamedVideo
          ) {
            acordeonItem1.style.display = "none";
            acordeonItem2.style.display = "none";
            acordeonItem3.style.display = "none";
            acordeonItem4.style.display = "none";
          } else {
          }

          if (
            !myObjectNoString.chromas[0].streamedVideo &&
            myObjectNoString.chromas.length === 1
          ) {
            acordeonItem1.style.display = "none";
            acordeonItem2.style.display = "none";
            acordeonItem3.style.display = "none";
            acordeonItem4.style.display = "none";
          }

          if (
            myObjectNoString.chromas.length === 4 &&
            myObjectNoString.levels.length === 2 &&
            !myObjectNoString.chromas[0].streamedVideo &&
            myObjectNoString.chromas[1].streamedVideo &&
            myObjectNoString.chromas[2].streamedVideo &&
            myObjectNoString.chromas[3].streamedVideo &&
            myObjectNoString.levels[0].streamedVideo &&
            myObjectNoString.levels[1].streamedVideo
          ) {
            acordeonItem1.style.display = "block";
            acordeonItem2.style.display = "block";
            acordeonItem3.style.display = "block";

            acordeonItem4.style.display = "none";
            acordeonItemNew.style.display = "none";
            acordeonItemUnique.style.display = "none";

            acordeonLevel1.style.display = "none";
            acordeonLevel2.style.display = "block";
            acordeonLevel3.style.display = "none";
            acordeonLevel4.style.display = "none";
            acordeonLevel5.style.display = "none";
            acordeonLevelUnique.style.display = "none";
          }

          if (
            !myObjectNoString.chromas[0].streamedVideo &&
            myObjectNoString.chromas.length === 4
          ) {
            acordeonItem1.style.display = "none";
            acordeonItem2.style.display = "block";
            acordeonItem3.style.display = "block";
            acordeonItem4.style.display = "none";
          } else if (
            myObjectNoString.chromas[0].streamedVideo &&
            myObjectNoString.chromas.length === 4
          ) {
            acordeonItem1.style.display = "block";
            acordeonItem2.style.display = "block";
            acordeonItem3.style.display = "block";
            acordeonItem4.style.display = "block";
          }

          if (!myObjectNoString.chromas[1].streamedVideo) {
            acordeonItem1.style.display = "none";
          } else if (myObjectNoString.chromas.length === 4) {
            acordeonItem1.style.display = "block";
          } else if (myObjectNoString.chromas.length === 2) {
            acordeonItemUnique.style.display = "block";
          }

          if (
            !myObjectNoString.chromas[0].streamedVideo &&
            !myObjectNoString.chromas[1].streamedVideo &&
            !myObjectNoString.chromas[2].streamedVideo &&
            !myObjectNoString.chromas[3].streamedVideo &&
            myObjectNoString.chromas.length === 4
          ) {
            acordeonItem1.style.display = "none";
            acordeonItem2.style.display = "none";
            acordeonItem3.style.display = "none";
            acordeonItem4.style.display = "none";
          }

          if (
            myObjectNoString.chromas.length === 4 &&
            myObjectNoString.levels.length === 5
          ) {
            acordeonLevel3.style.display = "block";
            acordeonLevel4.style.display = "block";
          }
        }
      }

      for (const levels of myObjectNoString.levels) {
        console.log(levels.streamedVideo);
        console.log(myObjectNoString.levels.length);
        console.log(myObjectNoString.levels);
        console.log("Iteracion");
        acordeonLevelUnique.style.display = "none";

        if (
          !myObjectNoString.levels[0].streamedVideo &&
          myObjectNoString.levels.length === 2 &&
          myObjectNoString.levels[1].streamedVideo
        ) {
          acordeonLevel1.style.display = "none";
          acordeonLevel2.style.display = "none";
          acordeonLevel3.style.display = "none";
          acordeonLevel4.style.display = "none";
        } else {
        }

        if (
          !myObjectNoString.levels[0].streamedVideo &&
          myObjectNoString.levels.length === 1
        ) {
          acordeonLevel1.style.display = "none";
          acordeonLevel2.style.display = "none";
          acordeonLevel3.style.display = "none";
          acordeonLevel4.style.display = "none";
        }

        if (
          !myObjectNoString.levels[0].streamedVideo &&
          myObjectNoString.levels.length === 4
        ) {
          acordeonLevel1.style.display = "none";
          acordeonLevel2.style.display = "block";
          acordeonLevel3.style.display = "block";
          acordeonLevel4.style.display = "none";
        } else if (
          myObjectNoString.levels[0].streamedVideo &&
          myObjectNoString.levels.length === 4
        ) {
          acordeonLevel1.style.display = "block";
          acordeonLevel2.style.display = "block";
          acordeonLevel3.style.display = "block";
          acordeonLevel4.style.display = "block";
        }

        if (!myObjectNoString.levels[1].streamedVideo) {
          acordeonLevel1.style.display = "none";
        } else if (myObjectNoString.levels.length === 4) {
          acordeonLevel1.style.display = "block";
        } else if (myObjectNoString.levels.length === 2) {
          acordeonLevelUnique.style.display = "block";
        }

        if (
          !myObjectNoString.levels[0].streamedVideo &&
          !myObjectNoString.levels[1].streamedVideo &&
          !myObjectNoString.levels[2].streamedVideo &&
          !myObjectNoString.levels[3].streamedVideo &&
          myObjectNoString.levels.length === 4
        ) {
          acordeonLevel1.style.display = "none";
          acordeonLevel2.style.display = "none";
          acordeonLevel3.style.display = "none";
          acordeonLevel4.style.display = "none";
        }

        if (myObjectNoString.levels.length === 4) {
          acordeonLevel5.style.display = "none";
        }
        if (myObjectNoString.levels.length === 5) {
          acordeonLevel5.style.display = "block";
        }

        if (
          myObjectNoString.levels.length === 2 &&
          myObjectNoString.levels[0].streamedVideo &&
          myObjectNoString.levels[1].streamedVideo &&
          myObjectNoString.chromas.length === 1 &&
          !myObjectNoString.chromas[0].streamedVideo
        ) {
          console.log("Reaver Knifeee");

          acordeonItem1.style.display = "none";
          acordeonItem2.style.display = "none";
          acordeonItem3.style.display = "none";
          acordeonItem4.style.display = "none";

          acordeonLevel1.style.display = "block";
          acordeonLevel2.style.display = "block";
          acordeonLevel3.style.display = "none";
          acordeonLevel4.style.display = "none";
          acordeonLevel5.style.display = "none";
          acordeonLevelUnique.style.display = "none";
        }

        if (
          myObjectNoString.chromas.length === 4 &&
          !myObjectNoString.chromas[0].streamedVideo &&
          myObjectNoString.levels.length === 5 &&
          myObjectNoString.levels[0].streamedVideo
        ) {
          acordeonItem1.style.display = "block";
          acordeonItem2.style.display = "block";
          acordeonItem3.style.display = "block";
          acordeonLevel1.style.display = "block";
          acordeonLevel2.style.display = "block";
          acordeonLevel3.style.display = "block";
          acordeonLevel4.style.display = "block";
          acordeonLevel5.style.display = "block";
        }
        if (
          myObjectNoString.chromas.length === 1 &&
          myObjectNoString.levels.length === 1 &&
          !myObjectNoString.chromas[0].streamedVideo &&
          !myObjectNoString.levels[0].streamedVideo
        ) {
          acordeonItem1.style.display = "none";
          acordeonItem2.style.display = "none";
          acordeonItem3.style.display = "none";
          acordeonItem4.style.display = "none";
          acordeonItemUnique.style.display = "none";

          acordeonLevel1.style.display = "none";
          acordeonLevel2.style.display = "none";
          acordeonLevel3.style.display = "none";
          acordeonLevel4.style.display = "none";
          acordeonLevel5.style.display = "none";
          acordeonLevelUnique.style.display = "none";
        }

        if (
          myObjectNoString.chromas.length === 1 &&
          myObjectNoString.levels.length === 3 &&
          !myObjectNoString.chromas[0].streamedVideo &&
          myObjectNoString.levels[0].streamedVideo &&
          myObjectNoString.levels[1].streamedVideo &&
          myObjectNoString.levels[2].streamedVideo
        ) {
          acordeonItem1.style.display = "none";
          acordeonItem2.style.display = "none";
          acordeonItem3.style.display = "none";
          acordeonItem4.style.display = "none";

          acordeonLevel1.style.display = "block";
          acordeonLevel2.style.display = "block";
          acordeonLevel3.style.display = "none";
          acordeonLevel4.style.display = "none";
          acordeonLevel5.style.display = "none";
          acordeonLevelUnique.style.display = "none";
        }
      }

      //
      //////////

      // // // CHROMAS
      acordeonItemUnique.innerHTML = `<div class="accordion-item" style="background-color: transparent;">
      <h2 class="accordion-header" id="headingUni">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseUni"
          aria-expanded="false"
          aria-controls="collapseUni" 
          
        >
          Chroma # 1
        </button>
      </h2>
      <div
        id="collapseUni"
        class="accordion-collapse collapse"
        aria-labelledby="headingUni"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <video
            width="854"
            height="480"
            src="${
              myObjectNoString.chromas.length > 1
                ? myObjectNoString.chromas[1].streamedVideo
                : ""
            }"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </div>`;

      acordeonItem1.innerHTML = `<div class="accordion-item" style="background-color: transparent;">
      <h2 class="accordion-header" id="heading1">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse1"
          aria-expanded="false"
          aria-controls="collapse1"
        >
          Chroma # 1
        </button>
      </h2>
      <div
        id="collapse1"
        class="accordion-collapse collapse"
        aria-labelledby="heading1"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <video
            width="854"
            height="480"
            src="${
              myObjectNoString.chromas.length > 1
                ? myObjectNoString.chromas[3].streamedVideo
                : ""
            }"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </div>`;

      acordeonItem2.innerHTML = `<div class="accordion-item" style="background-color: transparent;">
      <h2 class="accordion-header" id="heading2">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse2"
          aria-expanded="false"
          aria-controls="collapse2" 
        >
          Chroma # 2
        </button>
      </h2>
      <div
        id="collapse2"
        class="accordion-collapse collapse"
        aria-labelledby="heading2"
        data-bs-parent="#accordionExample" 
      >
        <div class="accordion-body">
          <video
            width="854"
            height="480"
            src="${
              myObjectNoString.chromas.length > 1
                ? myObjectNoString.chromas[1].streamedVideo
                : ""
            }"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </div>`;

      acordeonItem3.innerHTML = `<div class="accordion-item" style="background-color: transparent;">
      <h2 class="accordion-header" id="heading3">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse3"
          aria-expanded="false"
          aria-controls="collapse3"
        >
          Chroma # 3
        </button>
      </h2>
      <div
        id="collapse3"
        class="accordion-collapse collapse"
        aria-labelledby="heading3"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <video
            width="854"
            height="480"
            src="${
              myObjectNoString.chromas.length > 1
                ? myObjectNoString.chromas[2].streamedVideo
                : ""
            }"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </div>`;

      acordeonItem4.innerHTML = `<div class="accordion-item" style="background-color: transparent;">
      <h2 class="accordion-header" id="heading4">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse4"
          aria-expanded="false"
          aria-controls="collapse4" 
        >
          Chroma # 4
        </button>
      </h2>
      <div
        id="collapse4"
        class="accordion-collapse collapse"
        aria-labelledby="heading4"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <video
            width="854"
            height="480"
            src="${myObjectNoString.chromas[0].streamedVideo}"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </div>`;

      acordeonItemNew.innerHTML = `<div class="accordion-item" style="background-color: transparent;">
      <h2 class="accordion-header" id="headingNew">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNew"
          aria-expanded="false"
          aria-controls="collapseNew" 
        >
          Chroma # 2
        </button>
      </h2>
      <div
        id="collapseNew"
        class="accordion-collapse collapse"
        aria-labelledby="headingNew"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <video
            width="854"
            height="480"
            src="${myObjectNoString.chromas[2].streamedVideo}"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </div>`;

      //////// LEVELS

      acordeonLevelUnique.innerHTML = `<div class="accordion-item" style="background-color: transparent;">
      <h2 class="accordion-header" id="headingUniLevel">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseUniLevel"
          aria-expanded="false"
          aria-controls="collapseUniLevel" 
        >
          Level # 1
        </button>
      </h2>
      <div
        id="collapseUniLevel"
        class="accordion-collapse collapse"
        aria-labelledby="headingUniLevel"
        data-bs-parent="#accordionExample" 
      >
        <div class="accordion-body">
          <video
            width="854"
            height="480"
            src="${myObjectNoString.levels[1].streamedVideo}"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </div>`;

      acordeonLevel3.innerHTML = `<div class="accordion-item" style="background-color: transparent;">
      <h2 class="accordion-header" id="heading3Level">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse3Level"
          aria-expanded="false"
          aria-controls="collapse3Level" 
        >
        Level # 3
        </button>
      </h2>
      <div
        id="collapse3Level"
        class="accordion-collapse collapse"
        aria-labelledby="heading3Level"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <video
            width="854"
            height="480"
            src="${myObjectNoString.levels[2].streamedVideo}"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </div>`;

      acordeonLevel4.innerHTML = `<div class="accordion-item" style="background-color: transparent;">
      <h2 class="accordion-header" id="heading4Level">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse4Level"
          aria-expanded="false"
          aria-controls="collapse4Level" 
        >
        Level # 4
        </button>
      </h2>
      <div
        id="collapse4Level"
        class="accordion-collapse collapse"
        aria-labelledby="heading4Level"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <video
            width="854"
            height="480"
            src="${myObjectNoString.levels[3].streamedVideo}"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </div>`;

      acordeonLevel5.innerHTML = `<div class="accordion-item" style="background-color: transparent;">
      <h2 class="accordion-header" id="heading5Level">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse5Level"
          aria-expanded="false"
          aria-controls="collapse5Level"
        >
        Level # 5
        </button>
      </h2>
      <div
        id="collapse5Level"
        class="accordion-collapse collapse"
        aria-labelledby="heading5Level"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <video
            width="854"
            height="480"
            src="${myObjectNoString.levels[4].streamedVideo}"
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </div>`;
    })

    .catch(function (error) {
      console.log("Promise was rejected");

      console.log(error);
    });
}

//IF SELECT ANOTHER ACCORDION THE PREVIOUS WILL STOP FROM PLAYING

document.addEventListener("DOMContentLoaded", function () {
  let accordion = document.getElementById("accordionExample");
  accordion.addEventListener("hide.bs.collapse", function (event) {
    let video = event.target.querySelector("video");
    if (video) {
      video.pause();
    }
  });
});

btn.addEventListener("click", function () {
  infoSkin(inputSkin.value);
});

inputSkin.addEventListener("keydown", function (event) {
  // Check if the key pressed was the "Enter" key
  if (event.key === "Enter") {
    // Trigger the button's click event
    infoSkin(inputSkin.value);
  }
});
