

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

let rune = {}

let spread = []

let idArray = []

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
  for (let i = 0; i < localStorage.length; i++) {
    saveData.push(window.localStorage.key(i))
  }
  let saveDataListElement = document.getElementById("saved-readings")
  let saveDataTemplate = ""
  saveData.forEach(draw => {
    let drawIndex = saveData.indexOf(draw)
    saveDataTemplate += `
      <a onClick= loadSave("${saveData[drawIndex]}")> ${saveData[drawIndex]} </a>
    `
  })
  saveDataListElement.innerHTML = saveDataTemplate
}

function loadSave(string) {
  spread = JSON.parse(window.localStorage.getItem(string))
  drawSpread()
  console.log(string)
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

function runePosition(_number) {
  let spreadName = ""
  if (_number == 1) {
    spreadName = "Single Rune Reading"
    spread[0].position = "Daily Draw"
  } else if (_number == 2) {
    spreadName = "Two Rune Reading"
    spread[0].position = "Circumstances"
    spread[1].position = "Outcome"
  } else if (_number == 3) {
    spreadName = "Three Rune Reading"
    spread[0].position = "Past"
    spread[1].position = "Present"
    spread[2].position = "Future"
  } else if (_number == 4) {
    spreadName = "Four Rune Reading"
    spread[0].position = "Placeholder"
    spread[1].position = "Placeholder"
    spread[2].position = "Placeholder"
    spread[3].position = "Placeholder"
  } else if (_number == 5) {
    spreadName = "Five Rune Reading"
    spread[0].position = "Placeholder"
    spread[1].position = "Placeholder"
    spread[2].position = "Placeholder"
    spread[3].position = "Placeholder"
    spread[4].position = "Placeholder"
  } else if (_number == 7) {
    spreadName = "Seven Rune Reading"
    spread[0].position = "Placeholder"
    spread[1].position = "Placeholder"
    spread[2].position = "Placeholder"
    spread[3].position = "Placeholder"
    spread[4].position = "Placeholder"
    spread[5].position = "Placeholder"
    spread[6].position = "Placeholder"
  } else if (_number == 9) {
    spreadName = "Nine Rune Reading"
    spread[0].position = "Placeholder"
    spread[1].position = "Placeholder"
    spread[2].position = "Placeholder"
    spread[3].position = "Placeholder"
    spread[4].position = "Placeholder"
    spread[5].position = "Placeholder"
    spread[6].position = "Placeholder"
    spread[7].position = "Placeholder"
    spread[8].position = "Placeholder"
  }
  document.getElementById("spread-name").innerText = spreadName
}

function getStarted() {
  document.getElementById("save-button").classList.remove("hidden")
  document.getElementById("welcome").classList.add("hidden")
  document.getElementById("load-readings").classList.add("hidden")
}

function generateSpread(_number) {
  spread = []
  let spreadName = ""
  randomIdArray(_number)
  for (let i = 0; i < _number; i++) {
    spread[i] = {
      reading: spreadName,
      murk: "false",
      position: "",
      id: futhark[idArray[i]].id,
      name: futhark[idArray[i]].name,
      upright: futhark[idArray[i]].upright,
      murkstave: futhark[idArray[i]].murkstave
    }
    if (Math.floor(Math.random() * 10) >= 6.66) {
      spread[i].murk = "true"
    }
  }
  runePosition(_number)
  drawSpread()
}

function drawSpread() {
  getStarted()
  let spreadListElement = document.getElementById("spread")
  let spreadTemplate = ""
  let length = spread.length
  for (let i = 0; i < length; i++) {
    let rune = spread[i]
    let runeCard = 'rune-card-upright'
    let labelColor = 'label-upright'
    let glow = 'upright'
    let hide = 'hidden'
    let show = ''
    if (rune.murk == "true" && rune.name != "Wyrd") {
      runeCard = 'rune-card-inverted'
      labelColor = 'label-inverted'
      glow = 'inverted'
      hide = 'text-danger'
      show = 'hidden'
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
        <p class = ${show}> ${rune.upright} Throw in a lot of sample text that will probably emcompass several lines of code to test the card capacity </p>
        <p class = ${hide}> ${rune.murkstave} Throw in a lot of sample text that will probably emcompass several lines of code to test the card capacity </p>
      </button>
    </div>
  `

  }
  spreadListElement.innerHTML = spreadTemplate
}



loadSpreads()