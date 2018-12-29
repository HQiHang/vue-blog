<template>
  <div id="edit_blog">
    <div v-if="!submitted">
      <h1>编辑博客</h1>
      <form @submit.prevent="submit">
        <div><span>博客标题：</span><input type="text" placeholder="请填写博客标题" v-model="blog.title"></div>
        <div><span>博客内容：</span><textarea cols="30" rows="8" placeholder="请填写博客内容" v-model="blog.content"></textarea></div>
        <div class="category">
          <span>博客分类：</span>
          <label>诗歌 <input type="radio" value="诗歌" v-model="blog.categories"></label>
          <label>新闻 <input type="radio" value="新闻" v-model="blog.categories"></label>
          <label>散文 <input type="radio" value="散文" v-model="blog.categories"></label>
          <label>小说 <input type="radio" value="小说" v-model="blog.categories"></label>
        </div>
        <div>博客作者：
          <select v-model="blog.author">
            <option v-for="author in authors">{{ author }}</option>
          </select>
        </div>
        <button>保存</button>
      </form>
    </div>

    <div v-if="submitted">
      <h2>编辑成功！</h2>
    </div>

    <div v-if="submitted" id="preview">
      <h3>博客总览</h3>
      <p>博客标题：<span>{{ blog.title }}</span></p>
      <p>博客内容：<span>{{ blog.content }}</span></p>
      <p>博客分类：<span v-for="category in blog.categories">{{ category }}</span></p>
      <p>博客作者：<span>{{ blog.author }}</span></p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "EditBlog",
    data(){
      return {
        authors: ["李白", "杜甫", "白居易", "李清照"],
        id: this.$route.params.id,
        blog: {},
        submitted: false
      }
    },
    methods: {
      submit(){
        axios.put("/post/" + this.id + ".json", this.blog).then(() => {
          this.submitted = true;
        });
      }
    },
    created(){
      axios.get("/post/" + this.id + ".json").then((data) => {
        this.blog = data.data;
      });
    }
  }
</script>

<style scoped>
  #edit_blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
    font-size: 16px;
  }
  input[type="text"], select{
    width: 500px;
    margin: 20px 0;
    padding: 8px;
    outline: none;
  }
  textarea{
    width: 500px;
    height: 200px;
    padding: 8px;
    outline: none;
  }
  .category{
    margin-top: 20px;
  }
  .category label{
    margin-right: 20px;
  }
  button{
    display: block;
    margin: 20px 0;
    background-color: crimson;
    color: white;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }
  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 20px 0;
  }
  #preview h3{
    margin: 10px 0;
  }
  #preview p{
    line-height: 30px;
  }
  #preview span{
    font-weight: bold;
    color: mediumblue;
  }
</style>
