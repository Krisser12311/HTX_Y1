function calculate() {
    const bolge = parseFloat(document.getElementById('bolge').value);
    const fran = parseFloat(document.getElementById('fran').value);
    const tiln = parseFloat(document.getElementById('tiln').value);
    const gitter = parseFloat(document.getElementById('gitter').value);
    var resArray = [];
    var bolgeNano = bolge * 10 ** -9;
    var gitterPrMeter = 1 / (gitter * 1000);
    document.getElementById('res').innerHTML = '';
    for (let i = fran; i <= tiln; i++) {
        let res = (bolgeNano * i) / (gitterPrMeter);
        res = Math.asin(res) * (180 / Math.PI);
        console.log(res);
        resArray.push(res.toFixed(2));
    }
    for (let i = 0; i < resArray.length; i++) {
        let p = document.createElement('p');
        p.innerHTML = resArray[i];
        document.getElementById('res').appendChild(p);
    }
}