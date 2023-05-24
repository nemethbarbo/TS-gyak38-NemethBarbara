/*1. Feladat: Készítsünk függvényt, amelynek bemenő paramétere egy egész szám, melyik 
lottószámokat generálja ki: 5-ös, 6-os vagy 7-es (skandi). Térjen vissza 1 lehetséges hét 
számaival (szám tömb)!*/

function lottoSzamGeneral(lottoTipus:number) :Array<number> {
    let hetiNyeroSzamok: Array<number> = [];
    if (lottoTipus == 5){
        while (hetiNyeroSzamok.length != 5) {
            let randomszam: number = Math.floor(Math.random() * 90) + 1;
            if (hetiNyeroSzamok.indexOf(randomszam) == -1) {
                hetiNyeroSzamok.push(randomszam);
            }
        }
        console.log(hetiNyeroSzamok);
    } else if (lottoTipus == 6){
        while (hetiNyeroSzamok.length != 6) {
            let randomszam: number = Math.floor(Math.random() * 45) + 1;
            if (hetiNyeroSzamok.indexOf(randomszam) == -1) {
                hetiNyeroSzamok.push(randomszam);
            }
        }
        console.log(hetiNyeroSzamok);
    } else if (lottoTipus == 7){
        while (hetiNyeroSzamok.length != 7) {
            let randomszam: number = Math.floor(Math.random() * 35) + 1;
            if (hetiNyeroSzamok.indexOf(randomszam) == -1) {
                hetiNyeroSzamok.push(randomszam);
            }
        }
        console.log(hetiNyeroSzamok);
    }
    return hetiNyeroSzamok;
}

function lottoSzamKiir():void{
    let lottoTipus:number = Math.floor(Math.random()*(7-5+1)+5);
    document.getElementById("lotto")!.innerHTML = "A(z) "+lottoTipus+"-ös/os/es lottó nyerőszámai: "+lottoSzamGeneral(lottoTipus);
}


/*2. Feladat: Készítsünk függvényt, amelynek bemenő paramétere egy dátum, visszatérése egy 
logikai típus. Vizsgálja meg, hogy hétvégére esik –e!*/
function hetvegeEldont(kerdesesDatum:Date):boolean{
    let hetNapja = kerdesesDatum.getDay();
    if (hetNapja == 0 || hetNapja == 6){
        console.log("A kérdéses dátum hétvégére esik/esett");
        return true;
    } else {
        return false;
    }
}

function hetvegeEldontKiir(){
    let maiDatum = Date.now();
    let randomDatum = Math.floor(Math.random() * maiDatum);
    let kerdesesDatum = new Date(randomDatum);
    let hetvegeE:boolean = hetvegeEldont(kerdesesDatum);
    if (hetvegeE){
        document.getElementById("hetvegeE")!.innerHTML = "A kérdéses dátum: "+kerdesesDatum+ " hétvégére esik/esett!";
    } else {
        document.getElementById("hetvegeE")!.innerHTML = "A kérdéses dátum: "+kerdesesDatum+ " nem hétvégére esik/esett!";
    }
}


/*3. Feladat: Készítünk függvényt, amely kiszámolja a másodfokú egyenlet megoldását a,b,c 
együttható alapján*/

function masodFokuEgyenletKiszamol():Array<number> {
    let eredmeny: Array<number> = [];
    let a:number = Number(prompt("Kérem adja meg 'a' értékét:"));
    let b:number = Number(prompt("Kérem adja meg 'b' értékét:"));
    let c:number = Number(prompt("Kérem adja meg 'c' értékét:"));
    let diszkriminans: number = Math.pow(b,2) - 4*a*c;
    if (diszkriminans >=0 && a != 0) {
        let x1 = (-b + Math.sqrt(diszkriminans)) / (2*a);
        let x2 = (-b - Math.sqrt(diszkriminans)) / (2*a);
        eredmeny.push(x1, x2);
        console.log(x1, x2);
    } else {
        alert("A megadott számok alapján az egyenlet nem oldható meg!");
    }
    return eredmeny;
}

function masodFokuEgyenletKiir():void{
    document.getElementById("masodfoku")!.innerHTML = "Az eredmény: "+masodFokuEgyenletKiszamol();
}