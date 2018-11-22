<template>
    <div class="blog">
        <section>
            <div class="blog-card">
                <p class="card-title">
                    卡片标题
                </p>
                <p class="card-time">
                    2018-01-02
                </p>
                <p class="card-abstract">
                    卡品简介
                </p>
                <div class="card-reply">
                    <div class="reply-air">
                        10
                    </div>
                </div>
                <ul class="card-label">
                    <li>
                        <span class="label-tag">
                            标签
                        </span>
                    </li>
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
      .card-abstract {
        margin-top: 20px;
        color: #000;
        font-size: 16px;
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
    }
  }
}
</style>
