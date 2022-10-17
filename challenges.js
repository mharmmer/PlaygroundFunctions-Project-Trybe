// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayNomes) {
  let lastName = '';
  let firstName = '';
  let resultName = '';
  for (let index = 0; index < arrayNomes.length; index += 1) {
    if (index === 0) {
      firstName = arrayNomes[index];
    } else if (index === (arrayNomes.length - 1)) {
      lastName = arrayNomes[index];
    }
  }
  resultName = `${lastName}, ${firstName}`;
  return resultName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = wins * 3;
  points += ties;
  return points;
}

// Desafio 6
function highestCount(values) {
  let highestRepeated = 0;
  let highestValue = Math.max(...values);
  for (let index1 in values) {
    if (highestValue === values[index1]) {
      highestRepeated += 1;
    }
  }
  return highestRepeated;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceM1 = Math.abs(cat1 - mouse);
  let distanceM2 = Math.abs(cat2 - mouse);
  if (distanceM1 < distanceM2) {
    return ('cat1');
  } if (distanceM2 < distanceM1) {
    return ('cat2');
  }
  return ('os gatos trombam e o rato foge');
}

// Desafio 8
function fizzBuzz(numberArray) {
  let stringArray = [];
  for (let index = 0; index < numberArray.length; index += 1) {
    stringArray.push('bug!');
    if (numberArray[index] % 15 === 0) {
      stringArray.pop();
      stringArray.push('fizzBuzz');
    } else if (numberArray[index] % 5 === 0) {
      stringArray.pop();
      stringArray.push('buzz');
    } else if (numberArray[index] % 3 === 0) {
      stringArray.pop();
      stringArray.push('fizz');
    }
  }
  return stringArray;
}

// Desafio 9
function encode(secret) {
  let stringAux = '';
  for (let index = 0; index < secret.length; index += 1) {
    if (secret[index] === 'a') {
      stringAux += '1';
    } else if (secret[index] === 'e') {
      stringAux += '2';
    } else if (secret[index] === 'i') {
      stringAux += '3';
    } else if (secret[index] === 'o') {
      stringAux += '4';
    } else if (secret[index] === 'u') {
      stringAux += '5';
    } else stringAux += secret[index];
  }
  return stringAux;
}

function decode(secret) {
  let stringAux = '';
  for (let index in secret) {
    if (secret[index] === '1') {
      stringAux += 'a';
    } else if (secret[index] === '2') {
      stringAux += 'e';
    } else if (secret[index] === '3') {
      stringAux += 'i';
    } else if (secret[index] === '4') {
      stringAux += 'o';
    } else if (secret[index] === '5') {
      stringAux += 'u';
    } else stringAux += secret[index];
  }
  return stringAux;
}

// Desafio 10
function techList(array, string) {
  let arrayObject = [];
  if (!array || !string || array.length === 0) {
    return ('Vazio!');
  }
  array = array.sort();
  for (let index = 0; index < array.length; index += 1) {
    arrayObject.push({
      tech: array[index],
      name: string,
    });
  }
  return arrayObject;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
