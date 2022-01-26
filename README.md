# Sobre
Faça o fork deste repositório e crie uma branch para sua entrega seguindo o padrão: *nome-ultimoNome*. Para entregar a avaliação, crie uma pasta com mesmo padrão **nome-ultimoNome** e coloque seus arquivos de resposta dentro dela e crie o **PR(Pull Request)**.

**PS:** O arquivo *dados.json* não é para ser alterado e nem movido. Deve permanecer no mesmo local.

1. Dado um cenário onde temos a resposta do servidor com dados de alguns usuários, e precisamos fazer alguns reajustes salariais. Extraia do arquivo **dados.json** esses dados que deveram ser processados, seguindo a regra de négocio:

### Regras de negócio
    [ ] Toda a base de percentuais, serão de acordo com o salário e cargo atual;
    [ ] Adicionar o percentual fixo no atual salário de acordo com o cargo;
    [ ] A cada ano a mais de admissão é acrescido mais 3% no salário;
    [ ] Os calculos só deveram ser feitos para funcionários que ainda estão admitidos;

### Modelo de resposta esperado
Para responder corretamente ao exercicio, será necessário criar um novo objeto de resposta. Nesse objeto devera conter apenas as seguintes informações: **nome**, **cargo**, **antigo salário** e **novo salário**.

### Output de resposta
Fique a vontade para criar uma resposta que mostre de forma simples ao usuário, como por exemplo imprimir algo como exemplo abaixo no console:

"Seguem os dados atualizados do funcionário *nome-funcionario*: <br />
**Cargo:** *cargo-funcionario*,<br />
**Antigo salário:** *R$0.000,00*,<br />
**Novo salário:** *R$0.000,00*"<br />

**PS:** Esse modelo de resposta deverá ser para cada usuário.