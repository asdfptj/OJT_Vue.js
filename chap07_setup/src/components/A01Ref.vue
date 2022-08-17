<template>
  <div class="card-body" id="app">
    <h3>{{ title }} / {{ initTitle }}</h3>

    <div>
      Ref 변수의 값을 사용하는 경우 묵시적으로 unwrap 하여 표시한다.<br />
      <br />

      Name: {{ name }}<br />
      Age: {{ age }}<br />
      Title: {{ initTitle }}<br />
      Array:
      <span v-for="(item, index) in arr" :key="index">{{ item }} &nbsp;</span
      ><br />
      User: {{ user.address }} / {{ user.age }} / {{ user.address }}<br />
      <br />

      <button @click="changeName">Name</button>
      <button @click="changeAge">Age</button>
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
import { ref } from "vue";
export default {
  props: ["title"],
  setup(props) {
    console.log(this); //  window
    let name = "NolBu"; // 함수 내부의 지역변수
    const changeName = () => (name = "HungBu"); // 변경 안됨

    // reactive 객체, 감시자 함수가 포함된 Wrapper 객체
    // reactive 객체의 값이 변경되면 화면 재 갱신
    // VIEW에서는 이름 그대로 사용(unWrap이 자동), 함수 내부에서느 .value로 참조
    const age = ref(30);
    const changeAge = () => (age.value = 200);

    // props
    let initTitle = ref(props.title);
    const changeTitle = () => (initTitle.value = "A01 Setup Component");

    // 객체
    const arr = ref([10, 20]);
    const user = ref({ name: "HungBu", age: 30 });

    const addArray = () => {
      const random = Math.ceil(Math.random() * 100);
      arr.value.push(random);
    };
    const updateArray = (index, value) => (arr.value[index] = value);
    const deleteArray = (index) => arr.value.splice(index, 1);

    const addObject = (key, value) => (user.value[key] = value);
    const updateObject = (key, value) => (user.value[key] = value);
    const deleteObject = (key) => delete user.value[key];

    return {
      name,
      changeName,
      age,
      changeAge,
      initTitle,
      changeTitle,
      arr,
      addArray,
      updateArray,
      deleteArray,
      user,
      addObject,
      updateObject,
      deleteObject,
    };
  },
};
</script>