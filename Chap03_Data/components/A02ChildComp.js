const CompOne = {
  template: `
  <h5>Child Props [변경 불가 - immutable]</h5>
  <div>
    Name: {{name}}<br>
    Age : {{age + 100}}<br>
    Address: {{add}}<br>
    Array: {{arr[0]}} / {{arr[1]}} / {{arr[1]}}<br>
    User: {{user.name}} / {{user.age}} / {{user.address}}<br>
    Method: {{onAdd(10, 20)}}<br>
    isChecked: {{isChecked ? 'TRUE' : 'FALSE'}}<br>
    <br>
    <button @click="changeAddress">Address</button>
  </div>
  `,
  // 받은 배열의 문자열 자체가 변수명이다
  props: ['name', 'age', 'add', 'arr', 'user', 'onAdd', 'isChecked', 'changeAddress'],

}

const CompTwo = {
  template: `
  <h5>Child Props [변경 불가 - immutable]</h5>
  <div>
    Name: {{name}}<br>
    Age : {{age + 100}}<br>
    Address: {{add}}<br>
    Array: {{arr[0]}} / {{arr[1]}} / {{arr[1]}}<br>
    User: {{user.name}} / {{user.age}} / {{user.address}}<br>
    Method: {{onAdd(10, 20)}}<br>
    isChecked: {{isChecked ? 'TRUE' : 'FALSE'}}<br>
    <br>
    <button @click="changeAddress">Address</button>
  </div>
  `,
  // 받은 배열의 문자열 자체가 변수명이다
  props: {
    name: String,     //type만 체크
    age: { type: Number, required: true },
    add: { type: [Number, String], default: 'Unknown' },
    arr: {
      type: Array,
      default: () => ['', ''],      // 참조형 변수의 기본값은 항상 함수의 리턴값으로 지정
      // 값이 안 넘어오는 경우 사용하는 defauld의 값도 체크 대상이 된다
      validator: (value) => value.length > 2
    },
    user: {
      type: Object,
      // javascript 에서는
      // '', 0, Nan, undefined, null, false 값은 모두 false로 취급된다
      default: () => ({ name: '', age: 0 }),
      validator: (valus) => value.name && value.age
    },
    onAdd: {
      type: Function,
      //  함수 자체를 디폴트로 사용한다.
      default() {
        return '값이 존재하지 않습니다'
      },
      validator: (value) => typeof (value(1, 2)) === 'string',
    },
    changeAddress: { type: Function },
    isChecked: { type: Boolean, default: false }
  }

}

