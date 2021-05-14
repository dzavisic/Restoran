/* INICIJALNE LISTE */
var dataMain = [];
var dataWarm = [];
var dataCold = [];
var dataSalad = [];
var dataDesert = [];
var dataMainOrder = [];
var dataWarmMin = [];
var dataColdMin = [];
var dataSaladMin = [];
var dataDesertMin = [];
var dataMainOrderMin = [];
var cart = [];
var txtcart = [];
var priceSum=0;
var cartItems = [];

/* POZOVE SE SVAKI PUT KAD SE STISNE GUMB NA NAVBARU, DA ODE SCROLL NA TOP */
function scrolltop(){
    window.scroll({
        top:0,
        left:0,
        behavior: 'smooth'
    });
}



/* IZLISTAVA SVA JELA ZA MAXIMIZIRAN SCREEN */
function listAllFoodExpanded(){
    let text = `
    <div id="coldAppetizer">
              <div class="d-flex align-items-center" id="underlining">
                  <h2 style="font-weight:bold;padding-right:10px;">HLADNO</h2>
                  <h2>PREDJELO</h2>
              </div>
              <div class="pt-2" id="coldDishes">
              </div>
            </div>

            <div id="warmAppetizer">
              <div class="d-flex align-items-center" id="underlining">
                <h2 style="font-weight:bold;padding-right:10px;">TOPLO</h2>
                <h2>PREDJELO</h2>
              </div>
              <div class="pt-2" id="warmDishes">
              </div>
            </div>

            <div id="mainCourseOrder">
              <div class="d-flex align-items-center" id="underlining">
                <h2 style="font-weight:bold;padding-right:10px;">GLAVNO</h2>
                <h2>JELO</h2>
              </div>
              <div class="pt-2" id="mainDishesOrder">
              </div>
            </div>

            <div id="salad">
              <div class="d-flex align-items-center" id="underlining">
                  <h2 style="font-weight:bold;padding-right:10px;">SALATE</h2>
              </div>
              <div class="pt-2" id="salads">
              </div>
            </div>

            <div id="desert">
              <div class="d-flex align-items-center" id="underlining">
                <h2 style="font-weight:bold;padding-right:10px;">DESERTI</h2>
              </div>
              <div class="pt-2" id="deserts">
              </div>
            </div>
    `;
    var newExpListing = document.getElementById("newExpListing");
    if(newExpListing!=null){
        newExpListing.innerHTML=text;
    }

    if(document.getElementById("coldAppetizer")!= null){
        let doc = document.getElementById("coldDishes");
        let prev = doc.innerHTML;
        for(i=0; i<dataCold.length; i++){
            if(dataCold[i] != undefined){
                doc.innerHTML = prev + dataCold[i];
                prev = doc.innerHTML;
            }
        }
    }
    if(document.getElementById("warmAppetizer")!= null){
        let doc = document.getElementById("warmDishes");
        let prev = doc.innerHTML;
        for(i=0; i<dataWarm.length; i++){
            if(dataWarm[i] != undefined){
                doc.innerHTML = prev + dataWarm[i];
                prev = doc.innerHTML;
            }
        }
    }
    if(document.getElementById("mainCourseOrder")!= null){
        let doc = document.getElementById("mainDishesOrder");
        let prev = doc.innerHTML;
        for(i=0; i<dataMainOrder.length; i++){
            if(dataMainOrder[i] != undefined){
                doc.innerHTML = prev + dataMainOrder[i];
                prev = doc.innerHTML;
            }
        }
    }
    if(document.getElementById("salad")!= null){
        let doc = document.getElementById("salads");
        let prev = doc.innerHTML;
        for(i=0; i<dataSalad.length; i++){
            if(dataSalad[i] != undefined){
                doc.innerHTML = prev + dataSalad[i];
                prev = doc.innerHTML;
            }
        }
    }
    if(document.getElementById("desert")!= null){
        let doc = document.getElementById("deserts");
        let prev = doc.innerHTML;
        for(i=0; i<dataDesert.length; i++){
            if(dataDesert[i] != undefined){
                doc.innerHTML = prev + dataDesert[i];
                prev = doc.innerHTML;
            }
        }
    }
}

