



/* var figurine = [
    {
        nome: "Goku III livello",
        immagine : "https://www.opgt.it/wp-content/uploads/2019/12/fdc9ea541300df0867676cbb5dde80461ee886d3r1-887-597v2_hq.jpg",
        cartAppart: "Dragon Ball",
        cartoonRole: "Protagonista",
        punteggio: 5,
        descrizione: "Goku di terzo livello è un guerriero potente, dotato di una resistenza straordinaria e in grado di utilizzare l'energia divina per sconfiggere i nemici."
        
    },
    {
        nome: "Peter Griffin",
        immagine : "https://www.looper.com/img/gallery/12-times-when-peter-griffin-proved-hes-not-a-family-guy/l-intro-1667831599.jpg",
        cartAppart: "Griffin",
        cartoonRole: "Protagonista",
        punteggio: 4,
        descrizione: "Peter Griffin è un personaggio divertente e imprevedibile, noto per il suo humor sarcastico e i suoi comportamenti eccentrici."
    },
] */

let figurine = {};

//richeista fetch del file json
fetch("figurine.json").then(function(response) {
    //gestione errori:
    if(!response.ok) {

        throw new Error(`HTTP error: ${response.status}` );
    }else{
        //risposta
        return response.json(); //-> il contenuto return di questa funzione viene passato nel parametro del then sotto
    }
    
}).then(function(json) {
    figurine = json;

    usaFigurine(figurine)

}).catch(function(err) {
    console.log("C'è un problema: " + err.message);
})

function usaFigurine(figurine) {


    function remove() {
        figurine.pop()
    }
    
    function add() {
        figurine.push(
            {
                "nome" : formInserimento.nome.value,
                "immagine" : formInserimento.immagine.value,
                "cartAppart" : formInserimento.cartAppart.value,
                "cartoonRole" : formInserimento.cartoonRole.value,
                "punteggio" : formInserimento.punteggio.value,
                "descrizione" : formInserimento.descrizione.value,
            
            }
        )
        clear();
    }
    
    function clear() {
        formInserimento.nome.value = "";
        formInserimento.immagine.value = "";
        formInserimento.cartAppart.value = "";
        formInserimento.cartoonRole.value = "";
        formInserimento.punteggio.value = "";
        formInserimento.descrizione.value = 0;
    }
    
    
    function refresh() {
    
        var ris = "";
    
        for(let i=0; i<figurine.length; i++) {
    
            let divClass = "fig";
    
            if(figurine[i].cartAppart == "Dragon Ball") {
                divClass += "drbl"; 
            }
                
            ris += "<div class='fig "+divClass+"'>\n <h3>"+ figurine[i].nome + "</h3>" + 
                "<div class='immagineSingola'>\n<img src='" + figurine[i].immagine + "' alt='immagine città'>\n</div>" + 
                "<div class='punteggiofig'> <b>Potenza:</b> "+figurine[i].punteggio +"</div>\n" + 
                "<div ><a class='caratteristiche'>Scopri le caratteristiche</a></div>\n" +
                "<div class='altreInformazioni hidden'>\n" + 
                "<b>Cartone:</b> " + figurine[i].cartAppart + "<br>" +
                "<b>Ruolo:</b> " + figurine[i].cartoonRole + "<br>" +
                "<p><b>Descrizione:</b><br> " + figurine[i].descrizione + "</p><br>" +
                "</div>\n</div>"
            ;
        }
    
        document.getElementById("figurine").innerHTML = ris;
        
        det = document.querySelectorAll(".caratteristiche");
        let dettagl = document.querySelectorAll(".altreInformazioni")
        
        for(let i=0; i<det.length; i++) {
    
            det[i].addEventListener("click", function() {
                console.log("funziona")
                
                dettagl[i].classList.toggle("hidden");
            })
        }
    
    
    
    
        // - Voglio vedere in alto, appena sotto il titolo, un paragrafo con il riassunto del contenuto
        // della lista di figurine 
        // (Figure Totali:10, Punteggio medio: 4.2, Cartoni Animati: Dragon Ball, Lady Oscar ecc)
        var recap = document.querySelector(".recap")
        console.log(recap.value)
    
        let totFigurine = 0
        let punteggioTot = 0;
        let cartoni = "";
        for(let i=0; i<figurine.length; i++) {
            totFigurine ++
            punteggioTot += parseInt(figurine[i].punteggio);
            cartoni += ", "+figurine[i].cartAppart
    
    
            recap.innerHTML = "<p class='figurina'>\n"+
                                    "Il tuo album contiene "+ totFigurine + " Figurine "+
                                    "con un punteggio medio di: "+ punteggioTot/parseInt(totFigurine) + ";<br>"+
                                    "<b>cartoni presenti: </b>" + cartoni +
                                ".</p>";
        
        }
    
    
    }


    agg.addEventListener("click", function(){
        add();
        refresh();
    })
    rem.addEventListener("click", function(){
        remove();
        refresh();
    })


    refresh()
    console.log(figurine)
}








/* console.log(figurine); */
