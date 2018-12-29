<template>
  <div id="show_blog" v-theme:column>
    <h1>博客总览</h1>
    <input type="text" id="search" placeholder="请输入要搜索的内容" v-model="search">
    <div class="single-blog" v-for="blog in filterBlog">
      <router-link :to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title }}</h2>
      </router-link>
      <article>
        {{ blog.content | sliceContent }}
      </article>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "ShowBlog",
    data(){
      return {
        blogs: [],
        search: "",
      }
    },
    created(){
      axios.get("/post.json").then((data) => {
        let blogArr = [];
        for(let key in data.data){
          data.data[key].id = key;
          blogArr.unshift(data.data[key]);
        }
        this.blogs = blogArr;
      });
    },
    computed: {
      filterBlog(){
        return this.blogs.filter(blog => {
          return (blog.title.match(this.search.trim()) || blog.content.match(this.search.trim()));
        });
      }
    },
    directives: {
      rainbow(el){
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      },
      theme(el, binding){
        if(binding.arg === "column"){
          el.style.backgroundColor = "#67c";
          el.style.padding = "20px";
        }
      }
    },
    filters: {
      sliceContent(data){
        return data.slice(0, 100) + "...";
      }
    }
  }
</script>

<style scoped>
  #show_blog{
    max-width: 800px;
    margin: 20px auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #eee;
  }
  .single-blog h2{
    margin-bottom: 10px;
  }
  #search{
    width: 800px;
    height: 40px;
    font-size: 16px;
    padding: 5px;
    outline: none;
    border: 1px solid black;
    border-radius: 4px;
    margin: 20px 0 0 0;
    box-sizing: border-box;
  }
  #show_blog a{
    text-decoration: none;
    color: #444;
  }
</style>
