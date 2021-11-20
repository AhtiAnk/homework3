<template>
    <div class="vertical">
        <div class="container"><Post /></div>
    </div>
</template>

<script>
import Post from "@/components/Post_comp.vue"
export default {
    name: "Post_comp",
    components: {
        Post,
    },
    data: function () {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.vertical {
    height: fit-content;
    position: absolute;
    left: 25%;
    right: 25%;
}

.container {
    margin-top: 40px;
    margin-bottom: 80px;
    height: auto;
    display: flex;
    /*
  align-items:flex-start;
  align-items:flex-end;
  */
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
