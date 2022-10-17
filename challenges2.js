// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
  let frequency = 0;
  let count = 0;
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (phoneNumber[index] < 0 || phoneNumber[index] > 9) {
      return ('não é possível gerar um número de telefone com esses valores');
    }
    count = 0;
    for (let index2 = 0; index2 < phoneNumber.length; index2 += 1) {
      if (phoneNumber[index2] === phoneNumber[index]) {
        count += 1;
      }
      if (count > frequency) {
        frequency = count;
      }
    }
  }
  if (frequency >= 3) {
    return ('não é possível gerar um número de telefone com esses valores');
  }
  let finalResult = '';
  let result = ['('];
  phoneNumber = phoneNumber.toString().split(',');
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (index === 2) {
      result.push(') ');
    } else if (index === 7) {
      result.push('-');
    } if (phoneNumber) {
      result.push(phoneNumber[index].toString());
    }
  }
  finalResult = result.join('');
  return finalResult;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC)) {
    return false;
  }
  if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(drinks) {
  let reg = /\d+/g;
  let results = drinks.match(reg);
  let sum = 0;
  for (let index in results) {
    if (drinks) {
      sum += parseInt(results[index], 10);
    }
  }
  if (sum === 1) {
    return (`${sum} copo de água`);
  }
  return (`${sum} copos de água`);
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
