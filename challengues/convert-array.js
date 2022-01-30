const electionVotes = [
  "Harry",
  "Harry",
  "Donald",
  "Joe",
  "Joe",
  "Albert",
  "Albert",
  "Joe",
  "Donald",
  "Donald",
  "Donald",
  "Donald",
  "Mary",
  "Mary",
  "Jow",
  "Jow",
];
const tallyVotes = (votes) =>
  votes.reduce((acc, current) => {
    return {
      ...acc,
      [current]: acc[current] ? acc[current] + 1 : 1,
    };
  }, {});

console.log(tallyVotes(electionVotes));

/**
 * Expected
 * {
 *  Joe: 4,
 *  Donald: 2
 *  ...
 * }
 */
