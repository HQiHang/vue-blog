<template>
  <div id="single_blog">
    <div class="single-blog">
      <p>博客标题：<span>{{ blog.title }}</span></p>
      <p>博客作者：<span>{{ blog.content }}</span></p>
      <p>博客分类：<span v-for="category in blog.categories">{{ category }}</span></p>
      <p>博客作者：<span>{{ blog.author }}</span></p>
    </div>
    <div class="single-blog-btn">
      <button class="btn-delete" @click="deleteBlog()">删除</button>
      <router-link :to="'/edit/' + id">编辑</router-link>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "SingleBlog",
    data(){
      return {
        id: this.$route.params.id,
        blog: {}
      }
    },
    created(){
      axios.get("/post/" + this.id + ".json").then((data) => {
        this.blog = data.data;
      });
    },
    methods: {
      deleteBlog(){
        axios.delete("/post/" + this.id + ".json").then(() => {
          this.$router.push({ path: "/" });
        });
      }
    }
  }
</script>

<style scoped>
  #single_blog{
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #eee;
    border: 1px dotted #aaa;
    font-size: 20px;
  }
  #single_blog p{
    line-height: 50px;
  }
  #single_blog .btn-delete, a{
    margin: 10px 10px 0 0;
    background-color: crimson;
    color: white;
    border: 0;
    padding: 7px 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }
  #single_blog span{
    font-weight: bold;
    color: mediumblue;
  }
  a{
    text-decoration: none;
    background-color: #3e8f3e;
  }
</style>
