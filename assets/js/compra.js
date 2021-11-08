let cargarApp = () =>{
    cargarCarrito();
}

const formatoMoneda = (valor)=>{
    return valor.toLocaleString("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:2});
}

function cargarTotal(){
    let carrito = JSON.parse(decodeURIComponent(localStorage.getItem("staplesbmincart")));
    let total=0;
    let totalItems=0;
    for(let i in carrito.value.items){
        total += carrito.value.items[i].quantity*carrito.value.items[i].amount;
        totalItems+=carrito.value.items[i].quantity;
    }
    let elementoHTML=`
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">Total:</div>
        <div class="derecha limpiarEstilos">
        <div class="elemento_descripcion">${totalItems}</div>
        <div class="elemento_valor">${formatoMoneda(total)}</div>
    </div>
    </div>
    `
    document.getElementById("lista-ingresos").innerHTML+=elementoHTML;
}

function cargarCarrito(){
    let carrito = JSON.parse(decodeURIComponent(localStorage.getItem("staplesbmincart")));
    let elementoHTML="";
    for(let i in carrito.value.items){
        let totalItem=carrito.value.items[i].quantity*carrito.value.items[i].amount;
    elementoHTML+=`
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${carrito.value.items[i].transmitv_item}</div>
            <div class="derecha limpiarEstilos">
            <div class="elemento_descripcion">${carrito.value.items[i].quantity}</div>
            <div class="elemento_valor">${formatoMoneda(totalItem)}</div>
        </div>
    </div>
    `; }
    document.getElementById("lista-ingresos").innerHTML=elementoHTML;
    cargarTotal();
}

