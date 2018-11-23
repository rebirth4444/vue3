<template>
  <div class="blogpage">
    <aside class="hidden-sm-and-down">
      <span class="label-tag"> 标签 </span>
    </aside>
    <div class="container"><Blog /></div>
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
//sm 768   //xs 787  //md992  //lg1200  //xl 1920

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
    width: 30px;
    height: 25px;
    line-height: 30px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    background-color: rgb(24, 144, 255);
    border-radius: 3px;
    box-shadow: 1px 1px 1px 1px rgb(24, 144, 255);
  }
  @media screen and (max-width: 768px) {
    .container {
      padding-left: 0;
      width: 100%;
    }
    aside {
      display: none;
    }
  }
}
</style>
