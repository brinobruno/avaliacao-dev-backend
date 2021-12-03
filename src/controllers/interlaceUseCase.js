 function isInterlace(request, response, next) {
  const fullA = [10, 40]
  const fullB = [40, 50]

  let result = Boolean

  function findCommonElements2(arrayA, arrayB) {

    let obj = {}
         
        for (let i = 0; i < arrayA.length; i++) {
            if(!obj[arrayA[i]]) {
                const element = arrayA[i]
                obj[element] = true
            }
        }

        for (let j = 0; j < arrayB.length; j++) {
        if (obj[arrayB[j]]) {
            return result = true
        }
    }

    return result = false
}

  const finalResult = (findCommonElements2(fullA, fullB))
  response.send(finalResult)
    
  next()
}

module.exports = isInterlace