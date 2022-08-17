<template>
  <div>
    <h1>Vue Component</h1>

    <A02Attribute></A02Attribute><br>
    <A01Binding></A01Binding>
  </div>
</template>

<script>
// 외부 CSS 파일을 IMPORT로 가져와 사용
import 'bootstrap/dist/css/bootstrap.css';

import A01Binding from './components/A01Binding.vue';
import A02Attribute from './components/A02Attribute.vue';

export default {
  name: 'App',
  components: { A01Binding, A02Attribute }
}
</script>

<style>
  /* node_modules 는 생략하고 그 이후 패스만 적으면 된다 */
  /* @import 'bootstrap/dist/css/bootstrap.css' */
</style>
