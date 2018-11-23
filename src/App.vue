<template>
    <div>
        <div class="header">
            <img :src="require('./assets/logo.png')" width="70" height="70">
        <img :src="require('./assets/peegin-logo.png')" height="70" @click="home">
        
            <input type="search" placeholder="search-word" v-model.lazy="term" @keyup.enter="gotosearch" id="search-bar">
            
        </div>
        <router-view></router-view>
    </div>
 
</template>



<script>
    //   import home from './components/Home.vue'
    //  import search from './components/searchpage.vue'
//    import footer from './components/footer.vue'
//    import SignUp from './components/Signup.vue'
//    import login from './components/login.vue'
//    import noteapp from  './components/noteapp.vue'
 
export default {
//  name: 'app',
  components: {
    //   'peegin-home': home,
    //   'peegin-search':search
//    'app-footer': footer,
//      'app-body': body,
//      'app-form': SignUp,
//     'app-login': login,
//      'noteapp': noteapp
  },
    data(){
        return{
           term:''
        }
    },
    methods:{
        gotosearch: function(){
            // i put the term in the params to be equal to this term
            this.$router.push({ path: `/search/${this.term}` })
        },
        home:function(){
            this.$router.push({path:'/'})
        }
    },
    watch: {
    term: function() {
            this.$router.push({ path: `/search/${this.term}` })
    }
    }
}
</script>

<style>
    #nav{
        display: flex;
        background: rgba(225,225,225,0.7);
        margin:0 !important;
        padding: 5px;
        justify-content: center;
        align-items: center;
    }
    #nav a{
        padding: 15px 45px;
        text-decoration: none;
        background: transparent;
        color:white;
        
        margin:0;
    }
    #nav a:hover{
        color: skyblue;
        background: white;
    }
    #lists{
        margin: 0;
        font-family: sans-serif;
        background: linear-gradient( 100deg, rgba(0,0,225,0), rgba(0,0,225,1))
    }
    *{
        margin: 0;
    }
    .header{
        margin: auto;
        display: flex;
        justify-content: center;
        align-content: center;
        border-bottom: 3px solid black;
        padding: 20px;
        
    }
    #search-bar{
        height: 50px;
        width:250px;
        margin:auto 20px;
        border: 2px solid black;
        font-size: 25px;
        outline: none;
        padding: 10px;

    }
</style>
