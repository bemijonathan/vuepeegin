<template>
    <div id="search">
        <h1>{{title}}</h1>
        <div v-for = "result in results" :key="result.id" id="words-container">
        <p> <span>title:</span> {{result.title}}</p>
        <p> <span>word usage:</span>{{result.example}}</p>
        <p> <span>meaning:</span>{{result.meaning}}</p>
        <p> <span>Origin:</span>{{result.origin}}</p>
        </div> 
        <!-- {{results}}  -->

    </div>
    
</template>

<script>
//    props
    import axios from 'axios'
    export default {
        data () {
            return {
                term: this.$route.params.term,
                title:'search',
                results:null,
                anotherResult:[]
            }
        },
        mounted(){
            // i then put the term here to be equal to the params.term
            axios.get(`https://peegin.com/api/public/peegins/search?&search= ${this.term}`)
                .then(response => {
                  this.results = response.data.peegins;
                })
                .catch(function(error){console.log(error);
             })
           
        },
             watch: {
                $route: function() {
                    axios.get(`https://peegin.com/api/public/peegins/search?&search= ${this.$route.params.term}`)
                .then(response => {
                  this.results = response.data.peegins;
                  console.log(response)
                })
                .catch(function(error){console.log(error);
             })
                }
             },

    }
</script>

<style>
    #search{
        text-align: center;
        width: 100% !important;
        height:100vh !important;
        background-color: navy;
        overflow: auto;
        padding-bottom: 200px;

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