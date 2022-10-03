<template>
    <div class="person">
        <Header>
            <h1>欢迎来到个人中心</h1>
            <nav class="main-nav">
                <button @click="owner">个人信息管理</button>
                <button @click="check">查询物业费</button>
                <button @click="board">社区</button>
            </nav>
        </Header>
        
    </div>
</template>

<script setup>
    import { useRoute,useRouter } from 'vue-router';
    import axios from 'axios';

    const route = useRoute();
    const router = useRouter();
    function owner (){
        router.push({path:'/owner',query:{userName:route.query.userName}})
    }
    function check (){
        router.push({path:'/personcheck',query:{userName:route.query.userName}})
    }
    function board (){
        router.push({path:'/personboard',query:{userName:route.query.userName}})
    }
</script>

<style>
        .person h1{
            color: white;
        }
        .person .main-nav{
            margin: 10px;
            /* height: 100%;
            flex: 1 0 auto; */
        }
        .person nav{
            display: inline-block;
            background-color: rgba(57, 111, 236, 0.3);
            box-shadow: 5px 5px 10px rgba(107, 122, 161, 0.5);
            border-radius: 5px;
        }
        .person button{
            color: #fff;
            font-size: 20px;
            margin-top: 17px;
            margin-left: 15px;
            border-radius: 5px;
            border-style: hidden;
            background-color: rgba(211, 223, 224, 0.608);
            text-align: center;
            height: 30px;
            width: 120px;
            font-family: 宋体;
        }
</style>