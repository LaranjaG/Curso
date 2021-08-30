window.alert("Atividade I - Questão III: \nDesenvolva uma página web que receba o nome, o peso (Kg) e altura (M) do usuário e, ao clicar em um botão, informe o índice de massa corporal (IMC) do mesmo e sua classificação. Para calcular o IMC do usuário você deve dividir o peso (kg) pela altura (cm) ao quadrado. \nIMC = peso / (altura*altura)");

window.addEventListener('load', function(){
//Botão
    document.querySelector("#result").addEventListener("click", calcular);
});

//Inputs
    let nome = document.querySelector("#inputNome");
    let altura = document.querySelector("#inputAltura");
    let peso = document.querySelector("#inputPeso");
    let resultado = document.querySelector("#resultado");

//Função
    function calcular(){
        if(nome.value != "" && altura.value != "" && peso.value != ""){
            resultado.value = "rodou";
            altura.value = altura.value.replace(",", ".");
            peso.value = peso.value.replace(",", ".");
            
            let imc = (peso.value/Math.pow(altura.value, 2)).toFixed(1);

            if(imc <= 18.5){
                imc += " - abaixo peso.";
            } else if(imc >= 18.5 && imc <= 24.9){
                imc += " - peso ideal (parabéns)."; 
            } else if(imc >= 25 && imc <= 29.9){
                imc += " - levemente acima do peso";
            } else if(imc >= 30 && imc <= 34.9){
                imc += " - Obesidade grau I";
            } else if(imc >= 35 && imc <= 39.9){
                imc += " - Obesidade grau II (severa)";
            } else{
                imc += " - Obesidade grau III (mórbida)";
            }

            resultado.value = nome.value + " seu IMC é " + imc;
        } else window.alert("Digite todos os dados");
    }