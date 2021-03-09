

let futhark = [
  {
    id: 0,
    name: "Wyrd",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 1,
    name: "Fehu",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 2,
    name: "Uruz",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 3,
    name: "Thurisaz",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 4,
    name: "Ansuz",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 5,
    name: "Raido",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 6,
    name: "Kenaz",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 7,
    name: "Gebo",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 8,
    name: "Wunjo",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 9,
    name: "Hagalaz",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 10,
    name: "Nauthiz",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 11,
    name: "Isa",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 12,
    name: "Jera",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 13,
    name: "Eihwaz",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 14,
    name: "Perdhro",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 15,
    name: "Elhaz",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 16,
    name: "Sowilo",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 17,
    name: "Tiwaz",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 18,
    name: "Berkano",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 19,
    name: "Ehwaz",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 20,
    name: "Mannaz",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 21,
    name: "Laguz",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 22,
    name: "Ingwaz",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 23,
    name: "Dagaz",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },

  {
    id: 24,
    name: "Othila",
    value1: "",
    value2: "",
    value3: "",
    murkstave: "",
  },
];

let rune = {
  position: "",
  id: "",
  name: "",
  value1: "",
  value2: "",
  value3: "",
}

let spread = [];

let idArray = [];

function saveSpread() { }

function loadSpread() { }

function randomIdArray() {
  let arrayLength = 7
  idArray = []
  for (let i = 0; i < arrayLength; i++) {
    let id = Math.floor(Math.random() * 24);
    if (idArray.indexOf(id) == -1) {
      idArray.push(id);
    }
    else
      i--;
  }
}

function drawThree() {
  document.getElementById("threeSpread").classList.remove("hidden")
  document.getElementById("dropdown").classList.add("hidden")
  document.getElementById("welcome").classList.add("hidden")
  let rune = {};
  randomIdArray();
  rune = {
    position: "Past",
    id: futhark[idArray[0]].id,
    name: futhark[idArray[0]].name,
    value1: futhark[idArray[0]].value1,
    value2: futhark[idArray[0]].value2,
    value3: futhark[idArray[0]].value3,
    murkstave: futhark[idArray[0]].murkstave
  }
  spread.push(rune)
  rune = {
    position: "Present",
    id: futhark[idArray[1]].id,
    name: futhark[idArray[1]].name,
    value1: futhark[idArray[1]].value1,
    value2: futhark[idArray[1]].value2,
    value3: futhark[idArray[1]].value3,
    murkstave: futhark[idArray[1]].murkstave
  }
  spread.push(rune)
  rune = {
    position: "Future",
    id: futhark[idArray[2]].id,
    name: futhark[idArray[2]].name,
    value1: futhark[idArray[2]].value1,
    value2: futhark[idArray[2]].value2,
    value3: futhark[idArray[2]].value3,
    murkstave: futhark[idArray[2]].murkstave
  }
  spread.push(rune)
  drawSpread()
}

function drawSpread() {
  let spreadListElement = document.getElementById("spread")
  let spreadTemplate = ""
  spread.forEach(rune => {
    let runeCard = 'rune-card-upright'
    let labelColor = 'label-upright'
    let glow = 'upright'
    let hide = 'hidden'
    if (Math.floor(Math.random() * 10) >= 7) {
      runeCard = 'rune-card-inverted'
      labelColor = 'label-inverted'
      glow = 'inverted'
      hide = 'text-danger'
    }
    if (rune.name == "Wyrd") {
      runeCard = 'rune-card-weird'
      labelColor = 'label-weird'
      glow = 'weird'
    }
    spreadTemplate += `
    <div id="spread" class="${runeCard} m-1 shadow">
      <button class="title-text position-label center mb-1 ${labelColor}" disabled>
        <large> ${rune.position}</large>
      </button>
      <img class = "${glow} center m-1" src="Runes/${rune.name}.png">
      <label class = "rune-text">
        <p class = "text-center">${rune.name}</p>
      </label>
      <button class="label-text rune-label center ${labelColor}" disabled>
        <p class = > ${rune.value1} Sample Text </p>
        <p class = > ${rune.value2} With Some Fun Stuff</p>
        <p class = > ${rune.value3} Etc </p>
        <p class = ${hide}> ${rune.murkstave} </p>
      </button>
    </div>
  `
  })
  spreadListElement.innerHTML = spreadTemplate
}