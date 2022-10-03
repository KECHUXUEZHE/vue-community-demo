<template>
  <div class="login">
        <form action="/" @submit.prevent.self="request">
            <h1>社区物业系统</h1>
            <span>
                <label>用户名：</label>
                <input type="text"  name="userName" v-model="userName" />
            </span>
            <span>
                <label>密码：</label>
                <input type="password" class="usePassword" name="userPassword" v-model="userPassword" />
            </span>
            <span>
                <input type="submit" class="button" value="登录" />
                <!-- <input type="submit" class="button" value="注册" /> -->
                <button @click="register">注册</button>
            </span>
        </form>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    import { ref } from 'vue'
    import axios from 'axios'

    const router = useRouter()

    let userName = ref('');
    let userPassword = ref('');

    function request(){
        axios.post("http://localhost:3001/person",{
            userName:userName.value,
            userPassword:userPassword.value
        }).then(function(res){
            console.log(res);
            router.push({path:'/person',query:{userName:userName.value}})
        })
    }
    function register (){
        router.push({path:'/register'})
    }
</script>

<style>
        .login{
            width: 37%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 300px;
            background-color: rgba(75, 81, 95, 0.3);
            box-shadow: 7px 7px 17px rgba(52, 56, 66, 0.5);
            border-radius: 5px;
        }
        .login h1 {
            color: #f0edf3;
            text-align: center;
        }
        .login span{
            display: block;
            text-align: center;
            color: #f0edf3;
            font-size: 20px;
        }
        .login input{
            margin-top: 17px;
            margin-left: 15px;
            border-radius: 5px;
            border-style: hidden;
            height: 30px;
            width: 140px;
            background-color: rgba(211, 223, 224, 0.608);
            outline: none;
            color: #f0edf3;
            font-size: 20px;
        }
        .login .usePassword{
            margin-left: 35px;
        }
        .login .button{
            text-align: center;
            height: 30px;
            width: 120px;
            font-family: 宋体;
        }
        .login button{
            color: #f0edf3;
            font-size: 20px;
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