<template>
  <div>
    <el-dialog :title="showTitle" :visible.sync="isEditor" :before-close="handleClose" width="80%">
      <el-form ref="form" :model="dataInfo" lable-width="980px">
        <el-form-item label="文章标题">
          <el-input :model="dataInfo.title"></el-input>
        </el-form-item>
        <el-form-item label="副标题">
          <el-input :model="dataInfo.subtitle"></el-input>
        </el-form-item>
        <el-form-item label="文章标签">
          <div class="checkbox">
            <el-checkbox-group v-model="checkList">
              <!-- <el-checkbox v-for="item in dataInfo.label" :key="item" label="测试" name="test"></el-checkbox> -->
              <el-checkbox v-model="checked" label="测试" name="test"></el-checkbox>
            </el-checkbox-group>
          </div>
        </el-form-item>
        <el-form-item label="优先级">
          <el-input :model="dataInfo.sort"></el-input>
        </el-form-item>
        <el-form-item label="文章内容">
          <Markdown v-model="dataInfo.markdown || ''"></Markdown>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button @click="cencel">取消</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Markdown from "@/components/Markdown";
import { mapGetters } from "vuex";

export default {
  components: { Markdown },
  props: ["title"],
  data() {
    return {
      showTitle: "",
      checkList:['测试']
    };
  },
  mounted() {
    this.showTitle =
      (Object.values(this.dataInfo).length == 0 ? "新增" : "修改") + this.title;
  },
  methods: {
    onSubmit() {},
    async handleClose(done) {
      await this.$store.commit("CLEAN_INFO");
    },
    async cencel() {
      await this.$store.commit("CLEAN_INFO");
    }
  },
  computed: {
    dataInfo() {
      return this.$store.getters.dataInfo;
    },
    ...mapGetters(["dataInfo", "isEditor"])
  }
};
</script>
<style lang="less">
.el-form-item {
  margin-bottom: 0;
  .checkbox {
    width: 100%;
    display: inline-block;
    text-align: left;
  }
}
</style>


