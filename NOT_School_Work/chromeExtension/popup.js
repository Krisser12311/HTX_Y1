// the courses that are in the popup
const danish = document.getElementById('danish');
const programing = document.getElementById('programing');
const math = document.getElementById('math');
const english = document.getElementById('english');
const teknologi = document.getElementById('teknologi');
const fys = document.getElementById('fysik');
const samfundsfag = document.getElementById("samf") 

// links to the courses
let linkDanish = "https://moodle.rybners.dk/course/view.php?id=9835"
let linkMath = "https://moodle.rybners.dk/course/view.php?id=9626"
let linkPrograming = "https://moodle.rybners.dk/course/view.php?id=9627"
let linkFysik = "https://moodle.rybners.dk/course/view.php?id=9837"
let linkEnglish = "https://moodle.rybners.dk/course/view.php?id=9836"
let linkSamfundsfag = "https://moodle.rybners.dk/course/view.php?id=9839"
let linkTeknologi = "https://365rybners.sharepoint.com/:o:/r/sites/TeknologiB-22-HX22c/_layouts/15/Doc.aspx?sourcedoc=%7BD258A5B6-D934-4C33-A3A7-6EB7803288DF%7D&file=Teknologi%20B%20-%2022-HX22c-notesbogen&action=edit&mobileredirect=true&wdorigin=701&RootFolder=%2Fsites%2FTeknologiB-22-HX22c%2FSiteAssets%2FTeknologi%20B%20-%2022-HX22c-notesbogen&wdo=6"

danish.addEventListener('click', () => {
    console.log("Danish");
    // open new tab
    chrome.tabs.create({url: linkDanish});
});

programing.addEventListener('click', () => {
    console.log("Programing");
    // open new tab
    chrome.tabs.create({url: linkPrograming});
});

math.addEventListener('click', () => {
    console.log("Math");
    // open new tab
    chrome.tabs.create({url: linkMath});
});

english.addEventListener('click', () => {
    console.log("English");
    // open new tab
    chrome.tabs.create({url: linkEnglish});
});

teknologi.addEventListener('click', () => {
    console.log("Teknologi");
    // open new tab
    chrome.tabs.create({url: linkTeknologi});
});

fys.addEventListener('click', () => {
    console.log("Programing");
    // open new tab
    chrome.tabs.create({url: linkFysik});
});

samfundsfag.addEventListener('click', () => {
    console.log("Programing");
    // open new tab
    chrome.tabs.create({url: linkSamfundsfag});
});
