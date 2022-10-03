<template>
    <div class="managerboard">
        <header><h1>留言板</h1></header>
        <section>
            <div class="item" v-for="(item,index) in obj.data" :key="index">
                <div class="item-name">{{item.userName}}:</div>
                <div class="item-message">{{item.message}}</div>
                <div class="item-date">{{item.date}}</div>
                <button @click="managerboarddelete(item.userName)">删除</button>
            </div>
        </section>
    </div>
</template>

<script setup>
    import {useRoute,useRouter } from 'vue-router'
    import {reactive,onBeforeMount, toRaw} from 'vue'
    import axios from 'axios'

    let router = useRouter()
    let route = useRoute()

    let obj = reactive ({
        data:{}
    })

    onBeforeMount(()=>{
        axios.get("http://localhost:3001/managerboard",{obj:obj.data})
            .then(function(res){
                obj.data = res.data;
            })
    })
    function managerboarddelete(e){
        axios.post("http://localhost:3001/managerboarddelete",{userName:e})
            .then(function(res){
                router.push({path:'/managerboard'})
                obj.data = res.data
            })
    }
</script>

<style>
    .managerboard {
        width: 37%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 600px;
        background-color: rgba(75, 81, 95, 0.3);
        box-shadow: 7px 7px 17px rgba(52, 56, 66, 0.5);
        border-radius: 5px;
    }
    .managerboard header{
        position: absolute;
        top: 100px;
    }
    .managerboard h1 {
        color: #f0edf3;
        text-align: center;
    }
    .managerboard section{
        /* display: flex; */
        overflow-y: scroll;
        width: 100%;
    }
    .managerboard .item{
        color: #f0edf3;
        font-size: 20px;
        margin-top: 10px;
    }
    .managerboard .item-name{
        text-align: left;
    }
    .managerboard .item-message{
        padding-left: 100px;
    }
    .managerboard .item-date{
        text-align: right;
        padding-right: 5px;
    }
    .managerboard button{
        position: absolute;
        right: 500px;
        margin-top: 2px;
        margin-right: 5px;
        color: #fff;
        font-size: 20px;
        border-radius: 5px;
        border-style: hidden;
        background-color: rgba(211, 223, 224, 0.608);
        text-align: center;
        height: 30px;
        width: 50px;
        font-family: 宋体;
    }
</style>