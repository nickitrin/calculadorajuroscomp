document.getElementById("calculadorajuros").onsubmit = calcularjuros;

function calcularjuros(event) {
    
    event.preventDefault();
    
    let Total = document.getElementById("valortotal")
    let valorinicial = Number(document.getElementById("valorinicial").value);
    let taxadejuros = Number(document.getElementById("taxadejuros").value )/ 100;
    let periodoinvestimento = Number(document.getElementById("periodoinvestimento").value);
    let aportemensal = Number(document.getElementById("aportemensal").value);
 // console.log(taxadejuros)
 // console.log(valorinicial)
 // console.log(periodoinvestimento)
 // console.log(aportemensal)

    if(document.getElementById("opcaoperiodotaxa").value==="taxaanual"){
        taxadejuros = Math.pow(1 + taxadejuros, 1/12) - 1;
        if(document.getElementById("opcaoperiodoinvestimento").value==="investimentoanual"){
            total = valorinicial * (1+ taxadejuros);
            let mes=1
            while (mes < periodoinvestimento*12) {
                total = total + aportemensal;
                total = total * (1 + taxadejuros);
                mes ++;
        }
        valortotal = total + aportemensal
        Total.innerHTML = "<h2>Valor total:</h2>" + "R$" + valortotal.toFixed(2);
        
        }
         
        
        if(document.getElementById("opcaoperiodoinvestimento").value==="investimentomensal"){
            total = valorinicial * (1+ taxadejuros);
            let mes=1
            while (mes < periodoinvestimento) {
                total = total + aportemensal;
                total = total * (1 + taxadejuros);
                mes ++;
        }
        valortotal = total + aportemensal
        Total.innerHTML = "<h2>Valor total:</h2>" + "R$" + valortotal.toFixed(2);
        }

        }
    
    if(document.getElementById("opcaoperiodotaxa").value==="taxamensal"){
        if(document.getElementById("opcaoperiodoinvestimento").value==="investimentoanual"){
            total = valorinicial * (1+ taxadejuros);
            let mes=1
            while (mes < periodoinvestimento*12) {
                total = total + aportemensal;
                total = total * (1 + taxadejuros);
                mes ++;
        }
        valortotal = total + aportemensal
        Total.innerHTML = "<h2>Valor total:</h2>" + "R$" + valortotal.toFixed(2);

        }
        
        if(document.getElementById("opcaoperiodoinvestimento").value==="investimentomensal"){
            total = valorinicial * (1+ taxadejuros);
            let mes=1
            while (mes < periodoinvestimento) {
                total = total + aportemensal;
                total = total * (1 + taxadejuros);
                mes ++;
        }
        valortotal = total + aportemensal
        Total.innerHTML = "<h2>Valor total:</h2>" + "R$" + valortotal.toFixed(2);
        }

    }

}