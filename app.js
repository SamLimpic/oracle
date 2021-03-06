
//#region Resources
let futhark = [
  {
    id: 0,
    name: "Wyrd",
    upright: "",
    murkstave: "",
  },

  {
    id: 1,
    name: "Fehu",
    upright: "",
    murkstave: "",
  },

  {
    id: 2,
    name: "Uruz",
    upright: "",
    murkstave: "",
  },

  {
    id: 3,
    name: "Thurisaz",
    upright: "",
    murkstave: "",
  },

  {
    id: 4,
    name: "Ansuz",
    upright: "",
    murkstave: "",
  },

  {
    id: 5,
    name: "Raido",
    upright: "",
    murkstave: "",
  },

  {
    id: 6,
    name: "Kenaz",
    upright: "",
    murkstave: "",
  },

  {
    id: 7,
    name: "Gebo",
    upright: "",
    murkstave: "",
  },

  {
    id: 8,
    name: "Wunjo",
    upright: "",
    murkstave: "",
  },

  {
    id: 9,
    name: "Hagalaz",
    upright: "",
    murkstave: "",
  },

  {
    id: 10,
    name: "Nauthiz",
    upright: "",
    murkstave: "",
  },

  {
    id: 11,
    name: "Isa",
    upright: "",
    murkstave: "",
  },

  {
    id: 12,
    name: "Jera",
    upright: "",
    murkstave: "",
  },

  {
    id: 13,
    name: "Eihwaz",
    upright: "",
    murkstave: "",
  },

  {
    id: 14,
    name: "Perdhro",
    upright: "",
    murkstave: "",
  },

  {
    id: 15,
    name: "Elhaz",
    upright: "",
    murkstave: "",
  },

  {
    id: 16,
    name: "Sowilo",
    upright: "",
    murkstave: "",
  },

  {
    id: 17,
    name: "Tiwaz",
    upright: "",
    murkstave: "",
  },

  {
    id: 18,
    name: "Berkano",
    upright: "",
    murkstave: "",
  },

  {
    id: 19,
    name: "Ehwaz",
    upright: "",
    murkstave: "",
  },

  {
    id: 20,
    name: "Mannaz",
    upright: "",
    murkstave: "",
  },

  {
    id: 21,
    name: "Laguz",
    upright: "",
    murkstave: "",
  },

  {
    id: 22,
    name: "Ingwaz",
    upright: "",
    murkstave: "",
  },

  {
    id: 23,
    name: "Dagaz",
    upright: "",
    murkstave: "",
  },

  {
    id: 24,
    name: "Othila",
    upright: "",
    murkstave: "",
  }
]

let meaning = [
  {
    card1: ""
  },
  {
    card1: "",
    card2: ""
  },
  {
    card1: "",
    card2: "",
    card3: ""
  },
  {
    card1: "",
    card2: "",
    card3: "",
    card4: "",
  },
  {
    card1: "",
    card2: "",
    card3: "",
    card4: "",
    card5: "",
  },
  {
    card1: "",
    card2: "",
    card3: "",
    card4: "",
    card5: "",
    card6: "",
    card7: ""
  },
  {
    card1: "",
    card2: "",
    card3: "",
    card4: "",
    card5: "",
    card6: "",
    card7: "",
    card8: "",
    card9: ""
  },
]

let rune = {}

let spread = []

let idArray = []

let spreadLength = spread.length

let input = document.getElementById("inputId");

input.oninput = function (e) {
  e.target.value = e.target.value.replace(' ', '_');
}
//#endregion

function saveSpread(event) {
  event.preventDefault()
  let form = event.target
  let name = form.name.value
  window.localStorage.setItem(name, JSON.stringify(spread))
  form.reset()
  reloadPage()
}

