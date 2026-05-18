const TASKS = {
  creature: [
    "Draw a blanket goblin that collects tiny fears.",
    "Draw a moth-dragon with paintbrush antennae.",
    "Draw a shy monster made of crumpled paper.",
    "Draw a sleepy swamp creature wearing a crown.",
    "Draw a nervous toaster gremlin.",
    "Draw a tiny ghost hiding inside a hoodie."
  ],

  object: [
    "Draw a criminal teapot.",
    "Draw the world’s saddest lamp.",
    "Draw a chair that lies.",
    "Draw a haunted spoon with social anxiety.",
    "Draw a mirror that refuses to reflect correctly.",
    "Draw an illegal household appliance."
  ],

  character: [
    "Draw the worst wizard alive.",
    "Draw a saint of unfinished projects.",
    "Draw a tired villain who just wants snacks.",
    "Draw a knight made of sticky notes.",
    "Draw a librarian from a haunted arcade.",
    "Draw a tiny hero with one dramatic problem."
  ],

  texture: [
    "Draw rust like it is alive.",
    "Draw glass that looks emotionally exhausted.",
    "Draw a soft metal.",
    "Draw fog made of pencil dust.",
    "Draw velvet pretending to be stone.",
    "Draw paper that survived a thunderstorm."
  ],

  environment: [
    "Draw a tiny room where ideas go to nap.",
    "Draw a swamp library at midnight.",
    "Draw a cozy cave for abandoned sketches.",
    "Draw an art desk after a magical disaster.",
    "Draw a cloud city made of erasers.",
    "Draw a moonlit alley for lost pencils."
  ],

  symbol: [
    "Draw a broken halo with tape on it.",
    "Draw a star that forgot how to shine.",
    "Draw a sigil for starting badly.",
    "Draw a tiny crown for an ugly doodle.",
    "Draw a symbol that means ‘try anyway.’",
    "Draw a sacred stamp for messy art."
  ],

  lettering: [
    "Draw the word STATIC like it is melting.",
    "Draw the word BLOOM like it is growing teeth.",
    "Draw the word NOPE as a fancy logo.",
    "Draw the word DUST in soft haunted letters.",
    "Draw the word CHAOS with one elegant detail.",
    "Draw the word START as if it is nervous."
  ],

  palette: [
    "Make a color palette for a sleepy thunderstorm.",
    "Make a color palette for haunted cotton candy.",
    "Make a color palette for moonlit clay.",
    "Make a color palette for a broken arcade angel.",
    "Make a color palette for soft apocalypse.",
    "Make a color palette for cathedral dust."
  ],

  chaos: [
    "Draw a cowboy lasagna dragon.",
    "Draw a haunted fruit with legal problems.",
    "Draw a wizard made of soup.",
    "Draw a fish that owns a suspicious business.",
    "Draw a teacup committing tax fraud.",
    "Draw a tiny monster allergic to drama."
  ]
};

const RULES = {
  baby: [
    "Use only one simple shape.",
    "Use only 3 lines and 2 dots.",
    "Draw it in under 2 minutes.",
    "No erasing allowed.",
    "Make it tiny enough to fit in a corner."
  ],

  easy: [
    "Use only circles and rectangles.",
    "Add one weird detail.",
    "Use only 3 colors.",
    "Make the silhouette readable.",
    "Give it one clear emotion."
  ],

  medium: [
    "Combine one soft shape and one sharp shape.",
    "Add a texture pattern somewhere.",
    "Give it a prop that explains its personality.",
    "Use contrast: cute plus cursed.",
    "Make one part oversized."
  ],

  cursed: [
    "Draw it with your non-dominant hand first.",
    "Make it intentionally ugly, then add one beautiful detail.",
    "Use no straight lines.",
    "Give it a tragic backstory through one object.",
    "Make it look like it was found in an abandoned folder."
  ]
};

