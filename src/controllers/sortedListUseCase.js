function handleListSorting(request, response, next) {
  const { listas } = request.body
  salaN = listas.salaN
  salaS = listas.salaS

  salaN.sort((a, b) => a - b)
  salaS.sort()

  console.log(salaN)
  console.log(salaS)
  
  next()
}

module.exports = handleListSorting