/*  */
function listColdJsInit(){
    let text = `<div id="coldAppetizerMin">
                    <div class="d-flex align-items-center" id="underlining">
                        <h2 style="font-weight:bold;padding-right:10px;">HLADNO</h2>
                        <h2>PREDJELO</h2>
                    </div>
                    <div class="pt-2" id="coldDishesMin">
                    </div>
                </div>`;
    var dishesMin = document.getElementById("dishesMin");
    if(dishesMin!=null){
        dishesMin.innerHTML = text;
    }
    
    if(document.getElementById("coldAppetizerMin")!=null){
        var doc = document.getElementById("coldDishesMin");
        var prev = doc.innerHTML;
        for(i=0;i<dataColdMin.length;i++){
            if(dataColdMin[i]!=undefined){
                doc.innerHTML = prev + dataColdMin[i];
                prev = doc.innerHTML;
            }
        }
    }
}

/* IZLISTAVAJU HRANU ZA MINIMIZIRAN SCREEN */
function listColdJs(){
    let text = `<div id="coldAppetizerMin">
                    <div class="d-flex align-items-center" id="underlining">
                        <h2 style="font-weight:bold;padding-right:10px;">HLADNO</h2>
                        <h2>PREDJELO</h2>
                    </div>
                    <div class="pt-2" id="coldDishesMin">
                    </div>
                </div>`;
    var dishesMin = document.getElementById("dishesMin");
    if(dishesMin!=null){
        dishesMin.innerHTML = text;
    }
    
    if(document.getElementById("coldAppetizerMin")!=null){
        var doc = document.getElementById("coldDishesMin");
        var prev = doc.innerHTML;
        for(i=0;i<dataColdMin.length;i++){
            if(dataColdMin[i]!=undefined){
                doc.innerHTML = prev + dataColdMin[i];
                prev = doc.innerHTML;
            }
        }
    }
    document.getElementById('jelovnik').scrollIntoView();
}
function listWarmJs(){
    let text = `<div id="warmAppetizerMin">
    <div class="d-flex align-items-center" id="underlining">
      <h2 style="font-weight:bold;padding-right:10px;">TOPLO</h2>
      <h2>PREDJELO</h2>
    </div>
    <div class="pt-2" id="warmDishesMin">
    </div>
  </div>`;
    var dishesMin = document.getElementById("dishesMin");
    dishesMin.innerHTML = text;
    if(document.getElementById("warmAppetizerMin")!=null){
        var doc = document.getElementById("warmDishesMin");
        var prev = doc.innerHTML;
        for(i=0;i<dataWarmMin.length;i++){
            if(dataWarmMin[i]!=undefined){
                doc.innerHTML = prev + dataWarmMin[i];
                prev = doc.innerHTML;
            }
        }
    }
    document.getElementById('jelovnik').scrollIntoView();
}
function listMainJs(){
    let text = `<div id="mainCourseOrderMin">
    <div class="d-flex align-items-center" id="underlining">
    <h2 style="font-weight:bold;padding-right:10px;">GLAVNO</h2>
    <h2>JELO</h2>
    </div>
    <div class="pt-2" id="mainDishesOrderMin">
    </div>
  </div>`;
    var dishesMin = document.getElementById("dishesMin");
    dishesMin.innerHTML = text;
    if(document.getElementById("mainCourseOrderMin")!=null){
        var doc = document.getElementById("mainDishesOrderMin");
        var prev = doc.innerHTML;
        for(i=0;i<dataMainOrderMin.length;i++){
            if(dataMainOrderMin[i]!=undefined){
                doc.innerHTML = prev + dataMainOrderMin[i];
                prev = doc.innerHTML;
            }
        }
    }
    document.getElementById('jelovnik').scrollIntoView();
}
function listSaladJs(){
    let text = `<div id="saladMin">
    <div class="d-flex align-items-center" id="underlining">
        <h2 style="font-weight:bold;padding-right:10px;">SALATE</h2>
    </div>
    <div class="pt-2" id="saladsMin">
    </div>
  </div>`;
    var dishesMin = document.getElementById("dishesMin");
    dishesMin.innerHTML = text;
    if(document.getElementById("saladMin")!=null){
        var doc = document.getElementById("saladsMin");
        var prev = doc.innerHTML;
        for(i=0;i<dataSaladMin.length;i++){
            if(dataSaladMin[i]!=undefined){
                doc.innerHTML = prev + dataSaladMin[i];
                prev = doc.innerHTML;
            }
        }
    }
    document.getElementById('jelovnik').scrollIntoView();

}
function listDesertJs(){
    let text = `<div id="desertMin">
    <div class="d-flex align-items-center" id="underlining">
      <h2 style="font-weight:bold;padding-right:10px;">DESERTI</h2>
    </div>
    <div class="pt-2" id="desertsMin">
    </div>
  </div>
</div>`;
    var dishesMin = document.getElementById("dishesMin");
    dishesMin.innerHTML = text;
    if(document.getElementById("desertMin")!=null){
        var doc = document.getElementById("desertsMin");
        var prev = doc.innerHTML;
        for(i=0;i<dataDesertMin.length;i++){
            if(dataDesertMin[i]!=undefined){
                doc.innerHTML = prev + dataDesertMin[i];
                prev = doc.innerHTML;
            }
        }
    }
    document.getElementById('jelovnik').scrollIntoView();
}

