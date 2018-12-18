<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { api } from "@/api";
export default {
  methods: {
    api() {
      api.get().then(res => {
        console.log(res);
      })
    }
  },
  mounted: function () {
    this.api()
  }
}
</script>

