const { JSDOM } = require("jsdom");
const fs = require("fs");

const html = fs.readFileSync("index.html", "utf-8");

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable",
  url: "file://" + __dirname + "/index.html"
});

// Capture virtual console errors
dom.window.console.error = (msg, err) => {
  console.log("JSDOM Error:", msg, err);
};

// Catch global errors
dom.window.addEventListener("error", (event) => {
  console.log("Global Error:", event.error ? event.error.stack : event.message);
});

dom.window.addEventListener("unhandledrejection", (event) => {
  console.log("Unhandled Rejection:", event.reason);
});

setTimeout(() => {
    console.log("Finished running page.");
}, 2000);
