const arr = ['a', 'b', 'c']; // перечень объектов по порядку. Порядок с 0

arr[10] = '3456';
console.log(arr[10]);

const arrObj = {
	a: 'a',
	1: 'b',
	2: 'c',
  abc: {
      df: [{},{}]
        def: {

        }
  }
};

const b = 'b';

// arrObj.b = '1234';
arrObj['b'] = '1234';

console.log(arrObj['b']);
console.log(arrObj.b);

// const obj = { a: 1, b: 2 };

const obj = {
	Anna: 500,
	Alice: 800,
};



// Homework

const storeName = 'Biznes';
const storeDescription = {
    budget: 10000,
    employees: ['Andrey', 'Danil', 'Orifjon'],
    products: {
        asal: "25000",
        honey: "14000",
    },
    open: true
};
