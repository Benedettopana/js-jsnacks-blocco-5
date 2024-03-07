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


// SNACK 1
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
console.log(pesoTotZucchine, ' gr');

// /SNACK 1

// SNACK 2
const arrayZucchineBig = [];
const arrayZucchineLit = [];
let totBig = 0;
let totLit = 0;
zucchine.forEach((element) =>{
  const {lunghezza} = element;
  const {peso} = element;

  if(lunghezza > 15){
    arrayZucchineBig.push(element);
    totBig += peso;

    
  }else {
    arrayZucchineLit.push(element);
    totLit += peso;
  }
})

console.log('Il peso delle zucchine grandi è: ' + totBig + 'gr');
console.log('Il peso delle zucchine piccole è: ' + totLit+ 'gr');
// /SNACK 2

// SNACK 3
const prova = 'ciao';

function reverseStr(myString) {
  return myString.split('').reverse().join('');
  
}

console.log(reverseStr('ciao'));
// /SNACK 3
// SNACK 4
const arrayUno = ['a', 'b', 'c'];
const arrayDue = [1,2,3];
arrayUno.forEach((element, index) => {
  
  arrayUno.splice(index + index + 1 ,0,arrayDue[index]);
  console.log(arrayUno);
})

console.log(arrayUno);

// /SNACK 4
// SNACK 5

// /SNACK 5