const TASKS = {
  overwhelmed: [
    "Draw 3 haunted spoons with personalities.",
    "Draw a creature made of blankets.",
    "Invent a sleepy artifact.",
    "Draw the world’s saddest lamp.",
    "Draw one tiny object that survived a dramatic storm.",
    "Draw a machine trying not to cry."
  ],

  perfectionism: [
    "Make the ugliest fish possible.",
    "Draw a chair badly on purpose.",
    "Design a monster using only circles.",
    "Draw with your non-dominant hand for 90 seconds.",
    "Draw something crooked and refuse to fix it.",
    "Draw an intentionally terrible self portrait."
  ],

  noideas: [
    "Draw a criminal teapot.",
    "Invent a haunted fruit.",
    "Draw the worst wizard alive.",
    "Draw a nervous toaster wearing church shoes.",
    "Invent forbidden art supplies.",
    "Draw a raccoon knight with emotional problems."
  ],

  fear: [
    "Design a saint of unfinished projects.",
    "Draw a machine that mourns.",
    "Draw a monster that looks unfinished on purpose.",
    "Make one terrible doodle and give it a noble title.",
    "Draw something embarrassing with confidence."
  ],

  overthinking: [
    "You may only use circles.",
    "Draw without lifting your pencil.",
    "Everything must lean left.",
    "Draw something in one continuous line without planning.",
    "Draw a dream trying to escape.",
    "Draw with your eyes closed for 30 seconds first."
  ],

  tired: [
    "Draw a sleepy rectangle.",
    "Draw something half-remembered.",
    "Invent a weather emotion.",
    "Draw a napping star.",
    "Draw a creature too tired to haunt properly.",
    "Draw a candle emotionally giving up."
  ],

  burnout: [
    "Draw the feeling of forgetting something important.",
    "Design a creature powered by avoidance.",
    "Draw a soft metal.",
    "Draw rust like it’s alive.",
    "Make glass look emotionally exhausted.",
    "Draw a ghost hiding inside a hoodie."
  ],

  toomany: [
    "Combine two random objects into one tiny creature.",
    "Pick the first thing you see and make it suspicious.",
    "Draw a collage monster with three textures.",
    "Draw one idea badly instead of thinking about twelve perfectly.",
    "Invent an illegal household appliance."
  ]
};

const THEMES = [
  {
    key: "dustloom",
    label: "Dustloom"
  },

  {
    key: "cathedral-static",
    label: "Cathedral Static"
  },

  {
    key: "fograndom",
    label: "FogRandom"
  },

  {
    key: "chaos-dust",
    label: "Chaos Dust"
  }
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
  const selected = document.querySelector(
    `#${containerId} button.selected`
  );

  return selected ? selected.dataset.value : fallback;
}

function generateTask() {
  const feel = getSelectedValue(
    "feels-options",
    "overwhelmed"
  );

  const pool = TASKS[feel] || TASKS.overwhelmed;

  const task =
    pool[Math.floor(Math.random() * pool.length)];

  const outputSection =
    document.getElementById("output-section");

  const taskText =
    document.getElementById("task-text");

  taskText.textContent = task;

  outputSection.classList.remove("hidden");

  outputSection.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createButtons(
    "theme-options",
    THEMES,
    "artblock-theme",
    "dustloom",
    setTheme
  );

  createButtons(
    "feels-options",
    FEELS,
    "artblock-feel",
    "overwhelmed"
  );

  createButtons(
    "energy-options",
    ENERGY,
    "artblock-energy",
    "foggy"
  );

  createButtons(
    "time-options",
    TIME,
    "artblock-time",
    "5"
  );

  const generateButton =
    document.getElementById("generate-btn");

  const anotherButton =
    document.getElementById("another-btn");

  generateButton.addEventListener(
    "click",
    generateTask
  );

  anotherButton.addEventListener(
    "click",
    generateTask
  );

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./service-worker.js")
      .catch(error => {
        console.error(
          "Service worker registration failed:",
          error
        );
      });
  }
});