<template>
    <div>
        <h1>{{ title | camel }}</h1>
    </div>
</template>

<script>
export default {
    name: "Title",
    data() {
        return {};
    },
    props: {
        title: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
