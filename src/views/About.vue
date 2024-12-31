<template>
    <section class="contents">
        <div id="root">
            <div>{{word}}</div>
            <form v-on:submit="onSubmitForm">
                <input type="text" v-model="value">
                <button type="submit">입력!</button>
            </form>
            <div>{{result}}</div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'AppAbout',
        el: '#root',
        data() {
            return {
                word: '제로초',
                result: '',
                value: '',
            }
        },
        methods: {
            onSubmitForm(e) {
                e.preventDefault();
                if (this.word[this.word.length -1] === this.value[0]) {
                    this.result = '딩동댕';
                    this.word = this.value;
                    this.value = '';
                } else {
                    this.result = '땡';
                    this.value = '';
                }

            }
        },
    }
</script>

<style lang="scss" scoped>

</style>