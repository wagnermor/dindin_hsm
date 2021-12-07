# API Documentação_HSM

## Introdução
A API para consulta de cursos e postagens para a Plataforma de Cursos de Educação Finaceira DINDIN.

## Visão Geral
API gerada na plataforma de desenvolvimento da DIGIBEE.
A integração é realizada através de serviços disponibilizados como Web Services. O modelo empregado é simples: há uma URL (endpoint) para todas as operações, que recebe os GETS via HTTPS.

## Funcionalidades

* Consulta de todos os cursos;
* Consulta de todos os posts;
* Consulta de cursos por ID;
* Log de Erro: Parâmetros Incorretos.

## Endpoint e Parâmetros

### EndPoint:

<https://test.godigibee.io/pipeline/gama/v1/apigrupo3>

### Parâmetros:

#### Parâmetro utilizado: 
* Rota
#### Formas de consultas por valores:

 * cursos
</br>Retorna a consulta de todos os cursos no Banco de dados.
 
 * posts
 </br>Retorna a consulta de toda as postagens no Banco de dados.
  
 * cursosId 
 </br>Retorna a consulta de um cursos no Banco de dados. É preciso declarar o id do curso para executar a consulta.

## Autenticação
Para consulta de cursos e postagens

## Requisições

Formato Json codificados com UTF-8;

## Códigos de Erro
Código | Mensagem       |Decrição
:-----:|:--------------:|:------------------------------------:
200    | Sucesso        |Método foi executado com sucesso
401    | Não autorizado |API Key Inválida
404    |Não encontrado  |URL Inválida
500    |Erro interno    |Ocorreu uma instabilidade no Gateway, tente novamente em alguns segundos.


