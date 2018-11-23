<template>
    <div id="newWord">
        <h2>{{title}}</h2>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title:'New word'
            }
        },
        components: {
        }
    }
</script>

<style>
    #newWord{
        text-align: center;
        width: 100% !important;
        height:100vh !important;
        background: yellow;
        overflow: auto;

    }
</style>