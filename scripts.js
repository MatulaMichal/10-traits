let mouse = { x: 0, y: 0 };
document.addEventListener("mousemove", function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

let timer = 0;

window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
  const modal2 = document.getElementById("resetModal");
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

function menuOnClick() {
  const modal = document.getElementById("answerModal");
  modal.style.display = "none";
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
  document.getElementById("menu-overlay").classList.toggle("change");
  setTimeout(
    () => document.getElementById("nav").classList.toggle("change-nav"),
    10
  );
  const startPage = document.getElementById("bg");
  if (startPage.classList.contains("hidden")) {
    console.log(startPage.classList.contains("hidden"));
    document.getElementById("menu-reset").classList.add("option-visible");
  } else {
    console.log(startPage.classList.contains("hidden"));
    document.getElementById("menu-reset").classList.remove("option-visible");
  }
  document.getElementById("menu-bar").blur();
}
function triggerFullscreen() {
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  ) {
    document.exitFullscreen();
  } else {
    elem = document.querySelector(".ctnr");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  menuOnClick();
}

function transition() {
  document.getElementById("table").style.display = "block";
  document.getElementById("start_transition").classList.toggle("transition");

  setTimeout(
    () => document.getElementById("start_title").classList.toggle("hidden"),
    400
  );
  setTimeout(
    () => document.getElementById("bg").classList.toggle("hidden"),
    400
  );
  setTimeout(
    () => document.getElementById("start_btn").classList.toggle("hidden"),
    400
  );
  document.getElementById("menu-bar").classList.remove("change");
  document.getElementById("nav").classList.remove("change");
  document.getElementById("menu-bg").classList.remove("change-bg");
  const modal = document.getElementById("myModal");

  setTimeout(() => (modal.style.display = "block"), 400);
}

function hideModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function onButtonClick(id, e) {
  console.log(e);
  showAnswerModal(id, e);
}

function hideResetModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function showAnswerModal(id, e) {
  const modal = document.getElementById("answerModal");
  const button = document.getElementById(id);
  // const modalOverlay = document.getElementById("answerOverlay");
  // modalOverlay.style.display = "flex";

  if (e.clientX === 0 && e.clientY === 0) {
    const rect = button.getBoundingClientRect();
    modal.style.left = rect.left + "px";
    modal.style.top = rect.bottom + "px";
    modal.style.display = "flex";
  } else {
    modal.style.left = mouse.x + "px";
    modal.style.top = mouse.y + "px";
    modal.style.display = "flex";
  }
  if (window.innerWidth - mouse.x < 220) {
    if (window.innerHeight - mouse.y < 150) {
      modal.style.top = Number(modal.style.top.slice(0, -2)) - 200 + "px";
    }
    modal.style.flexDirection = "column";
  } else {
    if (window.innerHeight - mouse.y < 150) {
      modal.style.top = Number(modal.style.top.slice(0, -2)) - 50 + "px";
    }
    modal.style.flexDirection = "row";
  }
  const button1 = document.getElementById("plus");
  const button2 = document.getElementById("plus_minus");
  const button3 = document.getElementById("minus");

  button1.tabIndex = 1;
  button2.tabIndex = 2;
  button3.tabIndex = 3;
  button1.onclick = () => {
    button.innerHTML = "+";
    button.classList.remove("selected-minus");
    button.classList.remove("selected-neutral");
    button.classList.add("selected-plus");
    modal.style.display = "none";
  };
  button2.onclick = () => {
    button.innerHTML = "+ -";

    button.classList.remove("selected-minus");
    button.classList.remove("selected-plus");
    button.classList.add("selected-neutral");
    modal.style.display = "none";
  };
  button3.onclick = () => {
    button.innerHTML = "-";
    button.classList.remove("selected-plus");
    button.classList.remove("selected-neutral");
    button.classList.add("selected-minus");
    modal.style.display = "none";
  };
  if (e.pointerId === -1) {
    button1.focus();
  }
}

// function mouseEnter(id) {
//   timer = setTimeout(() => {
//     showAnswerModal(id);
//   }, 2500);
// }

// function mouseLeave(id) {
//   const modal = document.getElementById("answerModal");
//   modal.style.display = "none";
//   clearTimeout(timer);
// }

function generateTable() {
  if(ios()){
    const fullScreen = document.querySelector("#full");
    fullScreen.classList.add("hidden");
  }
  const columnTitles = [
    "Metody i\u00A0środki",
    "Nie szkodzi zdrowiu, jest całkowicie bezpieczna",
    "Jest w\u00A0100% skuteczna",
    "Nie wymaga dodatkowych czynności w\u00A0związku ze\u00A0zbliżeniem",
    "Jej efekt antykoncepcyjny jest odwracalny",
    "Jest prosta, bezbolesna, nie wymaga skrupulatności",
    "Łatwo ją odstawić",
    "Jest tania i\u00A0łatwo dostępna",
    "Jest akceptowalna przez każdą kulturę, religię",
    "Poddaje się kontroli kobiety",
  ];
  const methods = [
    "Wkładka wewnątrzmaciczna - spirala",
    "Pigułka hormonalna",
    "Metoda objawowo-termiczna (metoda Rötzera)",
    "Prezerwaty\u00ADwa",
    "Metoda Billingsa",
  ];

  const tbl = document.createElement("table");
  tbl.classList.add("tg");
  const tblHead = document.createElement("thead");
  const tblBody = document.createElement("tbody");
  const headerRow = document.createElement("tr");

  columnTitles.map((title) => {
    const cell = document.createElement("th");
    cell.innerHTML = title;
    cell.classList.add("tg-0pky");
    headerRow.appendChild(cell);
  });
  tblHead.appendChild(headerRow);
  tbl.appendChild(tblHead);

  methods.map((method, index) => {
    const row = document.createElement("tr");
    for (var i = 0; i < columnTitles.length; i++) {
      if (i == 0) {
        const cell = document.createElement("td");
        cell.classList.add("tg-0pky");
        cell.classList.add("first");
        cell.innerHTML = method;
        row.appendChild(cell);
      } else {
        const cell = document.createElement("td");
        cell.classList.add("tg-0pky");
        const button = document.createElement("button");
        button.classList.add("gameBtn");
        button.setAttribute("id", `mth${index}col${i}`);
        button.addEventListener("click", (e) => onButtonClick(button.id, e));
        // button.addEventListener('mouseenter', ()=> mouseEnter(button.id));
        // button.addEventListener('mouseleave', ()=> mouseLeave(button.id));
        cell.appendChild(button);
        row.appendChild(cell);
      }
    }
    tblBody.appendChild(row);
  });
  tbl.appendChild(tblBody);

  const table = document.querySelector("#table");

  table.appendChild(tbl);
}

function clearValues() {
  const buttons = Array.from(document.getElementsByClassName("gameBtn"));
  buttons.map((button) => {
    button.classList.remove("selected-minus");
    button.classList.remove("selected-plus");
    button.classList.remove("selected-neutral");
  });
  const modal = document.getElementById("answerModal");
  modal.style.display = "none";
  menuOnClick();
}

function clearValuesNoMenu() {
  const buttons = Array.from(document.getElementsByClassName("gameBtn"));
  buttons.map((button) => {
    button.innerHTML = "";
    button.classList.remove("selected-minus");
    button.classList.remove("selected-plus");
    button.classList.remove("selected-neutral");
  });
  const modal = document.getElementById("answerModal");
  modal.style.display = "none";
}

function showResetModal() {
  const modal = document.getElementById("resetModal");
  setTimeout(() => (modal.style.display = "block"), 400);
}

function hideResetModal() {
  const modal = document.getElementById("resetModal");
  modal.style.display = "none";
}

function resetClick() {
  menuOnClick();
  showResetModal();
}

function setFontMultiplier(value) {
  var r = document.querySelector(":root");
  r.style.setProperty("--fontSizeMultiplier", value);
}

function toggleContrast() {
  const root = document.querySelector(":root");
  document.querySelector(":root").classList.toggle("contrast");
  const properties = {
    "--primary": { normal: "#f3a894", highContrast: "#000000" },
    "--secondary": { normal: "#fad0bd", highContrast: "#000000" },
    "--secondaryContrast": { normal: "#fad0bd", highContrast: "#ff0" },
    "--secondaryMenu": { normal: "#fad0bd", highContrast: "#ff0" },
    "--tertiary": { normal: "#feebe0", highContrast: "#ff0" },
    "--highlight": { normal: "#fcefe8", highContrast: "#ff0" },
    "--primaryFont": { normal: "#000000", highContrast: "#000" },
    "--primaryFontMenu": { normal: "#000000", highContrast: "#ff0" },
    "--secondaryFont": { normal: "#ffffff", highContrast: "#ff0" },
    "--lightBg": { normal: "#ffffff", highContrast: "#000000" },
    "--primaryDark": { normal: "#eb7f64", highContrast: "#000000" },
    "--primaryDarkMenu": { normal: "#eb7f64", highContrast: "#ff0" },
    "--modalClose": { normal: "#aaaaaa", highContrast: "#000000" },
  };

  if (root.classList.contains("contrast")) {
    Object.keys(properties).map((property) => {
      root.style.setProperty(property, properties[property].highContrast);
    });
  } else {
    Object.keys(properties).map((property) => {
      root.style.setProperty(property, properties[property].normal);
    });
  }

  document.querySelector(".bg").classList.toggle("contrastBg");
  document.querySelector(".tri0").classList.toggle("contrastHidden");
  document.querySelector(".tri1").classList.toggle("contrastHidden");
  document.querySelector(".tri2").classList.toggle("contrastHidden");
  document.querySelector(".tri3").classList.toggle("contrastHidden");
  document.querySelector(".tri4").classList.toggle("contrastHidden");
  document.querySelector(".footer").classList.toggle("contrastHidden");
  document
    .querySelector(".menu-bg.change-bg")
    .classList.toggle("contrastBorder");

  const headers = document.querySelectorAll("th");
  Array.from(headers).map((header) =>
    header.classList.toggle("contrastBorder")
  );
  const buttons = document.querySelectorAll(".btn");
  Array.from(buttons).map((header) =>
    header.classList.toggle("contrastBorder")
  );

  const icons = document.querySelectorAll(".menu-icon");
  Array.from(icons).map((icon) => icon.classList.toggle("contrastHidden"));
}

function ios (){
  if (typeof window === `undefined` || typeof navigator === `undefined`) return false;

  return /iPhone|iPad|iPod/i.test(navigator.userAgent || navigator.vendor || (window.opera && opera.toString() === `[object Opera]`));
}