cat > app.js <<'EOF'
const STARTS = [
  "Draw a blob.",
  "Draw a cup.",
  "Draw a fruit.",
  "Draw a rock.",
  "Draw a tiny house.",
  "Draw a cloud.",
  "Draw a box.",
  "Draw a simple star.",
  "Draw a sock.",
  "Draw a spoon."
];

const TWISTS = [
  "Make it sleepy.",
  "Make it confused.",
  "Make it heroic.",
  "Make it haunted.",
  "Make it shy.",
  "Make it dramatic.",
  "Make it secretly magical.",
  "Make it suspicious.",
  "Make it cozy.",
  "Make it tiny but powerful."
];

const LIMITS = {
  baby: [
    "Use only one shape.",
    "Use only 3 lines and 2 dots.",
    "No erasing.",
    "Keep it tiny.",
    "Draw it in under 2 minutes."
  ],
  easy: [
    "Use only circles and rectangles.",
    "Use only 3 colors.",
    "Add only one detail.",
    "Make the silhouette clear.",
    "Use one thick line and one thin line."
  ],
  medium: [
    "Use one soft shape and one sharp shape.",
    "Add one texture.",
    "Make one part oversized.",
    "Use contrast: cute plus cursed.",
    "Add a prop that explains it."
  ],
  cursed: [
    "Use no straight lines.",
    "Draw it with your non-dominant hand first.",
    "Make it ugly, then add one beautiful detail.",
    "Make it look found in an abandoned folder.",
    "Give it one object with a tragic backstory."
  ]
};

const FEELS_OUTPUT = [
  "Make it feel curious.",
  "Make it feel cozy.",
  "Make it feel nervous.",
  "Make it feel proud.",
  "Make it feel lonely.",
  "Make it feel excited.",
  "Make it feel confused.",
  "Make it feel peaceful.",
  "Make it feel dramatic.",
  "Make it feel like it is trying its best."
];

const WORLDS = [
  "Place it in a pocket dimension.",
  "Place it on a tiny floating island.",
  "Place it inside a jar universe.",
  "Place it on a messy art desk.",
  "Place it in a moonlit corner.",
  "Place it in a cozy cave.",
  "Place it in a forgotten arcade.",
  "Place it in a sketchbook forest.",
  "Place it under a paper moon.",
  "Place it in a room made of clouds."
];

const REWARDS = [
  "Add sparkles.",
  "Add a tiny friend.",
  "Add a charm.",
  "Add a soft glow.",
  "Add a crown.",
  "Add a sticker.",
  "Add a little star.",
  "Add a ribbon.",
  "Add a magic crumb.",
  "Add one thing that makes you smile."
];

const REPEATS = [
  "Draw 3 tiny versions.",
  "Draw it once badly, then once braver.",
  "Draw a baby version and a dramatic version.",
  "Draw it from far away and close up.",
  "Draw it happy, sad, and suspicious.",
  "Draw it in 30 seconds, then in 3 minutes.",
  "Draw it with your eyes closed first.",
  "Draw it as simple as possible twice."
];

const EVOLVES = [
  "Turn it into a character.",
  "Turn it into a sticker.",
  "Turn it into a mascot.",
  "Turn it into a tiny logo.",
  "Turn it into a pattern.",
  "Turn it into a magical item.",
  "Turn it into a home screen icon.",
  "Turn it into a creature family.",
  "Turn it into a whole little world.",
  "Turn it into tomorrow’s next drawing."
];

const BYTEBLOOM_LINES = [
  "Bad art is just art wearing pajamas.",
  "Tiny ugly art still counts.",
  "Perfectionism detected. Deploying suspicious spoon.",
  "Your brain is fog soup. We proceed anyway.",
  "Make it messy. The paper can handle it.",
  "You do not need permission to draw.",
  "Even haunted sketches deserve love.",
  "A tiny start is still a spell.",
  "The first version is allowed to be weird.",
  "Draw it badly. That is the door."
];

const THEMES = [
  ["dustloom", "Dustloom"],
  ["cathedral-static", "Cathedral Static"],
  ["fograndom", "FogRandom"],
  ["chaos-dust", "Chaos Dust"]
];