/* IZLISTAVA DODANI ITEM U KOSARICU, PRVI ZA MAX, DRUGI ZA MIN SCREEN */
function printOrderToHtml(cart){
    var doc = document.getElementById("cartitems");
    var prev = "";
    if(document.getElementById("cartitems")!=null){
        for(i=0;i<cart.length;i++){
            if(cart[i].name.length<26){
                var spaces = 26 -  cart[i].name.length; 
            }
            var text = `<div class="d-flex align-items-center bd-highlight">
            <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large; width:20vw !important;">${cart[i].name}</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;">${cart[i].price},00</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;">${cart[i].currency}</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;"> x${cart[i].portions}</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;"><button type="button" style="background-color: #cfa670;" class="btn btn-default btn-sm" onclick="removeFromCart('${cart[i].name}','${cart[i].price}')">
            <img src="https://img.icons8.com/metro/20/ffffff/minus-math.png"/>
            </button>
            </p></div>
    
            
            </div>`
            doc.innerHTML = prev + text;
            prev = doc.innerHTML;
        }
    }
    
}
function printOrderToHtmlMin(cart){
    var doc = document.getElementById("cartitemsMin");
    var prev = "";
    if(document.getElementById("cartitemsMin")!=null){
        for(i=0;i<cart.length;i++){
            var text = `<div class="d-flex align-items-center bd-highlight">
            <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large; width:40.484375vw !important;">${cart[i].name}</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;">${cart[i].price},00</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;">${cart[i].currency}</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;"> x${cart[i].portions}</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;"><button type="button" style="background-color: #cfa670;" class="btn btn-default btn-sm" onclick="removeFromCartMin('${cart[i].name}','${cart[i].price}')">
            <img src="https://img.icons8.com/metro/20/ffffff/minus-math.png"/>
            </button>
            </p></div>
            </div>`
            doc.innerHTML = prev + text;
            prev = doc.innerHTML;
        }
    }
    
}

