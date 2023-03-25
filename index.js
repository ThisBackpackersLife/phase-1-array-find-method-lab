// code your solution here
// let record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
// ]

const superbowlWin = record => {   
    const winningGame = record.find(sbWin => sbWin.result === "W");
    return !!winningGame ? winningGame.year : undefined;
};


// if (record.result === "W") {
    //     return record.year
    // } else {
    //     return undefined
    // };

// record.find(superbowlWin);

// function superbowlWin(chiefArray) {
//         const winningGame = chiefArray.find(game => game.result === 'W');
//         return winningGame.year;
// };