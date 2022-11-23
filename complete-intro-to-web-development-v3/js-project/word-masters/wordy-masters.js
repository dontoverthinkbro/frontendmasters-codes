const ANSWER_LENGTH = 5;
const ROUNDS = 6;
const letters = document.querySelectorAll(".scoreboard-letter");
const loadingDiv = document.querySelector(".info-bar");

// I like to do an init function so I can use "await"
async function init() {
  // the state for the app
  let currentRow = 0;
  let currentGuess = "";
  let done = false;
  let isLoading = true;

  // nab the word of the day
  const res = await fetch("https://words.dev-apis.com/word-of-the-day");
  // destructuring word, pull out "word" from res and assign to wordRes
  const { word: wordRes } = await res.json();

  // another way
  // const wordRes = await res.json()
  // const word1 = wordRes["word"].toUpperCase();
  // console.log(wordRes);
  // console.log(word1);

  // /
  const word = wordRes.toUpperCase();
  const wordParts = word.split("");
  isLoading = false;
  setLoading(isLoading);

  // user adds a letter to the current guess
  function addLetter(letter) {
    if (currentGuess.length < ANSWER_LENGTH) {
      currentGuess += letter;
    } else {
      current = currentGuess.substring(0, currentGuess.length - 1) + letter;
    }
    // display letter user just input
    letters[currentRow * ANSWER_LENGTH + currentGuess.length - 1].innerText =
      letter;
  }

  // use tries to enter a guess
  async function commit() {
    if (currentGuess.length !== ANSWER_LENGTH) {
      // do nothing
      // because not enough letter for the answer
      return;
    }

    // show the spiral
    isLoading = true;
    setLoading(isLoading);

    // check the API to see if it's a valid word
    // skip this step if you're not checking for valid words
    const res = await fetch("https://words.dev-apis.com/validate-word", {
      method: "POST",
      body: JSON.stringify({ word: currentGuess }),
    });
    const { validWord } = await res.json();

    isLoading = false;
    setLoading(isLoading);

    // not valid, mark the word as invalid and return
    // if not valid word then return, not going to the currentRow++
    if (!validWord) {
      markInvalidWord();
      return;
    }
    // e.g "count" will be ["c", "o", "u", "n", "t"]
    const guessParts = currentGuess.split("");

    // count dictionary (in python)
    // wordParts is the ANSWER (UPPERCASE)
    const map = makeMap(wordParts);

    let allRight = true;

    // first pass just finds correct letters so we can mark those as
    // correct first
    // guessParts is
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      if (guessParts[i] === wordParts[i]) {
        // mark as correct, to visualize green on scoreboard
        letters[currentRow * ANSWER_LENGTH + i].classList.add("correct");
        // map is dictionary with value count of each key,
        // this mean decrease the value of that key
        map[guessParts[i]]--;
      }
    }

    // second pass finds close and wrong letters
    // we use the map to make sure we mark the correct amount of
    // close letters
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      if (guessParts[i] === wordParts[i]) {
        // do nothing
        // this will remain allRight = true
      }
      // easy to understand: if (wordParts.includes(guessParts[i]))
      else if (map[guessParts[i]] && map[wordParts[i]] > 0) {
        // mark as close
        allRight = false;
        letters[currentRow * ANSWER_LENGTH + i].classList.add("close");
        map[guessParts[i]]--;
      } else {
        // wrong
        allRight = false;
        letters[currentRow * ANSWER_LENGTH + i].classList.add("wrong");
      }
    }

    currentRow++;
    currentGuess = "";
    if (allRight) {
      // win
      loadingDiv.innerText = "You Win!";
      loadingDiv.classList.remove("hidden");
      loadingDiv.style.fontSize = "30px";
      document.querySelector(".brand").classList.add("winner");
      done = true;
    } else if (currentRow === ROUNDS) {
      // lose
      alert(`you lose, the word was ${word}`);
      done = true;
    }
  }

  // user hits backspace, if the the length of the string is 0 then do
  // nothing
  function backspace() {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
    // hide (delete) the last letter because user want to delete
    letters[currentRow * ANSWER_LENGTH + currentGuess.length].innerText = "";
  }

  // let the user know that their guess wasn't a real word
  // skip this if you're not doing guess validation
  function markInvalidWord() {
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      letters[currentRow * ANSWER_LENGTH + i].classList.add("invalid");
    }
  }

  // listening for event keys and routing to the right function
  // we listen on keydown so we can catch Enter and Backspace
  // keydown means when a key is press and release
  document.addEventListener("keydown", function handleKeyPress(event) {
    if (done || isLoading) {
      // do nothing;
      return;
    }

    const action = event.key;

    if (action === "Enter") {
      commit();
    } else if (action === "Backspace") {
      backspace();
    } else if (isLetter(action)) {
      addLetter(action.toUpperCase());
    } else {
      // do nothing
    }
  });
}

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

// show the loading spinner when needed
function setLoading(isLoading) {
  loadingDiv.classList.toggle("hidden", !isLoading);
}

// takes an array of letters (like ['E', 'L', 'I', 'T', 'E']) and creates
// an object out of it (like {E: 2, L: 1, T: 1}) so we can use that to
// make sure we get the correct amount of letters marked close instead
// of just wrong or correct
function makeMap(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    // same with dictionary in python when counting element
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }
  return obj;
}

init();