/* IZLISTAVA KOSARICU POPUNJENU DOLJE PA U MAKSIMIZIRANI PRIKAZ */
function printOrderToHtmlExpFromMin(){
    var doc = document.getElementById("cartitems");
    var prev = "";
    if(document.getElementById("cartitems")!=null){
        for(i=0;i<cart.length;i++){
            if(cart[i].name.length<26){
                var spaces = 26 -  cart[i].name.length; 
            }
            var text = `<div class="d-flex align-items-center bd-highlight">
            <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large; width:21.484375vw !important;">${cart[i].name}</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;">${cart[i].price},00</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;">${cart[i].currency}</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;"> x${cart[i].portions}</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;"><button type="button" style="background-color: #cfa670;" class="btn btn-default btn-sm" onclick="removeFromCart('${cart[i].name}','${cart[i].price}')">
            <img src="https://img.icons8.com/metro/20/ffffff/minus-math.png"/>
            </button>
            </p></div>
    
            
            </div>`
            doc.innerHTML = prev + text;
            prev = doc.innerHTML;
        }
    }
    
}
function printTotalPriceToHtmlExpFromMin(){
    priceSum=0;
    if(cart.length!=0){
        for(let i=0; i<cart.length;i++){
            priceSum = priceSum + parseInt(cart[i].price);
        }
        for(i=0; i<cart.length; i++){
            if(cart[i].portions>1){
                let num = cart[i].portions - 1;
                priceSum = priceSum + parseInt(cart[i].price)*num;
            }
        }
        var prc = document.getElementById("priceSum");
        if(priceSum!=0){
            if(prc!=null){
                prc.innerHTML =`<h2>` + priceSum + ',00 '+ cart[0].currency + `</h2>`;
            }
            
        }else{
            if(prc!=null){
                prc.innerHTML =`<h2>00,00 HRK</h2>`;
            }
            
        }
        if(document.getElementById("underlining2")!=null){
            document.getElementById("underlining2").style.borderBottom = '1px solid #cfa670';
            document.getElementById("underlining2").style.width = '100%';
        }
        
    }else{
        var doc = document.getElementById("cartitems");
        if(doc!=null){
            doc.innerHTML="";
        }
        
        var prc = document.getElementById("priceSum");
        if(prc!=null){
            prc.innerHTML =`<h2>00,00 HRK</h2>`;
        }
        
    }
}

/* IZLISTAVA KOSARICU POPUNJENU GORE PA U MINIMIZIRANI PRIKAZ */
function printOrderToHtmlMinFromExp(){
    var doc = document.getElementById("cartitemsMin");
    var prev = "";
    if(document.getElementById("cartitemsMin")!=null){
        for(i=0;i<cart.length;i++){
            var text = `<div class="d-flex align-items-center bd-highlight">
            <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large; width:40.484375vw !important;">${cart[i].name}</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;">${cart[i].price},00</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;">${cart[i].currency}</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;"> x${cart[i].portions}</p></div>
            <div class="p-2 bd-highlight"><p style="font-size:large;"><button type="button" style="background-color: #cfa670;" class="btn btn-default btn-sm" onclick="removeFromCartMin('${cart[i].name}','${cart[i].price}')">
            <img src="https://img.icons8.com/metro/20/ffffff/minus-math.png"/>
            </button>
            </p></div>
            </div>`
            if(doc!=null){
                doc.innerHTML = prev + text;
                prev = doc.innerHTML;
            }
            
        }
    }
    
}
function printTotalPriceToHtmlMinFromExp(){
    priceSum=0;
    if(cart.length!=0){
        for(let i=0; i<cart.length;i++){
            priceSum = priceSum + parseInt(cart[i].price);
        }
        for(i=0; i<cart.length; i++){
            if(cart[i].portions>1){
                let num = cart[i].portions - 1;
                priceSum = priceSum + parseInt(cart[i].price)*num;
            }
        }
        var prc = document.getElementById("priceSumMin");
        if(priceSum!=0){
            if(prc!=null){
                prc.innerHTML =`<h2>` + priceSum + ',00 '+ cart[0].currency + `</h2>`;
            }
            
        }else{
            if(prc!=null){
                prc.innerHTML =`<h2>00,00 HRK</h2>`;
            }
            
        }
        if(document.getElementById("underlining2")!=null){
            document.getElementById("underlining2").style.borderBottom = '1px solid #cfa670';
            document.getElementById("underlining2").style.width = '100%';
        }
        
    }else{
        var doc = document.getElementById("cartitemsMin");
        if(doc!=null){
            doc.innerHTML="";
        }
        var prc = document.getElementById("priceSumMin");
        if(prc!=null){
            prc.innerHTML =`<h2>00,00 HRK</h2>`;
        }
        
    }
}

