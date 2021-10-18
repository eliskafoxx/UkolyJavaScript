/*
DU 5:
Indians

Zadání je vypsat text písničky Ten Little Indians, tedy toto:
1 little, 2 little, 3 little Indians
4 little, 5 little, 6 little Indians
7 little, 8 little, 9 little Indians
10 little Indian boys.
10 little, 9 little, 8 little Indians
7 little, 6 little, 5 little Indians
4 little, 3 little, 2 little Indians
1 little Indian boy.
Verše nemusí být takhle zarovnané, klidně může být 1, 2, 3 každé na samostatném řádku. Ale když to vypíšete tak,
 jak je to napsané výše, bude to lepší :slightly_smiling_face:
A cílem je samozřejmě vypsat to pomocí cyklů a podmínek, tj. nemít celé verše napsané přímo v kódu.
*/

let indian = 1
let pocetIndianu = 1

for (indian = 1; indian <=10; indian++  && pocetIndianu++ < 10) {
    console.log(indian + " little")
    if (indian === 3 && pocetIndianu === 3) {
        console.log( " Indians")
    }
    else if (indian === 6 && pocetIndianu === 6) {
        console.log(" Indians")
    }
    else if (indian === 9 && pocetIndianu === 9) {
        console.log(" Indians")
    }
}
console.log(" Indian boys")