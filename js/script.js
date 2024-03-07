const zucchine = [
  {
    varieta: 'Zucchina nera di Milano',
    peso: 100,
    lunghezza: 20
  },
  {
    varieta: 'Romanesca',
    peso: 80,
    lunghezza: 15
  },
  {
    varieta: 'Ortolana',
    peso: 70,
    lunghezza: 12
  },
  {
    varieta: 'Zucchina napoletana',
    peso: 110,
    lunghezza: 11
  },
  {
    varieta: 'Zucchina tonde',
    peso: 109,
    lunghezza: 22
  },
  {
    varieta: 'Zucchina pâtisson',
    peso: 130,
    lunghezza: 13
  },
  {
    varieta: 'Zucchina giallo',
    peso: 140,
    lunghezza: 14
  },
  {
    varieta: 'Zucchina rugoso friulano',
    peso: 90,
    lunghezza: 15
  },
  {
    varieta: 'Zucchina Crookneck',
    peso: 122,
    lunghezza: 17
  },
  {
    varieta: 'Zucchina trombetta',
    peso: 166,
    lunghezza: 18
  }
];

const arrayZuc = [];
zucchine.forEach((element, index) => {
  console.log('elemento: ', element);
  const {peso} = element;
  console.log('peso: ', peso);
  arrayZuc[index] = peso;
  
  console.log('array: ', arrayZuc[index]);
});


const pesoTotZucchine = arrayZuc.reduce( (totale, numero) => {
  console.log('>>>>>> ', totale);
  return totale + numero;
})
console.log(pesoTotZucchine);