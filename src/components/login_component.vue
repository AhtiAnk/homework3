<template>
    <div class="form-keskele">
        <div>
            <!-- <img
                class="width50"
                id="img1"
                src="res/images/logo.png"
                alt="postIt"
            /> -->
            <h1 class="width50">Welcome to postIt</h1>
        </div>

        <a href="#" title="Create an Account"><p>Create an Account</p></a>
        <p>Or</p>
        <h4>Please Log In</h4>
        <form>
            <input type="text" class="formfield" placeholder="Email" /><br />
            <input type="text" class="formfield" placeholder="Password" />
        </form>
        <a href="index.html">
            <button type="button">Log In</button>
        </a>

        <a href="#" title="Forgot password"><p>Forgot password</p></a>
    </div>
</template>

<script>
export default {
    name: "login_component",
}
</script>

<style>
.form-keskele {
    /* background-color: azure; */
    width: 40%;
    text-align: center;
    margin: auto;
}
button {
    background-color: blue;
    color: whitesmoke;
    cursor: pointer;
}
.wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
a {
    cursor: pointer;
}
.width50 {
    *display: inline;
    display: inline-block;
    vertical-align: top;
    margin: 0;
    padding: 0;
    width: 48%;
}
.formfield {
    font-family: sans-serif;
}
#img1 {
    height: 50px;
    width: 50px;
}
</style>
