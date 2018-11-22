<template>
    <div class="blogpage">
        <aside>
            <span class="label-tag">
                标签
            </span>
        </aside>
        <div class="container">
            <Blog />
        </div>
    </div>
</template>

<script>
import Blog from "@/components/blog.vue";

export default {
  name: "blogpage",
  components: {
    Blog
  }
};
</script>
<style lang="less">
.blogpage {
  min-width: 100vw;
  min-height: 100vh;
  background-color: #eae3d5;
  overflow: hidden;
  aside {
    float: left;
    width: 300px;
  }
  .container {
    width: 600px;
    margin: auto;
    padding-left: 300px;
  }
  .label-tag {
    display: inline-block;
    padding: 0 10px;
    margin: 20px;
    width: 25px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    color: #fff;
    background-color: rgb(24, 144, 255);
    border-radius: 3px;
    box-shadow: 1px 1px 1px 1px rgb(24, 144, 255);
  }
}
</style>
