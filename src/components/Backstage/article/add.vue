<template>
  <div>
    <div id="editor">
      <Markdown v-model="formItem.markdown"></Markdown>
    </div>
  </div>
</template>


<script>
import Markdown from "@/components/Markdown";
export default {
  components: { Markdown },
  data() {
    return {
      formItem: {
        markdown: ""
      }
    };
  },
  methods: {
   
  }
};
</script>

