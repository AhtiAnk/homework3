<template>
    <div class="flexbox-item" v-for="post in postList" :key="post.id">
        <h3>
            <img src="@/assets/profile.png" alt="Profile" />
            <span> {{ post.create_time }} </span>
        </h3>
        <div>
            <img :src="post.image" />
            <p class="comment">{{ post.post_heading }}</p>
            <img class="like" src="@/assets/like.png" />
        </div>
    </div>
</template>

<script>
export default {
    name: "Post_comp",
    data: function () {
        return {}
    },
    computed: {
        postList() {
            return this.$store.state.postList
        },
    },
}
</script>

<style>
.flexbox-item {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: auto;
    margin: 10px;
    box-shadow: 2px 2px 5px 5px rgb(148, 148, 148);
    /* border: 3px rgb(10, 10, 10) solid; */
    background-color: #ffffff;
}

.flexbox-item h3 {
    height: 25px;
    margin-top: 2px;
}

.flexbox-item h3 img {
    float: left;
    height: 100%;
    width: auto;
}

.flexbox-item h3 span {
    font-size: small;
    float: right;
}
.imageBox {
    display: block;
    text-align: center;
}

.imageBox img {
    max-height: 300px;
    width: 400px;
}

.like {
    height: 30px;
    width: 40px;
    float: left;
}

.comment {
    text-align: left;
    padding-left: 5px;
}

p {
    font-family: fantasy;
}
</style>
