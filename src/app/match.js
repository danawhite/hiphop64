var pairings = [
    [1, 16],
    [8, 9],
    [5, 12],
    [4, 13],
    [6, 11],
    [3, 14],
    [7, 10],
    [2, 15]
];

const groups = [
    {
        name: "Run-DMC",
        seed: "1",
        region: "East"
    },
    {
        name: "Smif-N-Wessun",
        seed: "2",
        region: "East"
    },
    {
        name: "EPMD",
        seed: "3",
        region: "East"
    },
    {
        name: "Jungle Brothers",
        seed: "4",
        region: "East"
    },
    {
        name: "Run-DMC",
        seed: "5",
        region: "East"
    },
    {
        name: "Smif-N-Wessun",
        seed: "6",
        region: "East"
    },
    {
        name: "EPMD",
        seed: "7",
        region: "East"
    },
    {
        name: "Jungle Brothers",
        seed: "8",
        region: "East"
    },
    {
        name: "Run-DMC",
        seed: "9",
        region: "East"
    },
    {
        name: "Smif-N-Wessun",
        seed: "10",
        region: "East"
    },
    {
        name: "EPMD",
        seed: "11",
        region: "East"
    },
    {
        name: "Jungle Brothers",
        seed: "12",
        region: "East"
    },
    {
        name: "Run-DMC",
        seed: "13",
        region: "East"
    },
    {
        name: "Smif-N-Wessun",
        seed: "14",
        region: "East"
    },
    {
        name: "EPMD",
        seed: "15",
        region: "East"
    },
    {
        name: "Jungle Brothers",
        seed: "16",
        region: "East"
    }
];

const createMatchups = (matchups, pairing) => {
    let matchup = [];

    pairing.forEach(seed => {
        groups
            .filter(group => {
                return group.seed == seed;
            })
            .map(group => {
                matchup.push(group);
            });
    });

    matchups.push(matchup);

    return matchups;
};

const result = pairings.reduce(createMatchups, []);

console.log(result);