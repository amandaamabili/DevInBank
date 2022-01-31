## Sobre o Projeto


 Implementar uma API REST para simular dados bancários. 

<p align="right">(<a href="#top">back to top</a>)</p>



### Construído com

### BACK

* [Typescript](https://www.typescriptlang.org/)
* [Swagger](https://swagger.io/)
* [Multer](https://www.npmjs.com/package/multer)
* [Express](https://expressjs.com/)
* [NodeJs](https://nodejs.org/en/)




### Pré-requisitos

### BACK

* npm
  ```sh
  npm install npm@latest -g
  ```
  * NodeJs
  ```sh
  npm install nodejs -g
  ```
  * Typescript
  ```sh
  npm install -g typescript
  ```

### Instalação



2. Clone o repositório
   ```sh
   git@github.com:https://github.com/amandaamabili/DevInBank.git
   ```
3. Instale Pacotes NPM ou Yarn
   ```sh
   npm install 
   ```
   ```sh
   yarn
   ```

4. Rodando o Servidor
<ul> 
  <li> 
   Abra o terminal na pasta do arquivo
   </li>
  <li> 
   Ela responderá na porta 3337
   </li></ul>

```sh
yarn dev  
   ```

Coloque os headers Accept e ContentType para json em todas as requisições de API

A API tem os seguintes entrypoints:

=> User

```sh
(GET)     http://0.0.0.0:8000/users/
(GET)     http://0.0.0.0:8000/users/{id}
(POST)    http://0.0.0.0:8000/user/
(PUT)     http://0.0.0.0:8000/user/{id}
(DELETE)  http://0.0.0.0:8000/user/{id}
   ```
   
GET obtém uma lista de usuários ou obtém os dados de um usuário.

A API retorna um JSON com o seguinte formato:

```sh
   {
    id: uuid,
    nome: string,
    cpf: string,
    email: string
    }
   ```
   
POST adiciona um novo usuário, passe-o pelo corpo da requisição com o seguinte formato: 
 
 ```sh
   {
    nome: string,
    cpf: string,
    email: string
    }
   ```
A api retornará a empresa completa como o id atribuído.

PUT altera uma empresa existente, passe o id na URL e a os dados do usuário completo pelo corpo da requisição de acordo com o formato: 
 
 ```sh
   {
    id: uuid(o mesmo passado na URL),
    nome: string,
    cpf: string,
    email: string
    }
   ```
A api retornará a empresa completa que foi salva.

DELETE remove um usuário existente, passe o id na URL.

A API retornará a lista das empresas que sobraram (igual ao GET).

```sh
   {
    id: uuid,
    nome: string,
    cpf: string,
    email: string
    }
   ```
 
