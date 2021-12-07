let teste;
const url = `https://test.godigibee.io/pipeline/gama/v1/apigrupo3?rota=cursos`;

let mapCursos;

let retorno = [];
fetch(url,{
  method: 'GET',
  headers: {
    apikey: '2HbHkp2VibcMiazQMlo8zoB4BeobonoW'
  }
})
.then((res) => res.json())
.then((dados) => {
  let titulos = [];
  mapCursos = dados
  // console.log(mapCursos.data)
  const cursos = document.getElementById("cursos");
  for(let i = 0; i < mapCursos.data.length; i++) {
    titulos.push(mapCursos.data[i].title)
    cursos.options[cursos.options.length] = new Option(mapCursos.data[i].title);
  }
  console.log(titulos);
  
  const bnt_pesquisa = document.getElementById("bnt_pesquisa");
  addEventListener(onclick, () => {

  })

})