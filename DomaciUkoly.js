/*
DU 1:
Spočítejte svůj měsíční příjem víte-li, že pracujete 7 hodin denně se mzdou 265 Kč na hodinu. 
Řekněme, že měsíc má 21 pracovních dní.
*/

let hodinovaMzda = 265
let denniVyplata = hodinovaMzda * 7
let mesicniPrijem = denniVyplata * 21

console.log
("Měsíční příjem činí " + mesicniPrijem + " Kč.")

/*
DU 2:
Pokud pracujete na živnostenský list, můžete si odečíst 60% příjmů jako paušál a ze zbytku zaplatíte 15% daň. 
Spočítejte jak velkou daň zaplatíte ze své výplaty. 
Pomocí funkce Math.floor zaokrouhlete výsledek dolů na celé koruny.
*/

let pausal = mesicniPrijem / 100 * 60
let zakladDane = mesicniPrijem - pausal
let dan = Math.floor (zakladDane / 100 * 15)

console.log
("Daň činí " + dan + " Kč.")


/*
DU 3:
Délka filmu
V programu kin se často uvádí délka filmu v minutách. Například rozšířená verze filmu Pán prstenů: Dvě věže trvá 223 minut. 
My bychom ovšem délku filmu raději věděli v hodinách a minutách. 
Za použití funkcí a operátorů z této lekce spočítejte, kolik hodin a minut trvá film Pán prstenů: Dvě věže.
HINT: Zbytek po dělení %
*/

let hodiny = Math.floor (223 / 60)
let zbytek = 223 % 60

console.log
("Film Pán prstenů: Dvě věže trvá " + hodiny + " hodiny a " + zbytek + " minut.")


/*
DU 4:
Email
a) Vytvořte řetězec obsahující vaši e-mailovou adresu.
b) Sestavte emailovou adresu tak, že sečtete dohromady vaše křestní jméno, znak tečka, vaše příjmení a koncovku @mujmail.com.
*/

let krestniJmeno = "Eliška"
let mujEmail = "eliska.foxx@gmail.com"

console.log
("Jmenuji se " + krestniJmeno + " a můj e-mail je: " + mujEmail + ".")



let jmeno = "eliska"
let bodka = "."
let prijmeni = "foxx"
let email = "@mujmail.com"

console.log
(jmeno + bodka + prijmeni + email)

