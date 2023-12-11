const tasasDeCambio = {
    usd: {
        eur: 0.93,
        mxn: 17.37,
      
    },
    eur: {
        usd: 1.08,
        mxn: 18.69,
        
    },
    mxn: {
        usd: 0.058,
        eur: 0.054,
    }
};

function convertir() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;

    const tasaDeCambio = tasasDeCambio[origen] && tasasDeCambio[origen][destino];

    if (tasaDeCambio) {
        const resultado = cantidad * tasaDeCambio;
        document.getElementById('resultado').innerText = `Resultado: ${resultado.toFixed()} ${destino}`;
        //toFixed(2) nos sirve para que el resultado nos imprima dos digitos al ultimo como decimal, pero no sabia si agregarlo igual no es necesario
    } else {
        document.getElementById('resultado').innerText = "No se encontró una tasa de cambio para esta conversión.";
        // si la persona cambia una monenda por la misma como por ejemplo euro por euro soltara este mensaje por la misma condicon 
    }
}