function loadSpreads() {
  let saveData = []
  let saveDataListElement = document.getElementById("saved-readings")
  let saveDataTemplate = ""
  for (let i = 0; i < localStorage.length; i++) {
    saveData.push(window.localStorage.key(i))
    let noSpaces = saveData[i].replace('_', ' ')
    saveDataTemplate += `
      <a onClick= loadSave("${saveData[i]}")> ${noSpaces} </a>
    `
  }
  saveDataListElement.innerHTML = saveDataTemplate
}

function loadSave(string) {
  spread = JSON.parse(window.localStorage.getItem(string))
  nameLength()
  drawSpread()
  document.getElementById("saved-reading").innerText = "Your Saved Reading"
  document.getElementById("save-input").classList.add("hidden")
}

function reloadPage() {
  sessionStorage.setItem("reload", "true");
  document.location.reload();
}

function randomIdArray(_number) {
  let arrayLength = _number
  idArray = []
  for (let i = 0; i < arrayLength; i++) {
    let id = Math.floor(Math.random() * 24)
    if (idArray.indexOf(id) == -1) {
      idArray.push(id)
    }
    else
      i--
  }
}

function murkState() {
  let state = "false"
  if (Math.floor(Math.random() * 10) >= 6.66) {
    state = "true"
  }
  console.log(Math.floor(Math.random() * 10))
}

function nameLength() {
  let spreadName = rune.reading
  spreadLength = spread.length
  if (spreadLength == 1) {
    spreadName = "Rune of the Day"
  } else if (spreadLength == 2) {
    spreadName = "What Will Be"
  } else if (spreadLength == 3) {
    spreadName = "Past Present Future"
  } else if (spreadLength == 4) {
    spreadName = "Four Points"
  } else if (spreadLength == 5) {
    spreadName = "Runic Cross"
  } else if (spreadLength == 7) {
    spreadName = "Long Journey"
  } else if (spreadLength == 9) {
    spreadName = "Nine Realms"
  }
  document.getElementById("spread-name").innerText = spreadName
}

function runePosition() {
  spreadLength = spread.length
  if (spreadLength == 1) {
    spread[0].position = "Daily Draw"
  } else if (spreadLength == 2) {
    spread[0].position = "Circumstances"
    spread[1].position = "Outcome"
  } else if (spreadLength == 3) {
    spread[0].position = "Past"
    spread[1].position = "Present"
    spread[2].position = "Future"
  } else if (spreadLength == 4) {
    spread[0].position = "North"
    spread[1].position = "East"
    spread[2].position = "West"
    spread[3].position = "South"
  } else if (spreadLength == 5) {
    spread[0].position = "Past Influence"
    spread[1].position = "Obstacles"
    spread[2].position = "Outcome"
    spread[3].position = "Benefits"
    spread[4].position = "Future Possibilities"
  } else if (spreadLength == 7) {
    spread[0].position = "Hidden Past"
    spread[1].position = "Past Influence"
    spread[2].position = "Present Obstacles"
    spread[3].position = "Present Attitude"
    spread[4].position = "Potential Action"
    spread[5].position = "Future Obstacles"
    spread[6].position = "Hidden Future"
  } else if (spreadLength == 9) {
    spread[0].position = "Niflheim"
    spread[1].position = "Asgard"
    spread[2].position = "Vanaheim"
    spread[3].position = "Ljosalfheim"
    spread[4].position = "Midgardr"
    spread[5].position = "Helheim"
    spread[6].position = "Muspellheim"
    spread[7].position = "Svartalheim"
    spread[8].position = "Jotunheim"
  }
}

function getStarted() {
  document.getElementById("save-button").classList.remove("hidden")
  document.getElementById("welcome").classList.add("hidden")
  document.getElementById("load-readings").classList.add("hidden")
  document.getElementById("spread-list").classList.add("hidden")
  document.getElementById("meaning").classList.remove("hidden")
  document.getElementById("return").classList.add("hidden")
}

