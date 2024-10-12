let grades = {
  April: [88, 56, 55, 97, 100, 88, 100, 98],
  Tammy1: [78, 46, 92, 84, 55, 74, 89, 80],
  Ben: [77, 59, 89, 47, 57, 83, 90, 89],
  Garry: [54, 90, 84, 88, 39, 73, 67, 79],
  Tammy2: [86, 49, 90, 77, 89, 92, 88, 75]
}

let findHardestTest = function (object) {
  let testScores = [];

  for (const key in object) {
    for (let i = 0; i < object[key].length; i++) {

      testScores.push({
        Student: key,
        Test: `Test ${i + 1}`,
        Score: object[key][i]
      })
    }
  }

  let testGroups = Object.groupBy(testScores, ({ Test }) => Test);

  let testGroupScores = [];

  for (const test in testGroups) {
    let scoreGroups = testGroups[test];
    let testScoreTotals = scoreGroups.map(function (obj, i, arr) {
      return arr[i].Score;
    });
    testGroupScores.push(testScoreTotals);
  };


  let testAverages = testGroupScores.map(function (arr, i, arrs) {
    let testAverages = arr.reduce(function (acc, num) {
      return acc += num;
    }, 0);

    return testAverages;
  });

  let lowestAverageScore = Math.min(...testAverages);

  let hardestTest = testAverages.map(function (num, i, arr) {
    if (lowestAverageScore === num) {
      return true;
    } else {return false;}
  });

  return `The hardest test is Test #${hardestTest.indexOf(true) + 1}.`
}

console.log(findHardestTest(grades));
