<template>
    <main>
    <section class="contents">
        <div v-for="(menu,i) in pdt" :key="i" class="menu">
        <a href="#">
            <img :src="menu.image" class="pdt_thumb">
            <h4>{{menu.title}}</h4>
            <p class="pdt_content">{{menu.content}}</p>
            <span class="pdt_price">{{menu.price}}</span>
        </a>
        </div>
    </section>
    </main>
</template>

<script>
import data from '../assets/product.js';

    export default {
        name: 'AppMenu',
        data() {
            return {
                pdt: data
            }
        }
    }
</script>

<style lang="scss" scoped>
    .contents {
        display: grid;
        grid-template-columns: repeat(5,1fr);
        .menu {
            
            .pdt_thumb {
                width: 100%;
            }
        }
    }
</style>