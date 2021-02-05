var dataMain = [];
var dataWarm = [];
var dataCold = [];
var dataSalad = [];
var dataDesert = [];

function mainCourse(datapassed){
    var iterator=0;
    let c_id=0;
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Naziv']=='Glavno jelo'){
            c_id=datapassed[i]['Courseid'];
        }
    }
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Vrsta jela']==c_id){
            //console.log(datapassed[i]);
            var text = `<div class="d-flex bd-highlight"><div id="sizing" class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large;">${datapassed[i]['Jelo']}</p></div><div id="sizing" class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Cijena']},00</p></div><div id="sizing" class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Valuta']}</p></div></div>`;
            dataMain[iterator]=text;
            iterator++;
            console.log(dataMain.length);
        }
    }
};

function warmAppetizers(datapassed){
    let c_id=0;
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Naziv']=='Toplo predjelo'){
            c_id=datapassed[i]['Courseid'];
        }
    }
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Vrsta jela']==c_id){
            //console.log(datapassed[i]);
            var text = `<div class="d-flex bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large;">${datapassed[i]['Jelo']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Cijena']},00</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Valuta']}</p></div>
                    </div>`;
            dataWarm[i]=text;
        }
    }
};

function coldAppetizers(datapassed){
    let c_id=0;
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Naziv']=='Hladno predjelo'){
            c_id=datapassed[i]['Courseid'];
        }
    }
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Vrsta jela']==c_id){
            //console.log(datapassed[i]);
            var text = `<div class="d-flex bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large;">${datapassed[i]['Jelo']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Cijena']},00</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Valuta']}</p></div>
                    </div>`;
            dataCold[i]=text;
        }
    }
};

function salads(datapassed){
    let c_id=0;
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Naziv']=='Salate'){
            c_id=datapassed[i]['Courseid'];
        }
    }
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Vrsta jela']==c_id){
            //console.log(datapassed[i]);
            var text = `<div class="d-flex bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large;">${datapassed[i]['Jelo']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Cijena']},00</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Valuta']}</p></div>
                    </div>`;
            dataSalad[i]=text;
        }
    }
};

function deserts(datapassed){
    let c_id=0;
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Naziv']=='Deserti'){
            c_id=datapassed[i]['Courseid'];
        }
    }
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Vrsta jela']==c_id){
            //console.log(datapassed[i]);
            var text = `<div class="d-flex bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large;">${datapassed[i]['Jelo']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Cijena']},00</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Valuta']}</p></div>
                    </div>`;
            dataDesert[i]=text;
        }
    }
};


window.onload = function() {
    if(document.getElementById("mainCourse")!=null){
        var doc1 = document.getElementById("moreFst");
        var prev1 = doc1.innerHTML;
        var doc2 = document.getElementById("moreSnd");
        var prev2 = doc2.innerHTML;
        
        if(dataMain.length>=9){
            for(i=0;i<9;i++){
                if(dataMain[i]!=undefined){
                    doc1.innerHTML = prev1 + dataMain[i];
                    prev1 = doc1.innerHTML;
                }
            }
            
            for(i=9;i<dataMain.length;i++){
                if(dataMain[i]!=undefined){
                    doc2.innerHTML = prev2 + dataMain[i];
                    prev2 = doc2.innerHTML;
                }
            }
            
        }else{
            var doc = document.getElementById("lessThen9");
            var prev = doc.innerHTML;
            for(i=0;i<dataMain.length;i++){
                if(dataMain[i]!=undefined){
                    brojac++;
                    doc.innerHTML = prev + dataMain[i];
                    prev = doc.innerHTML;
                }
            }
        }



        
    }
    if(document.getElementById("warmAppetizer")!=null){
        var doc = document.getElementById("warmDishes");
        var prev = doc.innerHTML;
        for(i=0;i<dataWarm.length;i++){
            if(dataWarm[i]!=undefined){
                doc.innerHTML = prev + dataWarm[i];
                prev = doc.innerHTML;
            }
        }
    }
    if(document.getElementById("coldAppetizer")!=null){
        var doc = document.getElementById("coldDishes");
        var prev = doc.innerHTML;
        for(i=0;i<dataCold.length;i++){
            if(dataCold[i]!=undefined){
                doc.innerHTML = prev + dataCold[i];
                prev = doc.innerHTML;
            }
        }
    }
    if(document.getElementById("salad")!=null){
        var doc = document.getElementById("salads");
        var prev = doc.innerHTML;
        for(i=0;i<dataSalad.length;i++){
            if(dataSalad[i]!=undefined){
                doc.innerHTML = prev + dataSalad[i];
                prev = doc.innerHTML;
            }
        }
    }
    if(document.getElementById("desert")!=null){
        var doc = document.getElementById("deserts");
        var prev = doc.innerHTML;
        for(i=0;i<dataDesert.length;i++){
            if(dataDesert[i]!=undefined){
                doc.innerHTML = prev + dataDesert[i];
                prev = doc.innerHTML;
            }
        }
    }
};