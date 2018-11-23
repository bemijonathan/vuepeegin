<template>
    <div id="wordoftheday">
        <h2 style="text-align:center; padding-top:30px;">{{title}}</h2>
        <div id="words-container">
        <p> <span>title:</span> {{randomWords.title}}</p>
        <p> <span>word usage:</span>{{randomWords.example}}</p>
        <p> <span>meaning:</span> {{randomWords.meaning}}</p>
        <p> <span>Origin:</span>{{randomWords.origin}}</p>
        </div>

        <button id="btn-refresh" @click="refresh"> Random Word</button> 
    </div>

</template>

<script>
    import axios from 'axios'
    export default { 
        data(){
            return {
                title:'Random Word',
                randomWords: []
            }   
        },
        methods:{
                refresh: function(){
                     axios.get(`https://peegin.com/api/public/peegins/random`)
                .then(response => {
                  this.randomWords = response.data.peegin
                })
                }
            },
        components: {
        },
        created() {
                       axios.get(`https://peegin.com/api/public/peegins/random`)
                .then(response => {
                  // JSON responses are automatically parsed.
                  this.randomWords = response.data.peegin
                })
             .catch(function(error){console.log(error);
             }) 
          }
    }
</script>

<style>
    #wordoftheday{
        text-align: center;
        width: 100% !important;
        height:100vh !important;
        background: aqua;
        overflow: auto;

    }
    #btn-refresh{
        background:green;
        font-size:20px;
        width: 200px;
        height: 60px;
        margin-top:100px;
        border:none;
        outline: none;
        border-radius: 8px;
    }
    #words-container{
        max-width: 700px;
        border-radius: 8px;
        text-align:left;
        margin: auto;
        background: white !important;
        height:350px;
        font-size: 20px;
        display: grid;
        align-items:center;
        padding-left:30px;
    }
    #words-container span{
        color: red;
        background: yellow;
        padding:10px;
        margin-right:20px;
        
    }
</style>