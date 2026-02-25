function calculadoraDesconto(){
    
    //Entrada
    let valorOriginal = document.getElementById("valor").value; // "let" é variável. No JavaScript, é mais utilizado o "let" do que o "var"
    let desconto = document.getElementById("desconto").value;
    //Processamento
    let valorDesconto = (valorOriginal * desconto) / 100;
    let valorFinal = valorOriginal - valorDesconto;

    document.getElementById("resultado").textContent = "Resultado: " + valorFinal; // o "textContent" nesse caso vai substituir o id "resultado" pela variável "valorFinal"
    //Saída
}


