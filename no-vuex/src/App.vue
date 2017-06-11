<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <router-view class="testDemo"></router-view>
        <router-view class="testDemo" name="foo"></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.testDemo {
    float:left;
    width: 300px;
    height: 300px;
    border: 1px solid;
    margin: 10px;
}
</style>
