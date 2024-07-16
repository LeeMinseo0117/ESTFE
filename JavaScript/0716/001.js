let m = new Map();

// Map에 값을 넣기
// set메서드는 m에 값을 넣은 결과를 반환해준다.
m.set("하나", "1");
m.set(1, "하나");
m.set(true, 1);
m.set(false, 0);

console.log(m); // {'하나' => '1', 1 => '하나', true => 1, false => 0}

// Map의 값에 접근하기
console.log(m.get("하나")); // 1
console.log(m.get(true)); // 1

// Map의 값이 있는지 확인하기
console.log(m.has("하나")); // true

// Map의 값을 제거하기
console.log(m.delete("하나")); // false
console.log(m.has("하나")); // false
console.log(m); // {1 => '하나', true => 1, false => 0}

// Map의 크기를 확인하기
console.log(m.size); // 3

//Map의 모든 값을 지우기
m.clear();

// let mm = new Map()
// mm.set('하나', m)
// Map(1) {'하나' => Map(3)}
// mm.set('하나', {'one':1, 'two':2})
// Map(1) {'하나' => {…}}

m.set("하나", "1");
m.set(1, "하나");
m.set(true, 1);
m.set(false, 0);

for (const variable of m) {
  console.log(`m을 순회 key : ${variable[0]}`);
  console.log(`m을 순회 value : ${variable[1]}`);

  console.log(variable);
}

let temp = new Map([
  [1, 10],
  [2, 20],
  [3, 30],
  [4, 40],
]);

console.log(temp);

objMap = new Map();
objMap.set("one", 1);
objMap.set("two", 2);
objMap.set("three", 3);

console.log(objMap.size); // 3

obj = { hi: 1, hi2: 2, hi3: 3, hi4: 4 };
const size = Object.keys(obj).length;
console.log(size); // 4

// 메서드체이닝
const arr = [1, 2, 3, 4];

// 기존 배열 arr을 가지고 곱하기 2를 한 새로운 배열을 반환합니다
arr.map((item) => {
  return item * 2;
});

// 위 코드의 결과가 배열이기 때문에 또 .map을 할 수 있습니다.
// 아래처럼 하면 기존 배열인 [2, 4, 6, 8]에 -1을 한 새로운 배열이 나오는 거죠
arr
  .map((item) => {
    return item * 2;
  })
  .map((item) => {
    return item - 1;
  });

const newArr = arr
  .map((item) => {
    return item * 2;
  })
  .map((item) => {
    return item - 1;
  });
console.log(newArr);
