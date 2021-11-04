<template>
  <div class="app-container">
    1231231112aaaa112
    <h1 @click="aaaa()">
      {{ aaa }}
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aaa: "111",
    };
  },
  methods: {
    aaaa() {
      console.log("aaaa2");
    },
  },
};
</script>
