<template>
    <div>
        <div id="main">
            <!-- click action -->
            <span style="font-size: 45px !important;" @click="isActive = !isActive" id="menu">☰</span>
            
            
        </div>
        <div class="singlepage">
            <!-- class binding -->
        <div class="side-nav" v-bind:class="{show:isActive}">
            <ul>
                <li id="close" @click="isActive = !isActive"> Close X </li>
                <li @click = "section ='wodd'">Random Words</li>
                <li @click = "section ='Random'">Word of the day </li>
                <li @click = "section ='Allwords'"> All Words</li>
                <li @click = "section ='NewWord'">Add new Words </li>
            </ul>
        </div>
        <component v-bind:is ="section"></component>
<!--
        <div class="words">
            <ul>
                <li></li>
            </ul>
        </div>
--></div>
    </div>
    
</template>

<script>
    import wod from './wordoftheday.vue'
    import Random from './Random.vue'
    import AllWords from './allword.vue'
    import NewWord from './neword.vue'
    import search from './searchpage.vue'
    export default {
        components:{
            'wodd':wod,
            'Random':Random,
            'Allwords':AllWords,
            'NewWord':NewWord,
            'search': search
        },
        data () {
            return {
                title:'peegin vue version',
                section:'wodd',
                term:null,
                isActive:false
            }
        },
        methods:{
            tooggleMenu: function(){
                this.isActive = !this.isActive
                console.log(this.isActive)
            }
    }
    }
</script>

<style>
    
    .side-nav{
        width: 400px;
        background-color: rgba(225, 225, 225, 0.99);
        height:100%;
/*        border-right: 2px solid blue;*/
        padding-top:20px;
        text-align: center;
        display: flex;
        justify-content: center;
        position: absolute;
        left:0;
        bottom: 0;
        visibility: hidden;
    }
    .show-nav{
        display: visible
    }
    .side-nav ul {
        list-style-type: none;
        
    }
    .menu{
        width: 50px;
        text-align: left !important;
        padding: 30px;
        background: aqua;
        
    }
    .side-nav li {
        margin-top:20px;
        border: 2px solid black;
        width: auto;
        padding: 20px;
        cursor: pointer;
    }
    .side-nav li:hover {
        background: white;
    }
    .singlepage{
        display: flex;
        flex-wrap: wrap;
    }
    .show{
        visibility: visible;
    }
    #close:hover{
        background: red;
        color: white;
        border:none !important;
    }
    #close{
         border:none !important;
        margin-right: auto;
        width: 100% !important;
    }
    #menu{
        position: absolute;
        left: 10%;
        top: 20px;
        cursor:pointer;
    }
</style>