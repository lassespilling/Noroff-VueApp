<template>
    <div>
        <div class="row justify-content-center text-left">
            <div v-for="(item, i) in info" v-bind:key="i" class="m-2 p-0 item">
                <img :src="item.thumbnail" height="50px" alt="item.title" class="w-100" />
                <h2 class="p-3 h4">{{ item.title }}</h2>
                <ul>
                    <li
                        class="flex-grow-1"
                        v-for="(ingredient, i) in item.ingredients.split(',')"
                        :tag="ingredient"
                        v-bind:key="i"
                    >{{ ingredient }}</li>
                </ul>

                <a
                    :href="item.href"
                    class="btn mx-3 mb-3"
                    :style="'background:' + btnbg"
                >View recipe ➞</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Smart",
    data() {
        return {
            info: null
        };
    },
    props: {
        btnbg: String
    },
    mounted() {
        axios
            .get(
                "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/"
            )
            .then(response => (this.info = response.data.results));
    }
};
</script>

<style lang="scss" scoped>
.item {
    display: grid;
    background: rgba(255, 255, 255, 0.4);
    grid-template-columns: auto 1fr;
    max-width: 500px;
    width: 100%;
    grid-template-areas: "img title" "img text" "img btn";
    & img {
        height: 150px;
        width: 100%;
        object-fit: cover;
        height: 100%;
        grid-area: img;
        min-width: 150px;
        max-width: 200px;
    }
    & h2 {
        grid-area: title;
    }
    & ul {
        grid-area: text;
        display: grid;
        grid-template-columns: 1fr 1fr;
        list-style: none;
        padding-inline-start: 1.5rem;
        & li {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
    }
    & a {
        grid-area: btn;
        margin: auto;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.1);
        transition: transform 0.1s ease-in-out;
        &:hover {
            opacity: 0.8;
            transform: scale(0.98);
        }
    }
}
</style>
