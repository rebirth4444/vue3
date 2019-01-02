<template>
  <div class="blog">
    <section>
      <div class="blog-card">
        <p class="card-title">卡片标题</p>
        <!--
          <p class="card-time">
              2018-01-02
          </p>
        -->
        <p class="card-abstract">
          卡品简介 <a href="www.baidu.com">查看详情</a>
        </p>
        <!--
          <div class="card-reply">
              <div class="reply-air">
                  10
              </div>
          </div>
        -->
        <div class="card-time-point">
          <div class="time-point">
            <i class="item-point point-one"></i>
            <i class="item-point point-two"></i>
            <i class="item-point point-three"></i>
            <p>2018-01-02</p>
          </div>
        </div>
        <ul class="card-label">
          <li><span class="label-tag">标签</span></li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "blog"
  //   props: {
  //     list: Array
  //   }
};
</script>
<style lang="less">
.blog {
  background-color: #f8f9f3;
  margin: 0 20px;
  margin-top: 40px;

  section {
    border: 1px solid transparent;
    box-shadow: 1px 1px 5px #888;
    padding: 10px;
    text-align: center;
    .blog-card {
      border: 1px dashed #888;
      .card-title {
        margin-top: 50px;
        color: #00bfff;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
      }
      .card-time {
        margin-top: 10px;
        color: #888;
        font-size: 14px;
      }
      .card-time-point {
        position: relative;
        margin-top: 50px;
        height: 40px;
        .item-point,
        p {
          display: inline-block;
          position: absolute;
        }
        .point-one {
          background: url("../assets/img/start.png") no-repeat;
          width: 20px;
          height: 40px;
          left: -19px;
        }
        .point-two {
          background: url("../assets/img/middle.png") repeat;
          width: 150px;
          height: 34px;
          left: -9px;
        }
        .point-three {
          background: url("../assets/img/last.png") no-repeat;
          background-size: 12px;
          width: 20px;
          height: 40px;
          left: 141px;
        }
        p {
          left: 20px;
          margin: 0;
          line-height: 35px;
        }
        &:after {
          overflow: hidden;
        }
      }
      .card-abstract {
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
        color: #000;
        font-size: 16px;
        text-align: left;
        a {
          font-size: 12px;
          color: #888;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .card-reply {
        margin-top: 20px;
        .reply-air {
          width: 45px;
          height: 45px;
          line-height: 45px;
          text-align: center;
          border-radius: 50%;
          background-color: #696969;
          color: #fff;
          margin: auto;
          font-size: 18px;
        }
      }
      .card-label {
        list-style: none;
        text-align: left;
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>
