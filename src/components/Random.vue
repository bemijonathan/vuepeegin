<template>
    <div id="random">
        <h2>{{title}}</h2>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title:'Random'
            }
        },
        components: {
        }
    }
</script>

<style>
    #random{
        text-align: center;
        width: 100% !important;
        height:100vh !important;
        background-color: lightblue;
        overflow: auto;

    }
</style>