/* IZLISTAVA CIJENU DODANOG ITEMA, PRVI ZA MAX, DRUGI ZA MIN SCREEN */
function printTotalPriceToHtml(cart){
    priceSum=0;
    if(cart.length!=0){
        for(let i=0; i<cart.length;i++){
            priceSum = priceSum + parseInt(cart[i].price);
        }
        for(i=0; i<cart.length; i++){
            if(cart[i].portions>1){
                let num = cart[i].portions - 1;
                priceSum = priceSum + parseInt(cart[i].price)*num;
            }
        }
        var prc = document.getElementById("priceSum");
        if(priceSum!=0){
            prc.innerHTML =`<h2>` + priceSum + ',00 '+ cart[0].currency + `</h2>`;
        }else{
            prc.innerHTML =`<h2>00,00 HRK</h2>`;
        }
        document.getElementById("underlining2").style.borderBottom = '1px solid #cfa670';
        document.getElementById("underlining2").style.width = '100%';
    }else{
        var doc = document.getElementById("cartitems");
        doc.innerHTML="";
        var prc = document.getElementById("priceSum");
        prc.innerHTML =`<h2>00,00 HRK</h2>`;
    }
}
function printTotalPriceToHtmlMin(cart){
    priceSum=0;
    if(cart.length!=0){
        for(let i=0; i<cart.length;i++){
            priceSum = priceSum + parseInt(cart[i].price);
        }
        for(i=0; i<cart.length; i++){
            if(cart[i].portions>1){
                let num = cart[i].portions - 1;
                priceSum = priceSum + parseInt(cart[i].price)*num;
            }
        }
        var prc = document.getElementById("priceSumMin");
        if(priceSum!=0){
            prc.innerHTML =`<h2>` + priceSum + ',00 '+ cart[0].currency + `</h2>`;
        }else{
            prc.innerHTML =`<h2>00,00 HRK</h2>`;
        }
        document.getElementById("underlining2").style.borderBottom = '1px solid #cfa670';
        document.getElementById("underlining2").style.width = '100%';
    }else{
        var doc = document.getElementById("cartitemsMin");
        doc.innerHTML="";
        var prc = document.getElementById("priceSumMin");
        prc.innerHTML =`<h2>00,00 HRK</h2>`;
    }
}

/* DODAJE ITEM U KOSARICU, OVDJE POZIVA PRINTANJE NA STRANICU, MAX I MIN SCREEN */
function addToCart(nameP,priceP,currencyP){
    if(cart.length==0){
        cart[0] = {
            name: nameP,
            price: priceP,
            currency: currencyP,
            portions: 1
        }
        printOrderToHtml(cart);
    }else{
        var check=false;
        for(i=0; i<cart.length; i++){
            if(cart[i].name == nameP){
                cart[i].portions++;
                check=true;
            }
        }
        if(check==true){
            var doc = document.getElementById("cartitems");
            doc.innerHTML = "";
            printOrderToHtml(cart);
        }
        else{
            var next = cart.length;
            cart[next] = {
                name: nameP,
                price: priceP,
                currency: currencyP,
                portions: 1
            }
            printOrderToHtml(cart);
        }
    }
    printTotalPriceToHtml(cart);
}
function addToCartMin(nameP,priceP,currencyP){
    if(cart.length==0){
        cart[0] = {
            name: nameP,
            price: priceP,
            currency: currencyP,
            portions: 1
        }
        printOrderToHtmlMin(cart);
    }else{
        var check=false;
        for(i=0; i<cart.length; i++){
            if(cart[i].name == nameP){
                cart[i].portions++;
                check=true;
            }
        }
        if(check==true){
            var doc = document.getElementById("cartitemsMin");
            doc.innerHTML = "";
            printOrderToHtmlMin(cart);
        }
        else{
            var next = cart.length;
            cart[next] = {
                name: nameP,
                price: priceP,
                currency: currencyP,
                portions: 1
            }
            printOrderToHtmlMin(cart);
        }
    }
    printTotalPriceToHtmlMin(cart);
}

