var resultado = document.getElementById('resultado');

function calcular(){
    var numBooks = parseFloat(document.getElementById('numBooks').value)

    if(numBooks < 7){
        preco = numBooks * 22;
    } else{
        preco = numBooks * 15;
    }
    resultado.innerText = `O preço da sua compra será de R$${preco}`;
}

var resultado2 = document.getElementById('resultado2')

function calc(){
    var velocidade = parseFloat(document.getElementById('velocidade').value);

    if(velocidade <= 60){
        resultado2.innerText = `Tudo certo parceiro`
    }else{
        preco = (velocidade - 60) * 100
        resultado2.innerText = `Você tomou uma multa no valor de R$${preco}`
    }
}