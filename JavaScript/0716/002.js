// 문제 : 회사 게시판에는 총 6개의 게시물이 있고, 각각의 게시물에 게시자 데이터를 뽑은 것이 '회사게시판 변수이다.'
회사게시판 = ["이호준", "이호준", "이호준", "김은하", "김은하", "이준근"];

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요? (인원이 유일해야 함)
let a = new Set(회사게시판);
console.log(a.size);
// set.prototype.size : 이 집합의 고유한 요소의 수를 반환 (중복 제거)

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of a) {
  // for...of : 반복가능한 객체의 반복
  // of 앞의 값 : 매번 반복마다 다른 요소의 값이 변수로 지정
  // of 뒤의 값 : 반복 작업을 수행할 배열을 지정
  console.log(
    i,
    회사게시판.filter((e) => e === i)
    // filter() : 주어진 배열의 일부에 대한 얕은 복사본 생성
  );
}

for (const i of a) {
  console.log(i, 회사게시판.filter((e) => e === i).length);
}

let map = new Map();
for (const i of 회사게시판) {
  console.log(map.set(i, (map.get(i) || 0) + 1));
  // 처음 값은 0으로 초기화
  // 이 후 기존 값에 +1을 해주면서 증가
}