function generateSpread(_number) {
  spread = []
  randomIdArray(_number)
  for (let i = 0; i < _number; i++) {
    spread[i] = {
      murk: "false",
      position: "",
      place: i,
      id: futhark[idArray[i]].id,
      name: futhark[idArray[i]].name,
      upright: futhark[idArray[i]].upright,
      murkstave: futhark[idArray[i]].murkstave
    }
    if (Math.floor(Math.random() * 10) >= 6.66) {
      spread[i].murk = "true"
    }
  }
  runePosition()
  nameLength()
  drawSpread()
}

function drawSpread() {
  getStarted()
  let spreadOneListElement = document.getElementById("spread-one")
  let spreadOneTemplate = ""
  let spreadTwoListElement = document.getElementById("spread-two")
  let spreadTwoTemplate = ""
  let spreadThreeListElement = document.getElementById("spread-three")
  let spreadThreeTemplate = ""
  spreadLength = spread.length
  for (let i = 0; i < spreadLength; i++) {
    let rune = spread[i]
    let runeCard = 'rune-card-upright'
    let labelColor = 'label-upright'
    let descriptionColor = 'description-upright'
    let glow = 'upright'
    let hide = 'hidden'
    let show = ''
    if (rune.murk == "true" && rune.name != "Wyrd") {
      runeCard = 'rune-card-inverted'
      labelColor = 'label-inverted'
      descriptionColor = 'description-inverted'
      glow = 'inverted'
      hide = ''
      show = 'hidden'
    }
    if (rune.name == "Wyrd") {
      runeCard = 'rune-card-weird'
      labelColor = 'label-weird'
      descriptionColor = 'description-weird'
      glow = 'weird'
    }
    if ((spreadLength <= 3) || (spreadLength == 4 && i == 0) || (spreadLength == 5 && i <= 1) || (spreadLength == 7 && i <= 1) || (spreadLength == 9 && i <= 2)) {
      spreadOneTemplate += `
    <div class="rune-card ${runeCard} m-1 shadow">

      <button class="position-card title-text position-label center mb-1 ${labelColor}" disabled>
        <large> ${rune.position}</large>
      </button>

      <button class="name-card title-text position-label center mb-1 ${labelColor}" disabled>
        <large>${rune.name} </large>
      </button>
      
      <img class = "${glow} center rune-img" src="./Assets/Runes.png/${rune.name}.png">

      <button class="label-text center ${descriptionColor} rune-description" disabled>
        <p class = ${show}> ${rune.upright} Throw in a lot of sample text that will probably emcompass several lines of code to test the card capacity </p>
        <p class = ${hide}> ${rune.murkstave} Throw in a lot of sample text that will probably emcompass several lines of code to test the card capacity </p>
      </button>
  
    </div>
  `
    } else if ((spreadLength == 4 && i <= 2) || (spreadLength == 5 && i == 2) || (spreadLength == 7 && i <= 4) || (spreadLength == 9 && i <= 5)) {
      spreadTwoTemplate += `
    <div class="rune-card ${runeCard} m-1 shadow">

      <button class="position-card title-text position-label center mb-1 ${labelColor}" disabled>
        <large> ${rune.position}</large>
      </button>

      <button class="name-card title-text position-label center mb-1 ${labelColor}" disabled>
        <large>${rune.name} </large>
      </button>
      
      <img class = "${glow} center rune-img" src="./Assets/Runes.png/${rune.name}.png">

      <button class="label-text center ${descriptionColor} rune-description" disabled>
        <p class = ${show}> ${rune.upright} Throw in a lot of sample text that will probably emcompass several lines of code to test the card capacity </p>
        <p class = ${hide}> ${rune.murkstave} Throw in a lot of sample text that will probably emcompass several lines of code to test the card capacity </p>
      </button>
  
    </div>
  `
    } else if ((spreadLength == 4 && i == 3) || (spreadLength == 5 && i <= 4) || (spreadLength == 7 && i <= 6) || (spreadLength == 9 && i <= 8)) {
      spreadThreeTemplate += `
    <div class="rune-card ${runeCard} m-1 shadow">

      <button class="position-card title-text position-label center mb-1 ${labelColor}" disabled>
        <large> ${rune.position}</large>
      </button>

      <button class="name-card title-text position-label center mb-1 ${labelColor}" disabled>
        <large>${rune.name} </large>
      </button>
      
      <img class = "${glow} center rune-img" src="./Assets/Runes.png/${rune.name}.png">

      <button class="label-text center ${descriptionColor} rune-description" disabled>
        <p class = ${show}> ${rune.upright} Throw in a lot of sample text that will probably emcompass several lines of code to test the card capacity </p>
        <p class = ${hide}> ${rune.murkstave} Throw in a lot of sample text that will probably emcompass several lines of code to test the card capacity </p>
      </button>
  
    </div>
  `
    }
  }
  spreadOneListElement.innerHTML = spreadOneTemplate
  spreadTwoListElement.innerHTML = spreadTwoTemplate
  spreadThreeListElement.innerHTML = spreadThreeTemplate
}

