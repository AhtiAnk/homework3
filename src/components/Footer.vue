<template>
    <div class="footer">
        <router-link to="/contactus">Contact Us</router-link>
    </div>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style>
.footer {
    width: 100%;
    position: fixed;
    bottom: 0%;
    background-color: rgb(0, 89, 255);
    overflow: hidden;
}

.footer a {
    float: left;
    color: black;
    padding: 14px 14px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
}
</style>
