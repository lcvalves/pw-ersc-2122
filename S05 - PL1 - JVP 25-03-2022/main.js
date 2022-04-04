// objectivo: gerar um certo numeros definidos pelo "total"
// 1º gerar numeros -> plural -> lista de numeros
// 2º tamanho do array / numero maximo de elementos
// 3º especificar max numeri
// 4º especificar min numero

//* numeros 	-> maxArray 5
//* estrelas 	-> maxArray 2
const extrairNumeros = (maxArray, min, max) => {
  const numeros = [];

  // gerar numeros para a lista

  // enquando que o "numeros" nao tiver o tamanho pretendido pelo "total"
  while (numeros.length < maxArray) {
    //gerar um numero novo, dentro do intervalo de MIN e MAX
    // Math.floor() = Returns the greatest integer less than or equal to its numeric argument.
    // Math.random() = Returns a pseudorandom number between 0 and 1.
    const numAux = Math.floor(Math.random() * (max - min + 1)) + min;

    // se numero gerado ainda nao existir na lista
    if (numeros.indexOf(numAux) < 0) {
      // adicionar numero gerado à lista
      numeros.push(numAux);
    }
  }

  // devolver a lista dos numeros gerados
  return numeros;
};

const ordenaChave = (array) => {
  // res : -1 a  < b -> o A passa para o proximo index
  // res :  1 a  > b -> o B passa para o index anterior
  // res :  0 a == b - ficam como está
  return array.sort((a, b) => a - b).join(" - ");
  // [1, 2, 3, 4, 5]
  // '1 - 2 - 3 - 4 - 5'
};

// function adicionarChaveHTML (chave) { // JS 5

// }

// JS 6 +
const adicionarChaveHTML = (chave) => {
  console.log(chave);
  const TableBody = myTable.tBodies[0];
  // criar um novo elemento, que é a linha para a tabela
  const linha = document.createElement("tr"); // TR -> Table Row
  // escrver o html que vai para dentro dessa linha
  linha.innerHTML = `
	<td>
		${chave.numeros.join(" - ")} ** ${chave.estrelas.join(" - ")}
	</td>
	<td> numeros ordenados </td>
	<td> estrelas ordenadas </td>
  `;
  // adicionar a linha ao body da tabela
  TableBody.appendChild(linha);
};

const geraChave = () => {
  // estado inicial da chave vazia
  const chaveGerada = {
    numeros: [],
    estrelas: [],
  };
  // gerar a numeros da chave
  chaveGerada.numeros = extrairNumeros(5, 1, 50);
  // gerar a estrelas da chave
  chaveGerada.estrelas = extrairNumeros(2, 1, 12);
  adicionarChaveHTML(chaveGerada);
};
