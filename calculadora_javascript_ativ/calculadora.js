function calcular() {
    // Obter valores dos inputs
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let operacao = document.getElementById('operacao').value;
    
    let resultado;
    
    // Realizar a operação selecionada
    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = "Divisão por zero!";
            }
            break;
        default:
            resultado = "Operação inválida!";
    }
    
    // Exibir o resultado
    document.getElementById('resultado').value = resultado;
}