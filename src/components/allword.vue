<template>
    <div id="allWord">
        <h2 style="text-align:center; padding-top:30px;">{{title}}</h2>

        <div v-for = "words in AllWords" :key="words.id" id="words-container">
        <p> <span>title:</span> {{words.title}}</p>
        <p> <span>word usage:</span>{{words.example}}</p>
        <p> <span>meaning:</span>{{words.meaning}}</p>
        <p> <span>Origin:</span>{{words.origin}}</p>
        </div> 
    </div>

</template>


<script>
    import axios from 'axios'
    export default { 
        data(){
            return {
                title:'All Words',
                AllWords: []
            }   
        },
        methods:{
            
            },
        mounted(){
                       axios.get(`https://peegin.com/api/public/peegins/recent`)
                .then(response => { this.AllWords = response.data.peegins;
                })
             .catch(function(error){console.log(error);
             }) 
          }
    }
</script>
<style>
    #allWord{
        text-align: center;
        width: 100% !important;
        height:100vh !important;
        background: purple;
        overflow: auto;

    }
     #words-container{
        max-width: 700px;
        border-radius: 8px;
        text-align:left;
        margin: 50px auto;
        background: white !important;
        height:350px;
        font-size: 20px;
        display: grid;
        align-items:center;
        padding-left:30px;

    }
    #words-container p {
    }
    #words-container span{
        color: red;
        background: yellow;
        padding:10px;
        margin-right:20px;
        
    }
</style>
