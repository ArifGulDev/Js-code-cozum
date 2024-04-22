//1.Soru: Verilen bir dizideki sayıların toplamını bulan bir JavaScript fonksiyonu yazın.
//const numbers = [3, 7, 11, 5, 9];

const sumArray = (array) => {
  let total = 0;
  for (let num of array) {
    total += num;
  }
  return total;
};

const numbers = [3, 7, 11, 5, 9];
console.log(sumArray(numbers));

//2.Soru: Verilen bir dizi içindeki en büyük ve en küçük sayı arasındaki farkı bulan bir JavaScript fonksiyonu yazın.
//const numbers2 = [4, 7, 2, 9, 1, 6, 5];

const hesaplama = (array) => {
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return max - min;
};

const numbers2 = [4, 7, 2, 9, 1, 6, 5];
console.log(hesaplama(numbers2));

//3.Soru: Bir dizi verildiğinde, bu dizinin elemanlarını tersine çeviren bir JavaScript fonksiyonu yazın.
//const numbers3 = [1, 2, 3, 4, 5];

const numbers3 = [1, 2, 3, 4, 5];

const tersineCevirme = (array) => {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
};
tersineCevirme(numbers3);
console.log(numbers3);

//4.Soru: Bir dizideki tüm negatif sayıları filtreleyen ve geri kalan sayıları içeren bir JavaScript fonksiyonu yazın.
//const numbers4 = [3, -1, 7, -5, 2, -8, 4];

const numbers4 = [3, -1, 7, -5, 2, -8, 4];
const negatifFiltreleme = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (0 <= array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
console.log(negatifFiltreleme(numbers4));

//5.Soru: Verilen bir dizideki en büyük sayıyı bulan bir JavaScript fonksiyonu yazın.
//const numbers5 = [3, 7, 2, 9, 1, 6, 5];

const numbers5 = [3, 7, 2, 9, 1, 6, 5];

const findMax = (array) => {
  let maxx = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxx) {
      maxx = array[i];
    }
  }
  return maxx;
};

console.log(findMax(numbers5));

//6.Soru: Bir string içindeki tüm harflerin sayısını hesaplayan bir JavaScript fonksiyonu yazın. Fonksiyon, büyük-küçük harf ayrımı yapmamalıdır.
//const str = "Merhaba Dunya";

const countLetters = (str) => {
  let count = 0;
  for (const char of str) {
    if (char !== " ") {
      count++;
    }
  }
  return count;
};

const str = "Merhaba Dunya";
console.log(countLetters(str));

//7.Soru: Verilen bir sayının faktöriyelini hesaplayan bir JavaScript fonksiyonu yazın. Faktöriyel, pozitif bir tam sayının kendisi ile 1 arasındaki tüm tam sayıların çarpımıdır.

const factorial = (number) => {
  let result = 1;
  for (let i = number; i > 1; i--) {
    result *= i;
  }
  return result;
};

console.log(factorial(10));
