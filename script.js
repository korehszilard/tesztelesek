//Alprogramok
function KetSzamOsszege(szam1, szam2) {
    return szam1 + szam2;
}

function NegyzetKerulet(aOldal) {
    return aOldal * 4;
}

function Negyzet(szam) {
    return szam * szam;
}

function KorKerulet(r) {
    return 2 * r * 3.14;
}

//Alprogramokhoz tartozo UNIT (egyseg) tesztek
function KetSzamOsszegeTeszt1() {
    if (KetSzamOsszege(4, 3) == 7) {
        return true;    //elfogadva
    }
    else {
        return false;   //javitasra szorul
    }
}

function KetSzamOsszegeTeszt2(bemeneti1, bemeneti2, elvartKimenet1) {
    if (KetSzamOsszege(bemeneti1, bemeneti2) == elvartKimenet1) {
        return true;
    }
    else {
        return false;
    }
}

function NegyzetKeruletTeszt1(bemenet, kimenet) {
    return NegyzetKerulet(bemenet) == kimenet;
}

function NegyzetTeszt1(bemenet, kimenet) {
    return Negyzet(bemenet) == kimenet;
}

function KorKeruletTesz1(bemenet, kimenet) {
    return KorKerulet(bemenet) == kimenet;
}

function TrKeszito(fuggveny, bemenet, kimenet, eredmeny){
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.appendChild(document.createTextNode(fuggveny));
    td2.appendChild(document.createTextNode(bemenet));
    td3.appendChild(document.createTextNode(kimenet));
    td4.appendChild(document.createTextNode(eredmeny));

    if(eredmeny == false){
        td4.setAttribute("style", "color: red; font-weight: bold;");
    }

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById("torzs").appendChild(tr);
}

//Tesztfuggvenyek meghivasa
//console.log("KetSzamOsszege tesztelese:");

TrKeszito("KetSzamOsszegeTeszt1", [5, 2], 7, KetSzamOsszegeTeszt2(5, 2, 7));
TrKeszito("KetSzamOsszegeTeszt1", [-5, 3], -2, KetSzamOsszegeTeszt2(-5, 3, -2));
TrKeszito("KetSzamOsszegeTeszt1", [0, 0], 0, KetSzamOsszegeTeszt2(0, 0, 0));
TrKeszito("KetSzamOsszegeTeszt1", [0.5, -0.6], -0.1, KetSzamOsszegeTeszt2(0.5, -0.6, -0.1));
TrKeszito("KetSzamOsszegeTeszt1", [10, -3.6], 6.4, KetSzamOsszegeTeszt2(10, -3.6, 6.4));

/*console.log(KetSzamOsszegeTeszt1());  //Teszteset
console.log(KetSzamOsszegeTeszt2(5, 2, 7));  //Teszteset
console.log(KetSzamOsszegeTeszt2(-5, 3, -2));  //Teszteset
console.log(KetSzamOsszegeTeszt2(0, 0, 0));  //Teszteset
console.log(KetSzamOsszegeTeszt2(0.5, -0.6, -0.1));  //Teszteset
console.log(KetSzamOsszegeTeszt2(10, -3.6, 6.4));  //Teszteset*/

//console.log("");
//console.log("NegyzetKerulet tesztelese:");

TrKeszito("NegyzetKeruletTeszt1", 4, 16, NegyzetKeruletTeszt1(4, 16));
TrKeszito("NegyzetKeruletTeszt1", 5, 20, NegyzetKeruletTeszt1(5, 20));
TrKeszito("NegyzetKeruletTeszt1", 0, 0, NegyzetKeruletTeszt1(0, 0));
TrKeszito("NegyzetKeruletTeszt1", 0.5, 2, NegyzetKeruletTeszt1(0.5, 2));
TrKeszito("NegyzetKeruletTeszt1", -2, -8, NegyzetKeruletTeszt1(-2, -8));

/*console.log(NegyzetKeruletTeszt1(4, 16));
console.log(NegyzetKeruletTeszt1(5, 20));
console.log(NegyzetKeruletTeszt1(0, 0));
console.log(NegyzetKeruletTeszt1(0.5, 2));
console.log(NegyzetKeruletTeszt1(-2, -8));*/

//console.log("");
//console.log("Negyzet tesztelese:");

TrKeszito("NegyzetTeszt1", 4, 16, NegyzetTeszt1(4, 16));
TrKeszito("NegyzetTeszt1", 3, 9, NegyzetTeszt1(3, 9));
TrKeszito("NegyzetTeszt1", 0, 0, NegyzetTeszt1(0, 0));
TrKeszito("NegyzetTeszt1", -2, 4, NegyzetTeszt1(-2, 4));
TrKeszito("NegyzetTeszt1", 0.5, 0.25, NegyzetTeszt1(0.5, 0.25));

/*console.log(NegyzetTeszt1(4, 16));
console.log(NegyzetTeszt1(3, 9));
console.log(NegyzetTeszt1(0, 0));
console.log(NegyzetTeszt1(-2, 4));
console.log(NegyzetTeszt1(0.5, 0.25));*/

//console.log("");
//console.log("KorKerulet tesztelese:");

TrKeszito("KorKeruletTesz1", 4, 25.12, KorKeruletTesz1(4, 25.12));
TrKeszito("KorKeruletTesz1", 3, 18.84, KorKeruletTesz1(3, 18.84));
TrKeszito("KorKeruletTesz1", 0.5, 3.14, KorKeruletTesz1(0.5, 3.14));
TrKeszito("KorKeruletTesz1", 0, 0, KorKeruletTesz1(0, 0));

/*console.log(KorKeruletTesz1(4, 25.12));
console.log(KorKeruletTesz1(3, 18.84));
console.log(KorKeruletTesz1(0.5, 3.14));
console.log(KorKeruletTesz1(0, 0));*/