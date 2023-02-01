# IGNITE-SHOP
- Esse é um projeto de uma API REST com o NodeJs e utilizando `TypeScript`.
- A proposta da API é ser uma simulação de um Ecommerce, com operações de criação, deleção, atualização e leitura de dados de um banco de dados de produtos.

## Tecnologias utilizadas
- TypeScript;
- Express;
- TypeOrm;
- JsonWebToken;
- Sqlite3;
- Joi;

## Requisitos para rodar a aplicação:
    - NodeJs > V12.x;
    - Npm ou Yarn para o manejo das dependências;
    - Uma aplicação para o teste das rotas, tal como Insomnia ou Postman;
    - Git Bash ou outro terminal, para clonar o repositório;
    - Uma aplicação para a vizualização do código, tal como `VsCode` ou `Atom`;

> Obs.: A API também está disponível no Heroku através do link https://ignite-shop.herokuapp.com

## Instalação em Localhost
O passo a passo à seguir serve no caso de se você quiser testar a api rodando em servidor local:

1. Crie uma pasta no seu computador para clonar o repositório

2. Com a pasta criado, execute o seguinte comando:
```console
git clone https://github.com/DavidEsdrs/ignite-shop.git
```
Esse comando clonará o repositório para dentro da pasta aberta.

3. Execute o seguinte comando:
- Caso você utilize o `npm`:
```console
npm install
```
- Caso você utilize o `yarn`:
```console
yarn
```
Esse comando irá instalar todas as dependências necessárias para o projeto funcionar;

4. Com as dependências instaladas, é preciso criar um arquivo para algumas configurações necessárias:
- Na raiz do projeto, crie um arquivo `.env.dev` para configuração do projeto;
- O arquivo `.env.dev` deve conter o seguinte:

```env
PORT=<INSIRA AQUI A PORTA QUE VOCÊ DESEJA UTILIZAR PARA RODAR A APLICAÇÃO>
TYPEORM_ENTITIES="./src/entities/*.ts"
TYPEORM_MIGRATIONS="./src/migrations/**/*.ts"
TYPEORM_DATABASE="src/database/data/database.db"
```
> Obs.: Caso o parâmetro PORT não for fornecido a porta padrão utilizada será a 5555

5. Com tudo pronto, basta iniciar a api:
- Caso você utilize o `npm`
```console
npm run dev
```
- Caso você utilize o `npm`
```console
yarn dev
```

## Rotas da API

### Para registro de um novo produto: 

```http
POST /products
```

Corpo da requisição:

```json
{
    "title": "Camisa do Real Madrid 22/23 Home",
    "price": 299.99,
    "description": "Camisa do Real madrid para jogos em casa na temporada 22/23"
}
```
O código acima é um exemplo do corpo da requisição para criação de um produto, todos os parâmetros (`title`, `price` e `description`) são obrigatórios, e caso o corpo da requisação não siga o padrão exigido a api irá devolver um objeto de `erro` com o devido `status code` e informações sobre o erro.

A API devolverá um objeto contendo todas as informações do produto criado, exemplo:
```json
{
	"product": {
		"id": "f5fdc3ea-1044-478d-bb6e-6ac5fd83a471",
		"image_path": "DEFAULT",
		"title": "Camisa Real Madrid 22/23",
		"price": 399.99,
		"description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
		"created_at": "2023-01-31T06:21:00.000Z",
		"updated_at": "2023-01-31T06:21:00.000Z"
	}
}
```

### Para listagem de todos os produtos:

```http
GET /products
```

A API devolverá um objeto contendo os campos tal como no exemplo abaixo:
```json
{
	"products": [
		{
			"id": "1e97ebd8-bc0d-4782-aaff-9e51a79fd593",
			"image_path": "DEFAULT",
			"title": "Camisa Palmeiras 22/23",
			"price": 399.99,
			"description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
			"created_at": "2023-01-31T06:17:21.000Z",
			"updated_at": "2023-01-31T06:17:21.000Z"
		},
		{
			"id": "8ee7f1cf-4eee-4725-91e6-08cde366902e",
			"image_path": "DEFAULT",
			"title": "Camisa Barcelona 22/23",
			"price": 399.99,
			"description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
			"created_at": "2023-02-01T00:50:53.000Z",
			"updated_at": "2023-02-01T00:50:53.000Z"
		}
	]
}
```

Opcionalmente, você poderá passar como parâmetro os campos que você deseja receber. Para tal, no corpo da requisição, envie um objeto contendo o seguinte padrão:

```json
{
    "select": {
        "title": true,
        "price": true
    }
}
```
Caso seja passado os parâmetros acima, a API responderá como no exemplo abaixo:
```json
{
	"products": [
		{
			"id": "1e97ebd8-bc0d-4782-aaff-9e51a79fd593",
			"title": "Camisa Palmeiras 22/23",
			"price": 399.99,
		},
		{
			"id": "8ee7f1cf-4eee-4725-91e6-08cde366902e",
			"title": "Camisa Barcelona 22/23",
			"price": 399.99,
		}
	]
}
```

> Obs.: Todos as chaves são opcionais e selecionáveis, com exceção da chave `id`, que, por padrão, sempre será retornada pela API juntamento com o objeto do `product`

### Para recuperar apenas um produto:

```http
GET /products/:id
```
O parâmetro `id` representa o produto que você deseja recuperar.

Exemplo: 
```http
GET /products/1e97ebd8-bc0d-4782-aaff-9e51a79fd593
```
A requisição acima irá devolver o seguinte corpo:
```json
{
    "id": "f5fdc3ea-1044-478d-bb6e-6ac5fd83a471",
	"image_path": "DEFAULT",
	"title": "Camisa Real Madrid 22/23",
	"price": 399.99,
	"description": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
	"created_at": "2023-01-31T06:21:00.000Z",
	"updated_at": "2023-01-31T06:21:00.000Z"
}
```

Opcionalmente, assim como na rota anterior, você poderá passar como parâmetro os campos que você deseja receber. Para tal, no corpo da requisição, envie um objeto contendo o seguinte padrão:

```http
GET /products/1e97ebd8-bc0d-4782-aaff-9e51a79fd593
```
```json
{
    "select": {
        "title": true,
        "price": true
    }
}
```
A requisição acima devolverá um objeto com o seguinte corpo:
```json
{
    "id": "f5fdc3ea-1044-478d-bb6e-6ac5fd83a471",
	"title": "Camisa Real Madrid 22/23",
	"price": 399.99
}
```

> Obs.: Todos as chaves são opcionais e selecionáveis, com exceção da chave `id`, que, por padrão, sempre será retornada pela API juntamento com o objeto do `product`

### TODO: Documentar as outras rotas da API