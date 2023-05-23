/*1. Feladat: Készítsünk függvényt, amelynek bemenő paramétere egy egész szám, melyik
lottószámokat generálja ki: 5-ös, 6-os vagy 7-es (skandi). Térjen vissza 1 lehetséges hét
számaival (szám tömb)!*/
function lottoSzamGeneral(lottoTipus) {
    var hetiNyeroSzamok = [];
    if (lottoTipus == 5) {
        while (hetiNyeroSzamok.length != 5) {
            var randomszam = Math.floor(Math.random() * 90) + 1;
            if (hetiNyeroSzamok.indexOf(randomszam) == -1) {
                hetiNyeroSzamok.push(randomszam);
            }
        }
        console.log(hetiNyeroSzamok);
    }
    else if (lottoTipus == 6) {
        while (hetiNyeroSzamok.length != 6) {
            var randomszam = Math.floor(Math.random() * 45) + 1;
            if (hetiNyeroSzamok.indexOf(randomszam) == -1) {
                hetiNyeroSzamok.push(randomszam);
            }
        }
        console.log(hetiNyeroSzamok);
    }
    else if (lottoTipus == 7) {
        while (hetiNyeroSzamok.length != 7) {
            var randomszam = Math.floor(Math.random() * 35) + 1;
            if (hetiNyeroSzamok.indexOf(randomszam) == -1) {
                hetiNyeroSzamok.push(randomszam);
            }
        }
        console.log(hetiNyeroSzamok);
    }
    return hetiNyeroSzamok;
}
function lottoSzamKiir() {
    var lottoTipus = Math.floor(Math.random() * (7 - 5 + 1) + 5);
    document.getElementById("lotto").innerHTML = "A(z) " + lottoTipus + "-ös/os/es lottó nyerőszámai: " + lottoSzamGeneral(lottoTipus);
}
/*2. Feladat: Készítsünk függvényt, amelynek bemenő paramétere egy dátum, visszatérése egy
logikai típus. Vizsgálja meg, hogy hétvégére esik –e!*/
function hetvegeEldont(kerdesesDatum) {
    var hetNapja = kerdesesDatum.getDay();
    if (hetNapja == 0 || hetNapja == 6) {
        console.log("A kérdéses dátum hétvégére esik/esett");
        return true;
    }
    else {
        return false;
    }
}
function hetvegeEldontKiir() {
    var maiDatum = Date.now();
    var randomDatum = Math.floor(Math.random() * maiDatum);
    var kerdesesDatum = new Date(randomDatum);
    var hetvegeE = hetvegeEldont(kerdesesDatum);
    if (hetvegeE) {
        document.getElementById("hetvegeE").innerHTML = "A kérdéses dátum: " + kerdesesDatum + " hétvégére esik/esett!";
    }
    else {
        document.getElementById("hetvegeE").innerHTML = "A kérdéses dátum: " + kerdesesDatum + " nem hétvégére esik/esett!";
    }
}
/*3. Feladat: Készítünk függvényt, amely kiszámolja a másodfokú egyenlet megoldását a,b,c
együttható alapján*/
function masodFokuEgyenletKiszamol() {
    var eredmeny = [];
    var a = Number(prompt("Kérem adja meg 'a' értékét:"));
    var b = Number(prompt("Kérem adja meg 'b' értékét:"));
    var c = Number(prompt("Kérem adja meg 'c' értékét:"));
    var diszkriminans = Math.pow(b, 2) - 4 * a * c;
    if (diszkriminans >= 0) {
        var x1 = (-b + Math.sqrt(diszkriminans)) / (2 * a);
        var x2 = (-b - Math.sqrt(diszkriminans)) / (2 * a);
        eredmeny.push(x1, x2);
        console.log(x1, x2);
    }
    else {
        alert("A megadott számok alapján az egyenlet nem oldható meg!");
    }
    return eredmeny;
}
function masodFokuEgyenletKiir() {
    document.getElementById("masodfoku").innerHTML = "Az eredmény: " + masodFokuEgyenletKiszamol();
}
