const { invoke } = window.__TAURI__.tauri;

let searchInputEl;
let searchMsgEl;
let searchButtonEl;

window.addEventListener("DOMContentLoaded", () => {
  searchInputEl = document.querySelector("#search-input");
  searchMsgEl = document.querySelector("#search-msg");
  searchButtonEl = document.querySelector("#search-button");
  beginStartup();
});

async function beginStartup() {
  searchButtonEl.disabled = true;
  await invoke("startup").then(() => {
    searchInputEl.placeholder = "Search input"; 
    searchButtonEl.disabled = false;
  });
}

async function search() {
  searchtMsgEl.textContent = await invoke("search", { term: searchInputEl.value });
}

window.beginStartup = beginStartup;
window.search = search;
