
<template>
  <div>
    <el-table ref="datatable" :data="dataList" tooltip-effect="dark" border stripe>
      <el-table-column
        v-if="serialShow === true"
        type="index"
        width="55"
        align="center"
        header-align="center"
        :index="serial"
      ></el-table-column>
      <el-table-column
        show-overflow-tooltip
        v-if="!item.hidden && !item.filters"
        v-for="(item, index) in headerOptions"
        :key="index"
        :label="item.label"
        :prop="item.prop"
        :header-align="item.headerAlign"
        :align="item.align"
        :sortable="item.sort"
        :min-width="item.minWidth || 150"
      >
        <template slot-scope="scope">
          <div
            v-if="scope.column.property == 'isVisible'"
          >{{scope.row[scope.column.property]?'是':'否'}}</div>
          <div
            v-else-if="scope.column.property == 'source'"
          >{{scope.row[scope.column.property] === 1?'原创':scope.row[scope.column.property] === 2?'转载':'翻译'}}</div>
          <div
            v-else-if="scope.column.property == 'releaseTime'"
          >{{scope.row[scope.column.property] | parseTime('{y}-{m}-{d}')}}</div>
          <div v-else>{{scope.row[scope.column.property] || '无'}}</div>
        </template>
      </el-table-column>
      <el-table-column
        :fixed="isFixed && 'right'"
        label="操作"
        header-align="center"
        align="center"
        width="180"
      >
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope)">编辑</el-button>
          <el-button size="mini" type="danger" @click="del(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    serialShow: {
      type: Boolean,
      default: true
    },
    isFixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      headerOptions: this.$store.state.datatable.headerOptions,
      // dataList: this.$store.state.datatable.dataList,
      // dataTotal: this.$store.state.datatable.dataTotal,
      pageSize: this.$store.state.datatable.pageSize,
      pageIndex: this.$store.state.datatable.pageIndex,
      pageLength: this.$store.state.datatable.pageLength
    };
  },
  beforeMount() {
    this.getTableList();
    // console.log(this.$store.state.datatable.dataList);
  },
  methods: {
    serial(index) {
      return index;
    },
    async getTableList() {
      var url = this.url;
      if (url) {
        var obj = {
          url: url,
          type: "list",
          pageSize: this.pageSize,
          pageIndex: this.pageIndex
        };
        await this.$store.dispatch("axiosGet", obj);
      }
    },
    async edit(scope) {
      await this.$store.commit("DATA_INFO", scope.row);
    }
  },
  computed: {
    ...mapGetters(["dataList", "dataTotal"])
  }
};
</script>