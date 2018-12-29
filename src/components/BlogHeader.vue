<template>
  <nav id="blog_header">
    <ul>
      <li>
        <router-link to="/" exact>博客</router-link>
        <router-link to="/add" exact>写博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "BlogHeader"
  }
</script>

<style scoped>
  nav{
    background-color: crimson;
    padding: 30px 0;
    margin-bottom: 40px;
  }
  ul{
    list-style: none;
    text-align: center;
    margin: 0;
  }
  ul li{
    display: inline-block;
    margin: 0 10px;
  }
  ul li a{
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
  }
  .router-link-active{
    background-color: rgba(255, 255, 255, .8);
    color: #444;
  }
</style>
