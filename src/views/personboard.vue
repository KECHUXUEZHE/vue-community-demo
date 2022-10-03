<template>
    <div class="personboard">
        <header><h1>留言板</h1></header>
        <section>
            <div class="item" v-for="(item,index) in obj.data" :key="index">
                <div class="item-name">{{item.userName}}:</div>
                <div class="item-message">{{item.message}}</div>
                <div class="item-date">{{item.date}}</div>
            </div>
            <textarea name="message" id="" cols="44" rows="6" v-model="fm.message"></textarea>
            <button @click="boardadd">发表</button>
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

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()+1
    const day = date.getDate()

    let fm = reactive({
        userName: route.query.userName,
        date: year+'-'+month+'-'+day,
        message: ''
    })
    console.log(route.query.userName);
    onBeforeMount(()=>{
        axios.get("http://localhost:3001/personboard",{obj:obj.data})
            .then(function(res){
                obj.data = res.data;
            })
    })
    function boardadd (){
        axios.post('http://localhost:3001/personboardadd',fm)
        .then(function(res){
            console.log('aaa');
            obj.data = res.data;
            console.log(obj.data);
            router.push({path:'/personboard'})
        })
    }
</script>

<style>
    .personboard {
        width: 37%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 600px;
        background-color: rgba(75, 81, 95, 0.3);
        box-shadow: 7px 7px 17px rgba(52, 56, 66, 0.5);
        border-radius: 5px;
    }
    .personboard header{
        position: absolute;
        top: 100px;
    }
    .personboard h1 {
        color: #f0edf3;
        text-align: center;
    }
    .personboard section{
        /* display: flex; */
        width: 100%;
        overflow-y: scroll;

    }
    .personboard .item{
        color: #f0edf3;
        font-size: 20px;
        margin-top: 10px;
    }
    .personboard .item-name{
        text-align: left;
    }
    .personboard .item-message{
        padding-left: 100px;
    }
    .personboard .item-date{
        text-align: right;
        padding-right: 5px;
    }
    .personboard button{
        position: absolute;
        left: 720px;
        margin-top: 170px;
        color: #fff;
        font-size: 20px;
        border-radius: 5px;
        border-style: hidden;
        background-color: rgba(211, 223, 224, 0.608);
        text-align: center;
        height: 30px;
        width: 60px;
        font-family: 宋体;
    }
    .personboard textarea{
        margin-top: 10px;
        margin-left: 45px;
        background-color: rgba(75, 81, 95, 0.3);
        color: #fff;
        font-size: 20px;
    }
</style>