# Avaliação DataOps - E-Aware
Avaliação de DataOps para o cargo de Engenheiro de Dados - E-Aware

Este documento descreve os requisitos e como configurar e rodar o projeto.

## Estrutura
Na pasta src/ existem outras duas pastas, data/ com dois arquivos .csv dos carros e montadoras e a pasta etl/ com o script python e arquivos .js de criação das collections e agregações, ainda há a subpasta processed/ com os resultados obtidos, cars.json, mfact.json (collections brutas) e result.json com os dados agregados e agrupados, sendo este o resultado final na pipeline.

```text
dataops-test/
├── src/
    ├── etl/
    │   ├── populate.py
    │   ├── utils.py
    │   ├── aggregations.mongodb.js
    │   ├── collections.mongodb.js
    │   └── processed/
    │       ├── cars.json
    │       ├── mfact.json
    │       └── result.json
    ├── data/
    │   ├── cars.csv
    │   └── mfact.csv
...
```

## Requisitos
* Python 3
* MongoDB 8

## Executando o projeto
Para configurar e rodar o projeto e ainda exportar os resultados para .json, execute o comando (ambiente Linux):

<pre> source run.sh </pre>

O arquivo run.sh contem todos os passos para executar a pipeline.
Assim é possível verificar o resultado em ./src/database/result.json

Exemplo de funcionamento: https://youtu.be/Yu4F9Lj4WCk