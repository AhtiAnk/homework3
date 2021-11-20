<template>
    <Header />
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/contactus">Contact Us</router-link> |
        <router-link to="/login">LogIn</router-link>
    </div>
    <router-view />
    <Footer />
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
    name: "Login",
    components: {
        Header,
        Footer,
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    padding: 0;
    margin: 0;
}

#nav {
    padding: 20px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
