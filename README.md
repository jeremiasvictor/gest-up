<br /> <p align="center"> <a href="https://github.com/jeremiasvictor/gest-up"> <img width="500" src="https://github.com/user-attachments/assets/43782ca5-0cc3-4752-95f8-b3396cf67603" alt="GestUp Logo"> </a>

<p align="center"> <strong> GestUp </strong> - Um sistema de gestão de estoque multi-empresa, simples e moderno. </p>

## Sobre o Projeto

A GestUp é uma plataforma web desenvolvida para resolver um problema central do pequeno empreendedor: a gestão de inventário. Diferente de sistemas complexos e caros, o GestUp oferece uma interface limpa, rápida e intuitiva.
O seu principal diferencial é a capacidade multi-empresa, permitindo que um único usuário (como um microempreendedor que possui uma cafeteria e uma loja online) possa gerenciar o estoque de todos os seus negócios a partir de um
único login, de forma totalmente separada e organizada. Esta aplicação foi construída como projeto final da disciplina de Programação Orientada a Objetos.

## Funcionalidades

- Autenticação de usuário: sistema completo de login e registro.
- Gestão multi-empresa: o usuário pode criar e gerenciar múltiplas empresas em uma única conta.
- CRUD de produtos: funcionalidade completa de criar, ler, editar e apagar produtos por empresa.
- Busca instantânea: filtragem de produtos em tempo real na tela de estoque.
- Tema dark/light: toggle para alternar o tema da aplicação, com persistência no localStorage.

## Tecnologias Utilizadas

### Frontend
- TypeScript
- React

### Backend
- Java
- Spring

## Como Executar

Para rodar este projeto, você precisará ter o Frontend e o Backend rodando simultaneamente.

### Pré-requisitos

- Node.js (v18 ou superior)
- Java (JDK) (v17 ou superior)
- Um servidor MySQL rodando localmente (ou via Docker) com um database 'gestup'

#### 1. Clone o repositório
```bash
# clone o repositório todo
git clone https://github.com/jeremiasvictor/gest-up.git

# entre na pasta principal do projeto
cd gest-up
```

#### 2. Execute o backend
```bash
# a partir da pasta 'gest-up', navegue até o backend
cd backend

# configure o banco de dados
#   - inicie seu serviço do MySQL
#   - crie um banco de dados local (ex: 'gestup')
#   - edite o 'src/main/resources/application.properties' com seu usuário e senha do MySQL

# rode a aplicação (pela sua IDE ou via terminal)
# se estiver usando a IDE (IntelliJ/VS Code), basta rodar a classe principal 'GestUpApplication.java'
# se estiver usando Maven no terminal:
./mvnw spring-boot:run
```
O backend estará rodando em http://localhost:8080

#### 3. Execute o frontend

```bash
# abra um NOVO terminal
# a partir da pasta 'gest-up', navegue até o frontend
cd frontend

# instale as dependências
npm install

# rode a aplicação
npm run dev
```
A aplicação estará acessível no seu navegador em http://localhost:5173

## Autores

Este projeto foi desenvolvido com orgulho por:
- <a href="https://github.com/guilhermedevbr06">Guilherme Silva</a>
- <a href="https://github.com/jeremiasvictor">Jeremias Santos</a>
- <a href="https://github.com/dokiskod">Kelvin Bezerra</a>
