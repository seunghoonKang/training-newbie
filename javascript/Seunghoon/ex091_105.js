//세 개의 구분자
function ex91(myStr) {
  let changeAB = [...myStr]
    .map((str) => {
      if (str === "a" || str === "b") return (str = "c");
      return str;
    })
    .join("")
    .split("c");

  changeAB = changeAB.filter((str) => str !== "");

  if (changeAB.length === 0) return ["EMPTY"];
  return changeAB;
}

//배열의 원소만큼 추가하기
function ex92(arr) {
  let result = [];

  for (const num of arr) {
    for (let i = 0; i < num; i++) {
      result.push(num);
    }
  }
  return result;
}

//빈 배열에 추가, 삭제하기
function ex93(arr, flag) {
  let result = [];
  arr.map((num, idx) => {
    if (flag[idx]) {
      for (let i = 0; i < num * 2; i++) {
        result.push(num);
      }
    } else {
      for (let i = 0; i < num; i++) {
        result.pop();
      }
    }
  });
  return result;
}

//배열 만들기 6
function ex94(arr) {
  let result = [];

  arr.forEach((num, idx) => {
    if (result[result.length - 1] === num) {
      result.pop();
    } else {
      result.push(num);
    }
  });

  return result.length === 0 ? [-1] : result;
}

//무작위로 K개의 수 뽑기
function ex95(arr, k) {
  let result = [];
  let deduplicationArr = [...new Set(arr)];
  for (let i = 0; i < k; i++) {
    if (deduplicationArr[i] === undefined) {
      result.push(-1);
    } else {
      result.push(deduplicationArr[i]);
    }
  }
  return result;
}
