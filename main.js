const staff = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

let percorso = './';

//stampare tutti i nomi


for (let i = 0; i < staff.length; i++) {
  //a ogni giro del ciclo ottengo il singolo oggetto
  let elementoCorrente = staff[i];
  console.log(elementoCorrente.nome)

  document.getElementById('card').innerHTML +=
  `
  <div class="card my-3 mx-1";>
    <img src=${percorso + elementoCorrente.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${elementoCorrente.name}</h5>
      <p class="card-text">${elementoCorrente.role}</p>
      
    </div>
  </div>
  `
}