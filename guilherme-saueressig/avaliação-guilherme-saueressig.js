const dados = require('./dados.json');

class Funcionario {
    constructor(nome, cargo, antSalario, novoSalario){
      this.nome = nome
      this.cargo = cargo
      this.antSalario = antSalario
      this.novoSalario = novoSalario
    }
}

let i = 0;
let pessoa = [];

dados.forEach(function (dados){
    if (demitido = false) {
        let nomeFunc = dados.nome;
        let cargoAtual = " ";
        let salarioAtual = 0;
        let taxaPerc = 0;
        let anoInicio = '';
        var anoInicioRegex = ('\d[4]', 'i');
        
        cargos.forEach(function (cargos){
            if (atual = false){
            } else {
                cargoAtual = cargos.nome;
                salarioAtual = Number (cargos.salarioAtual);
                anoInicio = Number (cargos.admissao.match(anoInicioRegex));
                taxaPerc = Number (cargos.percentual);
                salarioAntigo = salarioAtual;
                salarioNovo = salarioantigo * (1+taxaPerc);
                salarioNovo = salarioAtual * ((1 + 0.03)**(2022-anoInicio));
            }
        })
        pessoa[i] = new Funcionario(nomeFunc,cargoAtual,salarioAntigo,salarioAtual);
    }
    
    else {
        let nomeFunc = dados.nome;
        let cargoAtual = '';
        let salarioAntigo = 0;
        let salarioAtual = 0;
        pessoa[i] = new Funcionario(nomeFunc,cargoAtual,salarioAntigo,salarioAtual);
    }
});

let j = 0;
pessoa.forEach(function()
    {
        if (pessoa[j].salarioAtual > 0)
        {
            console.log(`Seguem os dados atualizados do funcionário: \nNome: ${pessoa[j].nomeFunc} \nCargo: ${cargoAtual}\nAntigo salário: R$ ${salarioAntigo}\nNovo salário: R$ ${salarioAtual}`);
        }
        else {
            console.log(`Não foi possível calcular o salário do funcionário ${pessoa[j].nomeFunc}`);
        }
        j++;
    }
)
