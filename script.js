// 1a
const jPDinos = [
    "Velocirpators",
    "Tyrannosaurus Rex",
    "Dilophosaurus"
];

// 1b
function seeDinos(a, ...b){
    console.log(a);
    console.log(b);
};
seeDinos(...jPDinos);

console.log(`=`.repeat(25));

// 2a
const jPCharacters = {
    alanGrant: "Sam Neil",
    ellieSattler: "Laura Dean",
    ianMalcolm: "Jeff Goldblum"
};

// 2b
seeCharacters = ({ellieSattler}) => {
    console.log({ellieSattler});
}

seeCharacters(jPCharacters);

console.log(`=`.repeat(25));

// Bonus
// 3a
const jurassicParkMovies = [
    {
        one: "Jurassic Park",
        two: "The Lost World: Jurassic Park",
        three: "Jurassic Park III"
    },
    {
        four: "Jurassic World",
        five: "Jurassic World: Fallen Kingdom",
        six: "Jurassic World: Domination"
    }
];

// 3b
seeJPMovies = ({one, two, three}, {four, five, six}) => {
    console.log(one)
    console.log(two)
    console.log(three)
    console.log(four)
    console.log(five)
    console.log(six)
}

seeJPMovies(...jurassicParkMovies);