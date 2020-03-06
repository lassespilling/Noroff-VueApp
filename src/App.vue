<template>
    <div id="app">
        <Dumb title="recipes are cool"></Dumb>
        <Smart btnbg=""></Smart>
    </div>
</template>

<script>
import Dumb from "./Components/Dumb.vue";
import Smart from "./Components/Smart.vue";

export default {
    name: "App",
    components: {
        Dumb,
        Smart
    }
};

setTimeout(function() {
    document.body.classList.add("loaded");
}, 500);
</script>

<style lang="scss">
body {
    opacity: 0;
    transition: all 2s ease-in-out;
    &:not(.loaded) .item {
        opacity: 0;
        transform: translateY(10vh);
        transition: all 2s ease-in-out;
    }
    &.loaded {
        opacity: 1;
        transition: all 2s ease-in-out;
        & .item {
            opacity: 1;
            transform: translateY(0);
            transition: all 2s ease-in-out;
        }
    }
}
</style>