const FEELS = [
  ["overwhelmed", "overwhelmed"],
  ["perfectionism", "perfectionism"],
  ["noideas", "no ideas"],
  ["fear", "fear of bad art"],
  ["overthinking", "overthinking"],
  ["tired", "tired"],
  ["burnout", "burnout"],
  ["toomany", "too many ideas"]
];

const TYPES = [
  ["starter", "starter"],
  ["object", "object"],
  ["creature", "creature"],
  ["character", "character"],
  ["texture", "texture"],
  ["symbol", "symbol"],
  ["lettering", "lettering"],
  ["chaos", "chaos"]
];

const DIFFICULTY = [
  ["baby", "baby step"],
  ["easy", "easy"],
  ["medium", "medium"],
  ["cursed", "cursed"]
];

const GOALS = [
  ["warmup", "warm up"],
  ["shapes", "practice shapes"],
  ["confidence", "build confidence"],
  ["loosen", "loosen up"],
  ["weird", "make something weird"],
  ["texture", "learn texture"],
  ["character", "create a character"]
];

const ENERGY = [
  ["dead", "dead battery"],
  ["foggy", "foggy"],
  ["functional", "functional"],
  ["feral", "feral"],
  ["possessed", "possessed"]
];

const TIME = [
  ["2", "2 min"],
  ["5", "5 min"],
  ["10", "10 min"],
  ["20", "20 min"],
  ["chaos", "chaos"]
];

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function createButtons(containerId, items, storageKey, defaultValue, callback) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const saved = localStorage.getItem(storageKey) || defaultValue;
  container.innerHTML = "";

  items.forEach(([value, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.dataset.value = value;

    if (value === saved) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      container.querySelectorAll("button").forEach(btn => {
        btn.classList.remove("selected");
      });

      button.classList.add("selected");
      localStorage.setItem(storageKey, value);

      if (callback) callback(value);
    });

    container.appendChild(button);
  });

  if (callback) callback(saved);
}

function setTheme(themeKey) {
  document.body.className = `theme-${themeKey}`;

  const metaTheme = document.querySelector('meta[name="theme-color"]');

  if (metaTheme) {
    const accent = getComputedStyle(document.body)
      .getPropertyValue("--accent")
      .trim();

    metaTheme.setAttribute("content", accent || "#B3988A");
  }
}

function getSelectedValue(containerId, fallback) {
  const selected = document.querySelector(`#${containerId} button.selected`);
  return selected ? selected.dataset.value : fallback;
}

function setText(id, text) {
  const element = document.getElementById(id);
  if (element) element.textContent = text;
}

function generateTask() {
  const difficulty = getSelectedValue("difficulty-options", "easy");

  setText("start-text", pickRandom(STARTS));
  setText("twist-text", pickRandom(TWISTS));
  setText("limit-text", pickRandom(LIMITS[difficulty] || LIMITS.easy));
  setText("feel-text", pickRandom(FEELS_OUTPUT));
  setText("world-text", pickRandom(WORLDS));
  setText("reward-text", pickRandom(REWARDS));
  setText("repeat-text", pickRandom(REPEATS));
  setText("evolve-text", pickRandom(EVOLVES));
  setText("bytebloom-text", pickRandom(BYTEBLOOM_LINES));

  const outputSection = document.getElementById("output-section");

  if (outputSection) {
    outputSection.classList.remove("hidden");

    outputSection.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createButtons("theme-options", THEMES, "artblock-theme", "dustloom", setTheme);
  createButtons("feels-options", FEELS, "artblock-feel", "overwhelmed");
  createButtons("type-options", TYPES, "artblock-type", "starter");
  createButtons("difficulty-options", DIFFICULTY, "artblock-difficulty", "easy");
  createButtons("goal-options", GOALS, "artblock-goal", "weird");
  createButtons("energy-options", ENERGY, "artblock-energy", "foggy");
  createButtons("time-options", TIME, "artblock-time", "5");

  const generateButton = document.getElementById("generate-btn");
  const anotherButton = document.getElementById("another-btn");

  if (generateButton) {
    generateButton.addEventListener("click", generateTask);
  }

  if (anotherButton) {
    anotherButton.addEventListener("click", generateTask);
  }

  const params = new URLSearchParams(window.location.search);
  if (params.get("action") === "generate") {
    generateTask();
  }
});
EOF