function drawMeaning() {
  document.getElementById("meaning").classList.add("hidden")
  document.getElementById("return").classList.remove("hidden")
  let spreadOneListElement = document.getElementById("spread-one")
  let spreadOneTemplate = ""
  let spreadTwoListElement = document.getElementById("spread-two")
  let spreadTwoTemplate = ""
  let spreadThreeListElement = document.getElementById("spread-three")
  let spreadThreeTemplate = ""
  spreadLength = spread.length
  for (let i = 0; i < spreadLength; i++) {
    let meaningSpread = {}
    switch (spreadLength) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        meaningSpread = meaning[i]
      case 7:
        meaningSpread = meaning[5]
      case 9:
        meaningSpread = meaning[6]
    }
    let infoKey = "card" + spreadLength
    let info = meaningSpread[infoKey]
    let infoPosition = spread[i].position
    if ((spreadLength <= 3) || (spreadLength == 4 && i == 0) || (spreadLength == 5 && i <= 1) || (spreadLength == 7 && i <= 1) || (spreadLength == 9 && i <= 2)) {
      spreadOneTemplate += `
    <div class="rune-card meaning-card m-1 shadow">

      <button class="title-text center mb-1 meaning-label" disabled>
        <large> ${infoPosition}</large>
      </button>

      <button class="label-text center meaning-description" disabled>
        <p> ${info} Throw in a lot of sample text that will probably emcompass several lines of code to test the card capacity </p>
      </button>
  
    </div>
  `
    } else if ((spreadLength == 4 && i <= 2) || (spreadLength == 5 && i == 2) || (spreadLength == 7 && i <= 4) || (spreadLength == 9 && i <= 5)) {
      spreadTwoTemplate += `
    <div class="rune-card meaning-card m-1 shadow">

      <button class="title-text center mb-1 meaning-label" disabled>
        <large> ${infoPosition}</large>
      </button>

      <button class="label-text center meaning-description" disabled>
        <p> ${info} Throw in a lot of sample text that will probably emcompass several lines of code to test the card capacity </p>
      </button>
  
    </div>
  `
    } else if ((spreadLength == 4 && i == 3) || (spreadLength == 5 && i <= 4) || (spreadLength == 7 && i <= 6) || (spreadLength == 9 && i <= 8)) {
      spreadThreeTemplate += `
    <div class="rune-card meaning-card m-1 shadow">

      <button class="title-text center mb-1 meaning-label" disabled>
        <large> ${infoPosition}</large>
      </button>

      <button class="label-text center meaning-description" disabled>
        <p> ${info} Throw in a lot of sample text that will probably emcompass several lines of code to test the card capacity </p>
      </button>
  
    </div>
  `
    }
    spreadOneListElement.innerHTML = spreadOneTemplate
    spreadTwoListElement.innerHTML = spreadTwoTemplate
    spreadThreeListElement.innerHTML = spreadThreeTemplate
  }
}

loadSpreads()