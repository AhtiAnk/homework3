<template>
    <div class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/contactus">Contact Us</router-link> |
        <router-link to="/login">LogIn</router-link>
    </div>
</template>

<script>
export default{
    name:'Header'
}
</script>

<style>
    .nav{
        background-color:blue;
        overflow: hidden;
    }

    .nav a {
        float: left;
        color: black;
        padding: 14px 14px;
        text-align: center;
        font-size: 17px;
        text-decoration: none;
    }

    .nav a:hover {
        background: chartreuse;
        color: pink;
    }
</style>
