// number of subregions
const firstRound = Array.from(
    {length: 8},
    (item, index) =>  `64.${index}`) ;

const secondRound = Array.from({length: 4}, (item, index) => `32.${index}`);

const sweetSixteen = Array.from({ length: 2 }, (item, index) => `16.${index}`);

const eliteEight = ['8.0'];

const regionals = [
    secondRound,
    sweetSixteen,
    eliteEight
];

const finalFour = [
    '4.0',
    '4.1',
    '2.0'
];

const Rounds = [
    firstRound,
    secondRound,
    sweetSixteen,
    eliteEight
];

export { Rounds, regionals, finalFour};

// export { firstRound, regionals, secondRound, sweetSixteen, eliteEight, finalFour }