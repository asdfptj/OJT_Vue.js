// 아직 브라우저에서 지원하지 않는다.
import { num, onAdd, longNameFunction as long } from './A08_ExportModule'

// default로 넘어온 값은 임의의 이름으로 설정해 사용가능하다.
// 즉 onAdd로 넘어온 값을 abc라는 이름으로 사용하겠다.
import abc from './A09_DefaultModule';

console.log(num);
console.log(onAdd(10, 20));
console.log(long());


console.log(abc(100, 299));