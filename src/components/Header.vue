<template>
<header class="header">
    <h1 class="logo"><a href="#">Dessert</a></h1>
    <nav id="gnb">
        <ul>
            <li v-for="(nav, i) in gnb" :key="i"><router-link :to="nav.path">{{ nav.text }}</router-link></li>
        </ul>
    </nav>
</header>
</template>

<script>
    export default {
        name: 'AppHeader',
        data() {
            return {
                gnb: [
                    { text: 'Home', path: '/home' },
                    { text: 'Menu', path: '/menu' },
                    { text: 'About', path: '/about' }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.header {
    width: 100%;

    .logo a {
        font-size: 60px;
        color: #fff;
        -webkit-text-stroke: 1px #222;
    }

    #gnb {
        width: 100%;
        height: 100%;
        background: radial-gradient(lightblue, transparent);
        
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;

            li {
                padding: 0 50px;
                box-sizing: border-box;

                &:first-child {
                    padding-left: 0;
                }
                &:last-child {
                    padding-right: 0;
                }

                a {
                    display: block;
                    font-size: 20px;
                    font-weight: bold;
                    
                    &.router-link-active {
                        color: rgb(255, 0, 132);
                    }
                }
            }
        }
    }
}
</style>