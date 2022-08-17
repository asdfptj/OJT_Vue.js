<template>
  <div class="card-body" id="app">
    <h3>{{ title }}</h3>

    <div>
      Ref 변수의 값을 사용하는 경우 묵시적으로 unwrap 하여 표시한다.<br />
      <br />

      Name: {{ name }}<br />
      Age: {{ state.age }}<br />
      Title: {{ state.initTitle }} <br />
      Array:
      <span v-for="(item, index) in state.arr" :key="index" ``
        >{{ item }} &nbsp;</span
      >
      <br />
      User: {{ state.user.name }} / {{ state.user.age }} /
      {{ state.user.address }}<br />
      <br />

      <button @click="changeName">Name</button>
      <button @click="changeAge(100)">Age</button>
      <button @click="changeTitle">Title</button>
      <br />

      <button @click="addArray">Add Array</button>
      <button @click="updateArray(0, 200)">Update Array</button>
      <button @click="deleteArray(0)">Delete Array</button>
      <br />

      <button @click="addObject('address', 'Seoul')">Add Object</button>
      <button @click="updateObject('address', 'Busan')">Update Object</button>
      <button @click="deleteObject('address')">Delete Object</button>
    </div>
    <br />
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  props: ["title"],
  setup(props) {
    let x = 10;
    x = 20;
    console.log(x);
    //  reactive는 단일값을 사용 할 수 없음 => 변경 시 에러 발생
    let name = ref("NolBu");
    const changeName = () => (name = "HungBu");

    //  반응형 데이터, 여러 값을 하나로 묶어 사용하고자 할 경우
    //  ref와는 달리 value가 필요 없음.
    const state = reactive({
      age: 20,
      initTitle: props.title,
      arr: [10, 20],
      user: { name: "HungBu", age: 20 },
    });
    // 하나 이상 정의해도 문제 없음. 필요에 따라 관련된 항목을 묶어서 사용

    const changeAge = () => (state.age = 300);
    const changeTitle = () => (state.initTitle = "Hello World");

    const addArray = () => {
      const random = Math.ceil(Math.random() * 100);
      state.arr.push(random);
    };
    const updateArray = (index, value) => (state.arr[index] = value);
    const deleteArray = (index) => state.arr.splice(index, 1);

    const addObject = (key, value) => (state.user[key] = value);
    const updateObject = (key, value) => (state.user[key] = value);
    const deleteObject = (key) => delete state.user[key];

    return {
      name,
      changeName,
      state,
      changeAge,
      changeTitle,
      addArray,
      updateArray,
      deleteArray,
      addObject,
      updateObject,
      deleteObject,
    };
  },
};
</script>