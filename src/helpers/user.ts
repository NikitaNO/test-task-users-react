export const arithmeticMean = (list) => list.reduce((item, acc) => {
  acc = acc + item;

  return acc
}, 0) / list.length;

export const isGreatUser = (age, tasksScoreList) =>
  age < 30 && arithmeticMean(tasksScoreList) >= 4 ||
  age >= 30 && arithmeticMean(tasksScoreList) >= 4.33;
