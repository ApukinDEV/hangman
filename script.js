// wordlist = [Absolwent,
//     Akumulator,
//     Architekt,
//     Astronauta,
//     Baloniarz,
//     Biblioteka,
//     Biżuteria,
//     Bocianisko,
//     Brokatowy,
//     Chorągiew,
//     Ciekawostka,
//     Cukiernia,
//     Dekoracja,
//     Długopis,
//     Dżunglowy,
//     Egzotyka,
//     Ekranizacja,
//     Elektryka,
//     Fajerwerki,
//     Falowanie,
//     Farmaceuta,
//     Filarmonia,
//     Flamingowy,
//     Fotografik,
//     Futbolowy,
//     Gitarzysta,
//     Gorzelnia,
//     Grafomaniak,
//     Grzeczność,
//     Harmonijka,
//     Helikopter,
//     Hipopotam,
//     Historiografia,
//     Hodowla,
//     Ilustracja,
//     Informatyk,
//     Intelekt,
//     Jabłoniowy,
//     Jagodowy,
//     Kakadu,
//     Kalendarz,
//     Kaligrafia,
//     Kampania,
//     Kapsułka,
//     Karawana,
//     Kardiolog,
//     Katalog,
//     Kierowca,
//     Kinematografia,
//     Klasyczność,
//     Klimatyzacja,
//     Klonowanie,
//     Kolekcjoner,
//     Komedia,
//     Komputer,
//     Konduktor,
//     Konsultant,
//     Kontroler,
//     Kooperacja,
//     Korepetytor,
//     Kostiumowy,
//     Kredytowy,
//     Krystaliczny,
//     Książęcy,
//     Kulturowy,
//     Kwadratowy,
//     Lalkarz,
//     Lamparty,
//     Lekarstwo,
//     Leksykon,
//     Literatura,
//     Lodowisko,
//     Lotnisko,
//     Magazynier,
//     Makaronowy,
//     Malinowy,
//     Management,
//     Manewrowy,
//     Manifestacja,
//     Maratończyk,
//     Marketingowy,
//     Maszynista,
//     Matematyk,
//     Mechanik,
//     Medycyna,
//     Melanżowy,
//     Mikroskop,
//     Milioner,
//     Mineralogia,
//     Mistrzowski,
//     Motocyklista,
//     Muzykalny,
//     Naftowy,
//     Narracja,
//     Naukowiec,
//     Nawigator,
//     Nektarowy,
//     Nostalgia,
//     Obserwator,
//     Odkrywca]
let wordlist = ["maciej","wojwtek","igor"]
let wordpicked;
let usedletters = [];
let boxes;
let foundletters = 0;
let allletters ="QWERTYUIOPASDFGHJKLZXCVBNM";
function start(){
    wordpicked = wordlist[Math.floor(Math.random()*3)].toUpperCase();
    gra.innerHTML=""
    for(i=0;i<wordpicked.length;i++){
        gra.innerHTML+="<div class='charbox'></div>";
    }
    boxes=document.getElementsByClassName("charbox");
}
function key(x){
    if(x==='read'){
        x = event.key.toUpperCase();
    }else{
        x = x.innerHTML;
    }
    if(allletters.includes(x)){
    mark = document.getElementById(x);
    if(!usedletters.includes(x)) {
        if (wordpicked.toUpperCase().includes(x)) {
            for(i=0;i<wordpicked.length;i++){
                if(wordpicked.charAt(i)===x.charAt(0)){
                    boxes[i].innerHTML=x;
                    foundletters++;
                }
            }
            mark.style.backgroundColor = "yellowgreen";
        } else {
            mark.style.backgroundColor = "red";
        }
        usedletters.push(x);
    }
    if(foundletters==wordpicked.length){
        window.alert("WYGRALES")
        chars=document.getElementsByClassName("button");
        for(i=0;i<chars.length;i++){
            chars[i].onclick="";
            body = document.getElementsByTagName("body");
            body[0].onkeydown=null;
            body[0].onkeydown="reset()";
        }
    }
    }
}
function reset(){
    x = event.key;
    if(x==" "){
    location.reload;
    }
}