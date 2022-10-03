<template>
    <div class="home">
        <h1>欢迎来到社区物业管理系统</h1>
        <div class="left">
            <button @click="manager">管理员登录</button>
            <button @click="person">业主登录</button>
            <button @click="register">注册</button>
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    import axios from 'axios'

    const router = useRouter()
    function manager(){
        router.push({path:'/managerlogin'})
    }
    function person(){
        router.push({path:'/personlogin'})
    }
    function register(){
        router.push({path:'/register'})
    }
</script>

<style>
        .home{
            width: 37%;
            height: 300px;
            background-color: rgba(75, 81, 95, 0.3);
            box-shadow: 7px 7px 17px rgba(52, 56, 66, 0.5);
            border-radius: 5px;
        }
        .home h1 {
            margin-top: 100px;
            color: #f0edf3;
            text-align: center;
        }
        .home .left{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .home button{
            color: #fff;
            font-size: 20px;
            margin-top: 25px;
            margin-left: 10px;
            border-radius: 5px;
            border-style: hidden;
            background-color: rgba(211, 223, 224, 0.608);
            text-align: center;
            height: 30px;
            width: 120px;
            font-family: 宋体;
        }
</style>