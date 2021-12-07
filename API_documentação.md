# API Documentação_HSM

## Introdução
A API para consulta cursos e posts

## Visão Geral
API gerada na plataforma de desenvolvimento da DIGIBEE.
A integração é realizada através de serviços disponibilizados como Web Services. O modelo empregado é simples: há uma URL (endpoint) para todas as operações, que recebe os GETS via HTTPS.

## Funcionalidades

* Consulta de todos os cursos;
* Consulta de todos os posts;
* Consulta de cursos por ID;
* Log de Erro: Curso não encontrado;
* Log de Erro: Post não encontrado;

## Endpoint e Parâmetros

### EndPoint:

<https://test.godigibee.io/pipeline/gama/v1/apigrupo3>

### Parâmetros:
#### Foi utilizado o parâmetro Rota e dentro dele são utilizadas 3 formas de consultas:

 * cursos
 * posts
 * cursosId

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