const BONUSES = {
  warmup: [
    "Do three tiny versions before choosing one.",
    "Shake out your hand and make the first line messy on purpose.",
    "Draw it once badly, then once slightly better.",
    "Use this as a warm-up, not a masterpiece."
  ],

  shapes: [
    "Break it into circles, squares, triangles, and blobs.",
    "Draw the silhouette first.",
    "Make the big shapes clear before details.",
    "Use one chunky shape and one skinny shape."
  ],

  confidence: [
    "Give the drawing a title like it belongs in a museum.",
    "Circle the part you like most when finished.",
    "Do not apologize to the paper.",
    "Let one mistake become a feature."
  ],

  loosen: [
    "Keep your lines loose and imperfect.",
    "Draw fast enough that perfection cannot catch you.",
    "Leave one edge unfinished.",
    "Use scribbles as texture."
  ],

  weird: [
    "Add one object that makes no sense.",
    "Make it 20% more dramatic.",
    "Add a tiny emotional problem.",
    "Give it a secret job."
  ],

  texture: [
    "Add dots, scratches, cracks, grain, or smudges.",
    "Make one surface feel touchable.",
    "Use pressure changes to create texture.",
    "Add one area of roughness and one area of softness."
  ],

  character: [
    "Give it a pose that reveals its mood.",
    "Add eyebrows. They carry the drama.",
    "Give it one accessory that tells a story.",
    "Make the eyes do most of the acting."
  ]
};

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
  ["creature", "creature"],
  ["object", "object"],
  ["character", "character"],
  ["texture", "texture"],
  ["environment", "environment"],
  ["symbol", "symbol"],
  ["lettering", "lettering"],
  ["palette", "color palette"],
  ["chaos", "chaos challenge"]
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

function createButtons(containerId, items, storageKey, defaultValue, callback) {
  const container = document.getElementById(containerId);
  const saved = localStorage.getItem(storageKey) || defaultValue;

  container.innerHTML = "";

  items.forEach(item => {
    const value = Array.isArray(item) ? item[0] : item.key;
    const label = Array.isArray(item) ? item[1] : item.label;

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

      if (callback) {
        callback(value);
      }
    });

    container.appendChild(button);
  });

  if (callback) {
    callback(saved);
  }
}

function setTheme(themeKey) {
  document.body.className = `theme-${themeKey}`;

  const metaTheme = document.querySelector('meta[name="theme-color"]');

  if (metaTheme) {
    const accent = getComputedStyle(document.body)
      .getPropertyValue("--accent")
      .trim();

    metaTheme.setAttribute("content", accent);
  }
}

function getSelectedValue(containerId, fallback) {
  const selected = document.querySelector(`#${containerId} button.selected`);
  return selected ? selected.dataset.value : fallback;
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function generateTask() {
  const type = getSelectedValue("type-options", "creature");
  const difficulty = getSelectedValue("difficulty-options", "easy");
  const goal = getSelectedValue("goal-options", "weird");

  const task = pickRandom(TASKS[type] || TASKS.creature);
  const rule = pickRandom(RULES[difficulty] || RULES.easy);
  const bonus = pickRandom(BONUSES[goal] || BONUSES.weird);
  const bytebloom = pickRandom(BYTEBLOOM_LINES);

  document.getElementById("task-text").textContent = task;
  document.getElementById("rule-text").textContent = rule;
  document.getElementById("bonus-text").textContent = bonus;
  document.getElementById("bytebloom-text").textContent = bytebloom;

  const outputSection = document.getElementById("output-section");
  outputSection.classList.remove("hidden");

  outputSection.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createButtons("theme-options", THEMES, "artblock-theme", "dustloom", setTheme);
  createButtons("feels-options", FEELS, "artblock-feel", "overwhelmed");
  createButtons("type-options", TYPES, "artblock-type", "creature");
  createButtons("difficulty-options", DIFFICULTY, "artblock-difficulty", "easy");
  createButtons("goal-options", GOALS, "artblock-goal", "weird");
  createButtons("energy-options", ENERGY, "artblock-energy", "foggy");
  createButtons("time-options", TIME, "artblock-time", "5");

  document.getElementById("generate-btn").addEventListener("click", generateTask);
  document.getElementById("another-btn").addEventListener("click", generateTask);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./service-worker.js")
      .catch(error => {
        console.error("Service worker registration failed:", error);
      });
  }
});