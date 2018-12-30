<template>
  <div class="home">
    <el-container>
      <el-header style="height:50px;">
        <el-row>
          <el-col :span="8">后台管理系统</el-col>
          <el-col :span="8">&nbsp;</el-col>
          <el-col :span="8">
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="iconfont icon-icon_zhanghao"></i>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>基本资料</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="300px">
          <el-menu
            default-active="2"
            text-color="#DDD"
            active-text-color="#FFF"
            background-color="#38383E"
            border="1px solid transparent"
          >
            <router-link to="main">
              <el-menu-item index="1">
                <!-- <i class="iconfont icon-user"></i>
                <i class="iconfont icon-home1"></i>-->
                <div>
                  <i class="iconfont icon-wxbzhuye"></i>控制台
                </div>
                <!-- <i class="iconfont icon-setting1"></i>
                <i class="iconfont icon-setting"></i>
                <i class="iconfont icon-books1"></i>
                <i class="iconfont icon-leaf"></i>
                <i class="iconfont icon-users1"></i>
                <i class="iconfont icon-menuunfold"></i>
                <i class="iconfont icon-menufold"></i>
                <i class="iconfont icon-books"></i>
                <i class="iconfont icon-users"></i>
                <i class="iconfont icon-books2"></i>-->
              </el-menu-item>
            </router-link>
            <router-link to="article">
              <el-menu-item index="2">
                <div>
                  <i class="el-icon-tickets"></i>文章
                </div>
              </el-menu-item>
            </router-link>
          </el-menu>
        </el-aside>
        <el-main style="padding:15px;">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted: function() {}
};
</script>
<style lang="less">
a {
  display: block;
  text-decoration: none;
}
a:hover {
  color: #aaa;
}
.router-link-active {
  text-decoration: none;
  color: #fff;
}
.el-header {
  line-height: 50px;
  background-color: #fff;
  color: #333;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  .el-row {
    text-align: right;
  }
  .el-row .el-col:first-child {
    text-align: left;
  }
}
.el-aside {
  background-color: #38383e;
  color: #fff;
  height: calc(100vh - 50px);
}
.el-main {
  background-color: #f0f0f0;
  padding: 15px;
}
.el-menu {
  .el-menu-item {
    text-align: left;
    div {
      width:150px;
      margin:auto;
    }
    i {
      vertical-align: inherit;
      margin-right: 10px;
    }
  }
}
</style>

