<template>
  <div>
    <el-dialog title="提示" :visible.sync="isEditor" :before-close="handleClose" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>f哎垃圾法拉框架的
      <!-- <el-form ref="form" :model="dataInfo" lable-width="980px">
        <el-form-item label="文章标题">
          <el-input :model="dataInfo.title"></el-input>
        </el-form-item>
        <el-form-item label="副标题">
          <el-input :model="dataInfo.subtitle"></el-input>
        </el-form-item>
        <el-form-item label="文章标签">
          <el-checkbox-group>
            <el-checkbox v-for="item in dataInfo.label" :key="item" label="测试" name="test"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="优先级">
          <el-input :model="dataInfo.sort"></el-input>
        </el-form-item>
        <el-form-item label="文章内容">
          <Markdown v-model="dataInfo.markdown"></Markdown>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button @click="cencel">取消</el-button>
        </el-form-item>
      </el-form> -->
  </div>
</template>

<script>
import Markdown from "@/components/Markdown";
import { mapGetters } from "vuex";

export default {
  components: { Markdown },
  data() {
    return {
      
    };
  },
  methods: {
    onSubmit() {},
    async handleClose(done) {
      await this.$store.commit('CLEAN_INFO');
    },
    async cencel() {
      await this.$store.commit("CLEAN_INFO");
    }
  },
  computed: {
    dataInfo() {
      return this.$store.getters.dataInfo;
    },
    ...mapGetters(['dataInfo','isEditor'])
  }
};
</script>

