const selectRandomCards = <T>(array: T[]): [T, T] => {
    const indexOne = Math.floor(Math.random() * array.length);
    const indexTwo = Math.floor(Math.random() * array.length);

    return [array[indexOne], array[indexTwo]];
};

export default selectRandomCards;
