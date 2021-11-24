# Checklist:
- [ ] Operação A
- [ ] Operação B
- [ ] Operação C

------------------------------------------------------------------------------------------------------------

## Parte 1 - Backend 
Desenvolvimento de um JavaScript (NodeJS) que escute na porta 8080 e responda às seguintes operações:

#### Operação A
Executar HTTP - POST em /ordenaLista que recebe no body o JSON no seguinte formato:
{

​	listas: {
​		salaN: [ 1, 5, 7, 8 ],
​		salaS: [ “a”, “x”, “n” ] 
​	} 

}
Onde salaN é uma lista de números variados e salaS é uma lista de string variadas.

Exemplos:
A resposta deve retornar o mesmo objeto, porém com as listas ordenas

------------------------------------------------------------------------------------------------------------

#### Operação B
Executar HTTP - GET em /interlace? que recebe no body o JSON no seguinte formato:
{

​	intervaloA: [ 20, 40 ],
​	intervaloB: [ 10, 60 ]

}
O intervalo A e B são listas compostas de apenas 2 números. O programa deve verificar se os intervalos se interlaçam ou sobrepõe e responder true ou false

Exemplos:
- intervalos A [20, 40] e B [ 10, 19 ] deve responder false
- intervalos A [20, 40] e B [ 10, 20 ] deve responder true
- intervalos A [10, 20] e B [ 20, 30 ] deve responder true
- intervalos A [10, 20] e B [ 40, 50 ] deve responder false

------------------------------------------------------------------------------------------------------------

## Parte 2 - Frontend 
Pontos importantes: o desenvolvimento pode ser feito utilizando frameworks ou não. Isso fica a critério do próprio desenvolvedor. Não esqueça de colocar um README no projeto explicando como executa a aplicação.

#### Operação C
Fazer uma página web simples para poder fazer as chamadas da Parte 1 A e B descritas acima e exibir os devidos resultados da execução.