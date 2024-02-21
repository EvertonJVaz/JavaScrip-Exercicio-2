/*
Criar uma lista de estudantes e, cada estudante dentro dessa lista,
deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const estudantes = [
   {
    nome : 'Lucio',
    notaA: 50,
    notaB: 80,
   },
   {
    nome : 'Joana',
    notaA: 80,
    notaB: 90,
   },
   {
    nome : 'Robson',
    notaA: 80,
    notaB: 70,
   },
   {
    nome : 'Ana',
    notaA: 50,
    notaB: 60,
   }
]


function notas(estudante) {
    let media = ((estudante.notaA + estudante.notaB ) / 2)

    if( media >= 70) {
       return (`A média de ${estudante.nome} é de: ${media}
        Parabéns você está aprovado para o curso!`)
    } else {
        return (`A média de ${estudante.nome} é de: ${media}
        Não foi dessa vez, estude mais para a próxima!`)
    }
    
    
}
    
for (let estudante of estudantes) {
    let mensagem = notas(estudante)
    alert(mensagem)
}


