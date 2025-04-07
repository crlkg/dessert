<template>
    <section class="contents" ref="scrollContainer" @scroll="checkScroll">
        <div v-for="(menu,i) in pdt" :key="i" class="menu">
        <a href="#">
            <img :src="menu.image" class="pdt_thumb">
            <h4>{{menu.title}}</h4>
            <p class="pdt_content">{{menu.content}}</p>
            <span class="pdt_price">{{menu.price}}</span>
        </a>
        </div>
        <div v-if="loading">loading more items...</div>
    </section>
</template>

<script>
import data from '../../src/assets/product.js';

export default {
    name: 'AppMenu',
    data() {
        return {
            pdt: [],
            loading: false
        }
    },
    mounted() {
        this.loadInitialItems();
        this.$refs.scrollContainer.addEventListener('scroll', this.checkScroll, true);
    },
    beforeUnmount() {
        this.$refs.scrollContainer.removeEventListener('scroll', this.checkScroll, true);
    },
    methods: {
        loadInitialItems() {
            let repeatData = [];
            for (let i = 0; i < 6; i++) {
                repeatData = repeatData.concat(data);
            }
            this.pdt = repeatData;
        },
        loadMoreItems() {
            if (this.loading) return;
            this.loading = true;
            fetch('your-api-url')
                .then(response => response.json())
                .then(newData => {
                    this.pdt = this.pdt.concat(newData);
                    this.loading = false;
                })
                .catch(error => {
                    console.error('Failed to load data:', error);
                    this.loading = false;
                });
        },
        checkScroll(event) {
            const { scrollTop, scrollHeight, clientHeight } = event.target;
            if (scrollTop + clientHeight >= scrollHeight - 10) {
                this.loadMoreItems();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .contents {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 7rem 2rem;

        .menu {
            .pdt_thumb {
                width: 100%;
            }
        }
    }
</style>