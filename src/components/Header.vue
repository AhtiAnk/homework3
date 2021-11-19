<template>
    <div class="nav">
        <a href="#">Home</a>
        <a href="#">Login</a>
        <a href="#">Contact Us</a>
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
