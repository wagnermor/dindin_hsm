let teste;
const url = `https://test.godigibee.io/pipeline/gama/v1/apigrupo3?rota=cursos`;

let getCursos;

let retorno = [];
fetch(url,{
  method: 'GET',
  headers: {
    apikey: '2HbHkp2VibcMiazQMlo8zoB4BeobonoW'
  }
})
.then((res) => res.json())
.then((dados) => {
  let pathImg = [];
  let titulos = [];
  let descricao = [];
  getCursos = dados

  const img = document.createElement('img')
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  
  const wrap = document.getElementById("wrapp")
  const cursos = document.getElementById("cursos");

  for(let i = 0; i < getCursos.data.length; i++) {
    titulos.push(getCursos.data[i].thumb_img)
    titulos.push(getCursos.data[i].title)
    titulos.push(getCursos.data[i].description)
    cursos.options[cursos.options.length] = new Option(getCursos.data[i].title);
    img.innerHTML = "img src='getCursos.data[i].thumb_img"
    // h2.innerHTML = 
    wrapp.appendChild(document.createElement('img')).src='getCursos.data[i].thumb_img'
  }
  console.log(getCursos.data);
  
  console.log(cursos.value);
  
  const btn_pesquisa = document.getElementById("bnt_pesquisa");
  btn_pesquisa.addEventListener("click", function() {
    for(let i =0; i < getCursos.data.length; i++) {
      
    }
  })
});
