function isInterlace(request, response, next) {
  const { intervaloA, intervaloB } = request.body

  const fullA = [];
  const fullB = [];

  //Approach: Inserir os números dentro de cada intervalo em um array completo e comparar se houve algum número em comum
  //Subótimo em grandes quantia por excesso de iteração. Ex: intervalo entre números com 5+ casas decimais
  for (let i = intervaloA[0]; i <= intervaloA[1]; i++) fullA.push(i);
  for (let i = intervaloB[0]; i <= intervaloB[1]; i++) fullB.push(i);

  function findCommonElements2(arrayA, arrayB) {

    let obj = {};
         
        for (let i = 0; i < arrayA.length; i++) {
            if(!obj[arrayA[i]]) {
                const element = arrayA[i];
                obj[element] = true;
            }
        }

        for (let j = 0; j < arrayB.length ; j++) {
        if(obj[arrayB[j]]) {
            return true;
        }
    }
    
    return false;
}

  console.log(findCommonElements2(fullA, fullB))
    
  next()
}

module.exports = isInterlace