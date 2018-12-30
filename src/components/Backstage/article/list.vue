<template>
  <div>
    <dataTable :url="test" :isFixed="isFixed" v-bind:isEditor="isEditor"></dataTable>
    <modals></modals>
    <div>{{isEditor}}</div>
  </div>
</template>
<script>
import dataTable from "@/components/Datatable";
import modals from "./add";
import { mapGetters } from "vuex";
export default {
  components: {
    dataTable,
    modals
  },
  data() {
    return {
      test: "/blog/list",
      isFixed: true,
      headerOptions: [
        {
          label: "id",
          prop: "id",
          hidden: true,
          headerAlign: "center",
          align: "center",
          width: ""
        },
        {
          label: "名字1",
          prop: "name",
          hidden: false,
          headerAlign: "center",
          align: "center",
          width: ""
        },
        {
          label: "名字2",
          prop: "name1",
          hidden: false,
          headerAlign: "center",
          align: "center",
          width: ""
        },
        {
          label: "数量1",
          prop: "amount1",
          hidden: false,
          headerAlign: "center",
          align: "center",
          width: ""
        },
        {
          label: "数量2",
          prop: "amount2",
          hidden: false,
          headerAlign: "center",
          align: "center",
          width: ""
        },
        {
          label: "数量3",
          prop: "amount3",
          hidden: false,
          headerAlign: "center",
          align: "center",
          width: ""
        }
      ]
    };
  },
  beforeMount() {
    this.setHeader();
  },
  mounted() {},
  methods: {
    async setHeader() {
      await this.$store.dispatch("setHeader", this.headerOptions);
    }
  },
  computed: {
    ...mapGetters(["isEditor"])
  }
};
</script>