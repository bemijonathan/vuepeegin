import Home from '@/components/Home.vue'
import search from '@/components/searchpage.vue'


export default[
    { path:'/', component:Home },
    //i defined the params that is term 
    { path:'/search/:term', component:search}
]