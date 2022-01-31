A aplicação que deverá ser realizada individualmente, deve contemplar os seguintes requisitos:

[X]Criar uma aplicação com Node e Express;
[]Utilizar Swagger para documentação dos endpoints;
[X]A aplicação deverá conter um sistema de rotas organizadas por versões;
[X]Criar um arquivo JSON de fake database users, com os seguintes itens:
[{
  id: Number,
  name: String,
  e-mail: String
}]


[x]Criar um arquivo JSON de fake database financial, com os seguintes itens:
[{
  id: Number || UniqueID,
  userId: Number,
  financialData: [{
    id: Number,
    price: Number,
    typesOfExpenses: String,
    date: Date,
    name: String
  }]
}]

Módulo de usuários:
[X]Criar endpoint do tipo POST, com todos os campos obrigatórios. Realizar a validação caso falte algo dos campos de acordo com o JSON solicitado;
[X]Criar endpoint do tipo PATCH, possibilitando realizar alterações nos dados do usuário com exceção do ID. Deve também ter as demais validações, pois se um valor dentro do JSON não existir de acordo com o que foi enviado, deve ter uma validação informando que o tal campo não existe. Para acessar o usuário, deve-se utilizar o id do usuário no PATH;
[X]Criar endpoint do tipo GET, que receba o id do usuário no PARAMS do endpoint, no formato user/:id. so o usuário não exista, retorne o devido erro.

Módulo financeiro:
[x]Criar um endpoint do tipo POST, que contenha o id de usuário no PATH, e receba um arquivo XLSX, exemplo finance/:userId.
[X]Criar um endpoint do tipo POST, que contenha o id de usuário no PATH, e receba um arquivo XLSX, exemplo finance/:userId. O mesmo deve conter 4 colunas, sendo price, typesOfExpenses, date e name, onde cada um representa respectivamente o preço gasto, o tipo de gasto, quando foi gasto e qual o nome do pagamento. Todos os campos devem ser obrigatórios, sendo necessário retornar um erro adequado quando o usuário tentar enviar o arquivo diferente.
[x] O envio do arquivo XLSX deve ser vinculado ao userId. O id deve ser criado dinamicamente, e caso já exista com o userId cadastrado, deve ser inserido os novos dados dentro do financialData.
[X]Criar um endpoint do tipo DELETE, que receba o userId e financialId, utilizando o formato finance/:userId/:financialId. Se qualquer um dos valores for inválido, retornar um erro adequado.
[X]Criar um endpoint do tipo GET, que receba o userId e que retorne o total de valor por mês/ano, caso exista.[xx] Utilize o seguinte formato finance/:userId, e caso o userId não exista, retorne o erro adequado. [X]Caso o userId exista e não possua valores inseridos, retorne uma resposta adequada informando o usuário.
Utilize também a possibilidade de filtro utilizando query, que no qual não é obrigatório o uso para utilizar o endpoint. Passe via query o typesOfExpenses e através desse valor, fazer o cálculo baseado nesse filtro;
[]Crie um documento readme.md, com todas as explicações de uso necessárias para que qualquer desenvolvedor consiga utilizar o código da aplicação.
