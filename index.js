// Задача 1.

//a. објект кој што опишува книга

let harryPotter = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    published: "26 June 1997 – 21 July 2007",
    genre: "Fantasy",
    numberOfBooks: "7",
    mainCharacters: {
        characterOne: "Harry Potter",
        characterTwo: "Hermione Granger",
        characterThree: "Ron Weasley ",
    }
}

console.log(harryPotter)

// б. објект кој што опишува автомобил

let gClass = {
    model: "Mercedes-Benz G-Class",
    year: "2024",
    color: "Black",
    engine: {
        type: "V8",
        fuelType: "Gasoline",
        horsePower: "577",
    }

}

console.log(gClass)

// в. објект кој што опишува студент

let studentDescripton = {
    name: "Angel",
    surname: "Spasov",
    age: "19",
    from: "Strumica",
    grades: {
        Math: "B",
        English: "A",
        Anatomy: "A",
        Biology: "A",
    }
}

console.log(studentDescripton)

// Задача 2.

//а. Да се напише jамка (for loop) кој што ќе итерира броеви од 0 до 10. Броевите да се испечатат во конзола.

for (let i = 0; i <=10; i++) {
    console.log(i)
}

//б. Декларирајте две променливи start и end и доделете им нумерички вредности (на пр., 3 и 10). Користете јамка(for loop)
// за повторување низ броевите од почеток до крај. Внатре во јамката, проверете дали моменталниот број е парен. Ако е парен,
// додајте го во вкупниот број. По јамката, испечатете го збирот на парни броеви.

let start = 3;
let end = 10;
sumEvenNums = 0;

for(let i = start; i <=end; i++) {
    if(i % 2 ===0) {
        sumEvenNums +=i;
    }

}

console.log(start, "+", end, "+ all the even numbers between 3 and 10 =", sumEvenNums)

// в. Декларирајте објект со име person со следниве својства:

// name: Your name
// age: Your age
// city: Your city
// Користете јамка (for-in) за да итерирате низ својствата на објектот на person и да ги испечатите во следниот формат: property: value

// Пр. name: Jovan age: 27 city: Bitola

let person = {
    name: "Angel",
    age: "19",
    city: "Strumica",
}

for (let key in person) {
    console.log(key + ":" + person[key])
}

// г. Декларирајте низа со име colors со најмалку три различни имиња на бои (на пр., "red", "green", "blue"). Користете јамка
// (for-of) за повторување низ низата бои и печатење на имињата на боите заедно со бројот на карактери што ги содржи бојата.

// Пр. 3 red 5 green 4 blue

let colors = ["red", "green", "blue", "purple", "yellow"]
for (let color of colors) {
    console.log(color.length, color)
}

// Задача 3.
// a. Да се декларира променлива count на која што ќе и доделите нумеричка вредност 5. Користете јамка (while) за да ги испечатите броевите
// од count надолу до 1.

let count = 5

while (count >= 1) {
    console.log(count)
    count--
}

// б. Напишете програма што одбројува од 10 до 1. Користете јамка do-while и вклучете услов да излезе од циклусот кога одбројувањето ќе
// достигне 5. Испечатете го секој број во конзолата.

let num = 10
do {
    console.log(num)
    num--

    if (num === 5) {
        break
    }
}
while (num >= 0)

console.log(num)

// Задача 4.

let students = [

    {
        name: "Angel",
        surname: "Spasov",
        age: 19,
        address: {
            city: "Belgrade",
            zipCode: 101801,
            street: {
                name: "nekoja Ulica",
                number: 21,
                zipCode: 101801
            }
        }
    },
    {
        name: "Mimi",
        surname: "Ignjatovic",
        age: 29,
        address: {
            city: "Belgrade",
            zipCode: 101801,
            street: {
                name: "nekoja druga Ulica na vtor student",
                number: 28,
                zipCode: 101801
            }
        }
    },

]
console.log(students[0].address.city)
console.log(students[1].address.street["name"]);

// Задача 5.a

for (i = 1; i <= 100; i += 4) {
    console.log(i)
}

// Задача 5.b
for (i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// Задача 6
let cities = ["Novi Sad", "Skopje", "Beograd", "Strumica", "Tetovo", "Delchevo", "Veles", "Sofia", "Ohrid", "Vienna"]
for (let city in cities) {
    console.log(cities[city]);
}