/* BRISE ITEM IZ KOSARICE, OVDJE POZIVA PRINTANJE NA STRANICU, MAX I MIN SCREEN */
function removeFromCart(nameP,priceP){
    for(i=0; i<cart.length; i++){
        if(cart[i].name == nameP){
            if(cart[i].portions>1){
                cart[i].portions = cart[i].portions-1;
                printOrderToHtml(cart);
                printTotalPriceToHtml(cart);
            }else{
                cart.splice(i,1);
                printOrderToHtml(cart);
                printTotalPriceToHtml(cart);
            }
        }
    }
}
function removeFromCartMin(nameP,priceP){
    for(i=0; i<cart.length; i++){
        if(cart[i].name == nameP){
            if(cart[i].portions>1){
                cart[i].portions = cart[i].portions-1;
                printOrderToHtmlMin(cart);
                printTotalPriceToHtmlMin(cart);
            }else{
                cart.splice(i,1);
                printOrderToHtmlMin(cart);
                printTotalPriceToHtmlMin(cart);
            }
        }
    }
}

/* OBRADA PODATAKA PRIMLJENIH OD SERVERA I RASPODJELA U POTREBNE LISTE */
function mainCourseOrder(datapassed){
    let c_id=0;
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Naziv']=='Glavno jelo'){
            c_id=datapassed[i]['Courseid'];
        }
    }
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Vrsta jela']==c_id){
            //console.log(datapassed[i]);
            var text = `<div class="d-flex align-items-center bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large;">${datapassed[i]['Jelo']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Cijena']},00</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Valuta']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;"><button type="button" style="background-color: #cfa670;" class="btn btn-default btn-sm" onclick="addToCart('${datapassed[i]['Jelo']}','${datapassed[i]['Cijena']}','${datapassed[i]['Valuta']}')">
                        <img src="https://img.icons8.com/metro/20/ffffff/plus-math.png"/>
                        </button>
                        </p></div>
                        </div>`;
            dataMainOrder[i]=text;
        }
    }
};
function mainCourseOrderMin(datapassed){
    let c_id=0;
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Naziv']=='Glavno jelo'){
            c_id=datapassed[i]['Courseid'];
        }
    }
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Vrsta jela']==c_id){
            //console.log(datapassed[i]);
            var text = `<div class="d-flex align-items-center bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large;">${datapassed[i]['Jelo']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Cijena']},00</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Valuta']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;"><button type="button" style="background-color: #cfa670;" class="btn btn-default btn-sm" onclick="addToCartMin('${datapassed[i]['Jelo']}','${datapassed[i]['Cijena']}','${datapassed[i]['Valuta']}')">
                        <img src="https://img.icons8.com/metro/20/ffffff/plus-math.png"/>
                        </button>
                        </p></div>
                        </div>`;
            dataMainOrderMin[i]=text;
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
            var text = `<div class="d-flex align-items-center bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large;">${datapassed[i]['Jelo']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Cijena']},00</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Valuta']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;"><button type="button" style="background-color: #cfa670;" class="btn btn-default btn-sm" onclick="addToCart('${datapassed[i]['Jelo']}','${datapassed[i]['Cijena']}','${datapassed[i]['Valuta']}')">
                        <img src="https://img.icons8.com/metro/20/ffffff/plus-math.png"/>
                        </button>
                        </p></div>
                        </div>`;
            dataWarm[i]=text;
        }
    }
};
function warmAppetizersMin(datapassed){
    let c_id=0;
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Naziv']=='Toplo predjelo'){
            c_id=datapassed[i]['Courseid'];
        }
    }
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Vrsta jela']==c_id){
            //console.log(datapassed[i]);
            var text = `<div class="d-flex align-items-center bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large;">${datapassed[i]['Jelo']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Cijena']},00</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Valuta']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;"><button type="button" style="background-color: #cfa670;" class="btn btn-default btn-sm" onclick="addToCartMin('${datapassed[i]['Jelo']}','${datapassed[i]['Cijena']}','${datapassed[i]['Valuta']}')">
                        <img src="https://img.icons8.com/metro/20/ffffff/plus-math.png"/>
                        </button>
                        </p></div>
                        </div>`;
            dataWarmMin[i]=text;
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
            var text = `<div class="d-flex align-items-center bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large;">${datapassed[i]['Jelo']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Cijena']},00</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Valuta']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;"><button type="button" style="background-color: #cfa670;" class="btn btn-default btn-sm" onclick="addToCart('${datapassed[i]['Jelo']}','${datapassed[i]['Cijena']}','${datapassed[i]['Valuta']}')">
                        <img src="https://img.icons8.com/metro/20/ffffff/plus-math.png"/>
                        </button>
                        </p></div>
                        </div>`;
            dataCold[i]=text;
        }
    }
};
function coldAppetizersMin(datapassed){
    let c_id=0;
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Naziv']=='Hladno predjelo'){
            c_id=datapassed[i]['Courseid'];
        }
    }
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Vrsta jela']==c_id){
            //console.log(datapassed[i]);
            var text = `<div class="d-flex align-items-center bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large;">${datapassed[i]['Jelo']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Cijena']},00</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Valuta']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;"><button type="button" style="background-color: #cfa670;" class="btn btn-default btn-sm" onclick="addToCartMin('${datapassed[i]['Jelo']}','${datapassed[i]['Cijena']}','${datapassed[i]['Valuta']}')">
                        <img src="https://img.icons8.com/metro/20/ffffff/plus-math.png"/>
                        </button>
                        </p></div>
                        </div>`;
            dataColdMin[i]=text;
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
            var text = `<div class="d-flex align-items-center bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large;">${datapassed[i]['Jelo']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Cijena']},00</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Valuta']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;"><button type="button" style="background-color: #cfa670;" class="btn btn-default btn-sm" onclick="addToCart('${datapassed[i]['Jelo']}','${datapassed[i]['Cijena']}','${datapassed[i]['Valuta']}')">
                        <img src="https://img.icons8.com/metro/20/ffffff/plus-math.png"/>
                        </button>
                        </p></div>
                        </div>`;
            dataSalad[i]=text;
        }
    }
};
function saladsMin(datapassed){
    let c_id=0;
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Naziv']=='Salate'){
            c_id=datapassed[i]['Courseid'];
        }
    }
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Vrsta jela']==c_id){
            //console.log(datapassed[i]);
            var text = `<div class="d-flex align-items-center bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large;">${datapassed[i]['Jelo']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Cijena']},00</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Valuta']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;"><button type="button" style="background-color: #cfa670;" class="btn btn-default btn-sm" onclick="addToCartMin('${datapassed[i]['Jelo']}','${datapassed[i]['Cijena']}','${datapassed[i]['Valuta']}')">
                        <img src="https://img.icons8.com/metro/20/ffffff/plus-math.png"/>
                        </button>
                        </p></div>
                        </div>`;
            dataSaladMin[i]=text;
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
            var text = `<div class="d-flex align-items-center bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large;">${datapassed[i]['Jelo']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Cijena']},00</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Valuta']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;"><button type="button" style="background-color: #cfa670;" class="btn btn-default btn-sm" onclick="addToCart('${datapassed[i]['Jelo']}','${datapassed[i]['Cijena']}','${datapassed[i]['Valuta']}')">
                        <img src="https://img.icons8.com/metro/20/ffffff/plus-math.png"/>
                        </button>
                        </p></div>
                    </div>`;
            dataDesert[i]=text;
        }
    }
};
function desertsMin(datapassed){
    let c_id=0;
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Naziv']=='Deserti'){
            c_id=datapassed[i]['Courseid'];
        }
    }
    
    for(i=0; i<datapassed.length; i++){
        if(datapassed[i]['Vrsta jela']==c_id){
            //console.log(datapassed[i]);
            var text = `<div class="d-flex align-items-center bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight"><p style="font-size:large;">${datapassed[i]['Jelo']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Cijena']},00</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;">${datapassed[i]['Valuta']}</p></div>
                        <div class="p-2 bd-highlight"><p style="font-size:large;"><button type="button" style="background-color: #cfa670;" class="btn btn-default btn-sm" onclick="addToCartMin('${datapassed[i]['Jelo']}','${datapassed[i]['Cijena']}','${datapassed[i]['Valuta']}')">
                        <img src="https://img.icons8.com/metro/20/ffffff/plus-math.png"/>
                        </button>
                        </p></div>
                    </div>`;
            dataDesertMin[i]=text;
        }
    }
};

function getCartItems(){
    return this.cart;
}

function makeToken() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 50; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
};
