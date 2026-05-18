const THEMES = [
  ["dustloom", "Dustloom"],
  ["cathedral-static", "Cathedral Static"],
  ["fograndom", "FogRandom"],
  ["chaos-dust", "Chaos Dust"]
];

const FEELS = [
  ["overwhelmed", "Overwhelmed"],
  ["perfectionism", "Perfectionism"],
  ["noideas", "No Ideas"],
  ["fear", "Fear of Bad Art"],
  ["overthinking", "Overthinking"],
  ["tired", "Tired"],
  ["burnout", "Burnout"],
  ["toomany", "Too Many Ideas"]
];

const TYPES = [
  ["starter", "Starter"],
  ["object", "Object"],
  ["creature", "Creature"],
  ["character", "Character"],
  ["texture", "Texture"],
  ["symbol", "Symbol"],
  ["lettering", "Lettering"],
  ["chaos", "Chaos"]
];

const DIFFICULTY = [
  ["baby", "Baby Step"],
  ["easy", "Easy"],
  ["medium", "Medium"],
  ["cursed", "Cursed"]
];

const GOALS = [
  ["warmup", "Warm Up"],
  ["shapes", "Practice Shapes"],
  ["confidence", "Build Confidence"],
  ["loosen", "Loosen Up"],
  ["weird", "Make Something Weird"],
  ["texture", "Learn Texture"],
  ["character", "Create Character"]
];

const ENERGY = [
  ["dead", "Dead Battery"],
  ["foggy", "Foggy"],
  ["functional", "Functional"],
  ["feral", "Feral"],
  ["possessed", "Possessed"]
];

const TIME = [
  ["2", "2 Min"],
  ["5", "5 Min"],
  ["10", "10 Min"],
  ["20", "20 Min"],
  ["chaos", "Chaos"]
];

const STARTS = [
  "Draw a blob.",
  "Draw a spoon.",
  "Draw a tiny cloud.",
  "Draw a fruit.",
  "Draw a cup.",
  "Draw a rock."
];

const TWISTS = [
  "Make it sleepy.",
  "Make it haunted.",
  "Make it confused.",
  "Make it magical.",
  "Make it dramatic."
];

const LIMITS = [
  "Use only circles.",
  "Use only 3 colors.",
  "No erasing.",
  "Keep it tiny.",
  "Use one continuous line."
];

const FEELS_OUTPUT = [
  "Make it feel cozy.",
  "Make it feel nervous.",
  "Make it feel curious.",
  "Make it feel lonely.",
  "Make it feel hopeful."
];

const WORLDS = [
  "Place it inside a jar universe.",
  "Place it in a pocket dimension.",
  "Place it on a floating island.",
  "Place it in a sketchbook forest."
];

const REWARDS = [
  "Add sparkles.",
  "Add a tiny friend.",
  "Add a crown.",
  "Add a sticker."
];

const REPEATS = [
  "Draw 3 tiny versions.",
  "Draw it once badly first.",
  "Draw a dramatic version too."
];

const EVOLVES = [
  "Turn it into a mascot.",
  "Turn it into a sticker.",
  "Turn it into a logo.",
  "Turn it into a creature family."
];

const BYTEBLOOM_LINES = [
  "Tiny ugly art still counts.",
  "Perfectionism detected.",
  "Bad art is still art.",
  "You survived the blank page."
];

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function createButtons(id, items, defaultValue, callback) {

  const container = document.getElementById(id);

  if (!container) return;

  container.innerHTML = "";

  items.forEach(([value, label]) => {

    const button = document.createElement("button");

    button.textContent = label;

    button.dataset.value = value;

    if (value === defaultValue) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {

      container
        .querySelectorAll("button")
        .forEach(btn => {
          btn.classList.remove("selected");
        });

      button.classList.add("selected");

      if (callback) {
        callback(value);
      }
    });

    container.appendChild(button);
  });
}

function setTheme(theme) {
  document.body.className = `theme-${theme}`;
}

function setText(id, value) {

  const el = document.getElementById(id);

  if (el) {
    el.textContent = value;
  }
}

function generateTask() {

  setText("start-text", pickRandom(STARTS));
  setText("twist-text", pickRandom(TWISTS));
  setText("limit-text", pickRandom(LIMITS));
  setText("feel-text", pickRandom(FEELS_OUTPUT));
  setText("world-text", pickRandom(WORLDS));
  setText("reward-text", pickRandom(REWARDS));
  setText("repeat-text", pickRandom(REPEATS));
  setText("evolve-text", pickRandom(EVOLVES));
  setText("bytebloom-text", pickRandom(BYTEBLOOM_LINES));

  const output =
    document.getElementById("output-section");

  output.classList.remove("hidden");

  output.scrollIntoView({
    behavior: "smooth"
  });
}

document.addEventListener("DOMContentLoaded", () => {

  createButtons(
    "theme-options",
    THEMES,
    "dustloom",
    setTheme
  );

  createButtons(
    "feels-options",
    FEELS,
    "overwhelmed"
  );

  createButtons(
    "type-options",
    TYPES,
    "starter"
  );

  createButtons(
    "difficulty-options",
    DIFFICULTY,
    "easy"
  );

  createButtons(
    "goal-options",
    GOALS,
    "warmup"
  );

  createButtons(
    "energy-options",
    ENERGY,
    "foggy"
  );

  createButtons(
    "time-options",
    TIME,
    "5"
  );

  document
    .getElementById("generate-btn")
    .addEventListener(
      "click",
      generateTask
    );

  document
    .getElementById("another-btn")
    .addEventListener(
      "click",
      generateTask
    );
});