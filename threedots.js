const age = [12, 20, 25, 23, 21];
const age2 = [24, 20, 23, 18];
const age3 = [30, 25, 31, 28];
// const allAge = age.concat(age2).concat(15, 16).concat(age3);
const allAge2 = [...age, ...age2, 5, ...age3];
console.log(allAge2)

// const business = 650;
// const minister = 550;
// const sochib = 450;
const highBalance = [650, 550, 450]
const bigger = Math.max(...highBalance);
console.log(bigger);