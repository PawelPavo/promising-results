
// ========== Primise.then() chaining ==========

// // slowMath.add(6, 2)
// slowMath.add(1, 1)
//     .then((wynik) => {
//         console.log(wynik)
//         return slowMath.multiply(wynik, 2)
//     }).then((wynik) => {
//         console.log(wynik)
//         return slowMath.divide(wynik, 4)
//     }).then((wynik) => {
//         console.log(wynik)
//         return slowMath.subtract(wynik, 3)
//     }).then((wynik) => {
//         console.log(wynik)
//         return slowMath.add(wynik, 98)
//     }).then((wynik) => {
//         console.log(wynik)
//         return slowMath.remainder(wynik, 2)
//     }).then((wynik) => {
//         console.log(wynik)
//         return slowMath.multiply(wynik, 50)
//     }).then((wynik) => {
//         console.log(wynik)
//         return slowMath.remainder(wynik, 40)
//     }).then((wynik) => {
//         console.log(wynik)
//         return slowMath.add(wynik, 32)
//     }).then((wynik) => {
//         console.log(`The final result is ${wynik}.`)
//     })

 
// ========== Async/Await ==========

const doMath = async () => {
    try {
        // let wynik = await slowMath.add(6, 2);
        let wynik = await slowMath.add(1, 1)
        console.log(wynik);

        wynik = await slowMath.multiply(wynik, 2)
        console.log(wynik)

        wynik = await slowMath.divide(wynik, 4);
        console.log(wynik);

        wynik = await slowMath.subtract(wynik, 3);
        console.log(wynik);

        wynik = await slowMath.add(wynik, 98);
        console.log(wynik);

        wynik = await slowMath.remainder(wynik, 2);
        console.log(wynik);

        wynik = await slowMath.multiply(wynik, 50);
        console.log(wynik);

        wynik = await slowMath.remainder(wynik, 40);
        console.log(wynik);

        wynik = await slowMath.add(wynik, 32);
        console.log(`The final result is ${wynik}.`);

    } catch (error){
        console.log(error)
    }
}
doMath();