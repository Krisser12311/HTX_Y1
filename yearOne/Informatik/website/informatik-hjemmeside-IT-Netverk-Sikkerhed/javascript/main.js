const openHardware = document.getElementById('hardware');
const hardwareSign = document.getElementById('hardware-vertical');
const hardwereText = document.getElementById('hardware-text');

const openNetwork = document.getElementById('network');
const networkSign = document.getElementById('network-vertical');
const networkText = document.getElementById('network-text');

const openKryptering = document.getElementById('kryptering');
const krypteringSign = document.getElementById('kryptering-vertical');
const krypteringText = document.getElementById('kryptering-text');

const openITsikkerhed = document.getElementById('itSecurity');
const ITsikkerhedSign = document.getElementById('itSecurity-vertical');
const ITsikkerhedText = document.getElementById('itSecurity-text');

const openAPIVulnerabilities = document.getElementById("APIVulnerabilities");
const APIVulnerabilitiesSign = document.getElementById("APIVulnerabilities-vertical")
const APIVulnerabilitiesText = document.getElementById("APIVulnerabilities-text")

// State of the box
var hardwereCurrentState = false;
var networkCurrentState = false;
var krypteringCurrentState = false;
var APIVulnerabilitiesState = false;
var ITsikkerhedState = false;

function expandBox(GOTO, boxID) {
    if (GOTO === 'open') {
        if (boxID === 'hardware') {
            console.log('hardware');
            hardwareSign.style.display = 'none';
            hardwereText.style.display = 'block';
        } else if (boxID === 'netværk') {
            networkSign.style.display = 'none';
            networkText.style.display = 'block';
            console.log('Netværk');
        } else if (boxID === 'kryptering') {
            console.log('Kryptering');
            krypteringSign.style.display = 'none';
            krypteringText.style.display = 'block'
        } else if (boxID === 'itSecurity') {
            console.log('IT-Sikkerhed');
            ITsikkerhedSign.style.display = 'none';
            ITsikkerhedText.style.display = 'block';
        } else if (boxID === 'APIVulnerabilities') {
            console.log('API-sårbarheder');
            APIVulnerabilitiesSign.style.display = 'none';
            APIVulnerabilitiesText.style.display = 'block';
        } else {
            console.log('Error');
        }
    } else if (GOTO === 'close') {
        if (boxID === 'hardware') {
            console.log('hardware');
            hardwareSign.style.display = 'block';
            hardwereText.style.display = 'none';

        } else if (boxID === 'netværk') {
            networkSign.style.display = 'block';
            networkText.style.display = 'none';
            console.log('Netværk');
            
        } else if (boxID === 'kryptering') {
            console.log('Kryptering');
            krypteringSign.style.display = 'block';
            krypteringText.style.display = 'none';
            
        } else if (boxID === 'itSecurity') {
            console.log('IT-Sikkerhed');
            ITsikkerhedSign.style.display = 'block';
            ITsikkerhedText.style.display = 'none';
        } else if (boxID === 'APIVulnerabilities') {
            console.log('API-sårbarheder');
            APIVulnerabilitiesSign.style.display = 'block';
            APIVulnerabilitiesText.style.display = 'none'
        } else {
            console.log('Error');
        }
    } else {
        console.log('Error');
    }
}

openHardware.addEventListener('click', function() {    
    if (hardwereCurrentState === false) {
        console.log('openHardware');
        hardwereCurrentState = true;
        expandBox('open', 'hardware');
    } else if (hardwereCurrentState === true) {
        console.log('closeHardware');
        hardwereCurrentState = false;
        expandBox('close', 'hardware');
    } else {
        console.log('Error');
    }
});

openNetwork.addEventListener('click', function() {
    console.log('openNetwork');
    if (networkCurrentState === false) {
        console.log('openNetwork');
        networkCurrentState = true;
        expandBox('open', 'netværk');
    } else if (networkCurrentState === true) {
        console.log('closeNetwork');
        networkCurrentState = false;
        expandBox('close', 'netværk');
    } else {
        console.log('Error');
    }
});

openKryptering.addEventListener('click', function() {
    console.log('openKryptering');
    if (krypteringCurrentState === false) {
        console.log('openKryptering');
        krypteringCurrentState = true;
        expandBox('open', 'kryptering');
    } else if (krypteringCurrentState === true) {
        console.log('closeKryptering');
        krypteringCurrentState = false;
        expandBox('close', 'kryptering');
    } else {
        console.log('Error');
    }
});

openITsikkerhed.addEventListener('click', function() {
    console.log('openITsikkerhed');
    if (ITsikkerhedState === false) {
        console.log('openITsikkerhed');
        ITsikkerhedState = true;
        expandBox('open', 'itSecurity');
    } else if (ITsikkerhedState === true) {
        console.log('closeITsikkerhed');
        ITsikkerhedState = false;
        expandBox('close', 'itSecurity');
    } else {
        console.log('Error');
    }
});

openAPIVulnerabilities.addEventListener('click', function() {
    console.log('openAPIVulnerabilities');
    if (APIVulnerabilitiesState === false) {
        console.log('openAPIVulnerabilities');
        APIVulnerabilitiesState = true;
        expandBox('open', 'APIVulnerabilities');
    } else if (APIVulnerabilitiesState === true) {
        console.log('closeAPIVulnerabilities');
        APIVulnerabilitiesState = false;
        expandBox('close', 'APIVulnerabilities');
    } else {
        console.log('Error')
    }
});

