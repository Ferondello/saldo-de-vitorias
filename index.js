const prompt = require('prompt-sync')();

var vitorias = prompt("Numero de vitorias: ");
var derrotas = prompt("Numero de derrotas: ");

var saldo = SaldoDeRanqueadas(vitorias, derrotas);
var nivel = CalculaNivel(vitorias);

console.log("O heroi tem saldo de "+ saldo + " e esta no nivel de "+ nivel);


function SaldoDeRanqueadas(vitorias, derrotas){
    return vitorias - derrotas;
}

function CalculaNivel(saldo){
    if(saldo<10){
        return "Ferro";
    }
    else if(saldo >= 11 && saldo <=20){
        return "Bronze";
    }
    else if(saldo >= 21 && saldo <=50){
        return "Prata";
    }
    else if(saldo >= 51 && saldo <= 80){
        return "Ouro";
    }
    else if(saldo >= 81 && saldo <= 90){
        return "Diamante";
    }
    else if(saldo >= 91 && saldo <=100){
        return "Lendario";
    }
    else if(saldo > 100){
        return "Imortal";
    }
}
