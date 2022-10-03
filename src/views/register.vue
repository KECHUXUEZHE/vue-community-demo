<template>
  <div class="register">
        <form action="" class="wy-form" @submit.prevent.self="request">
            <h1>业主注册</h1>
            <span>
                <label>业主姓名:</label>
                <input name="userName" type="text" v-model="fm.userName" autofocus required />
            </span>
            <span>
                <label>登录密码:</label>
                <input name="userPassword" type="password" v-model="fm.userPassword" required />               
            </span>
            <span>
                <label>确认密码:</label>
                <input name="surePassword" type="password" v-model="fm.surePassword" required />                
            </span>
            <span>
                <label>住房编号:</label>
                <input name="userNumber" type="text" v-model="fm.userNumber" required />                
            </span>
            <span>
                <label>业主职业:</label>
                <input name="userProfession" type="text" v-model="fm.userProfession" required />                
            </span>
            <span class="wy-sex">
                <label>业主性别:</label>
                <input class="userSex" name="userSex" value="男" type="radio" v-model="fm.userSex">男
                <input class="userSex" name="userSex" value="女" type="radio" v-model="fm.userSex">女                
            </span>
            <span>
                <label>入住时间:</label>
                <input name="userData" type="date" v-model="fm.userData">                
            </span>
            <span>
                <label>住房面积:</label>
                <input name="userArea" type="text" v-model="fm.userArea" required />               
            </span>
            <span>
                <label>常住人口:</label>
                <input name="userPerson" type="text" v-model="fm.userPerson" required />                
            </span>
            <span>
                <label>联系电话:</label>
                <input name="userPhone" type="text" v-model="fm.userPhone" required />                
            </span>
            <span>
                <input type="submit" class="button" value="提交">
                <button @click="back">返回</button>
            </span>
        </form>
    </div>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    import { reactive } from 'vue'
    import axios from 'axios'

    let router = useRouter()

    let fm = reactive({
        userName:'',
        userPassword: '',
        surePassword: '',
        userNumber: '',
        userProfession:'',
        userSex:'',
        userData:'',
        userArea:'',
        userPerson:'',
        userPhone:'',
    })
    // console.log(fm);
    function request(){
        axios.post("http://localhost:3001/register",fm)  // 将参数传递到后端
            .then(function(res){
                router.push({path:'/personlogin',query:{fm:res.data}}) // path 实现页面跳转   query 将数据带到下一个页面
                // console.log(res.data);
                // console.log('aaa')
            })
    }
    function back(){
        router.push({path:'/personlogin'})
    }
</script>

<style>
        .register{
            width: 37%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 600px;
            background-color: rgba(75, 81, 95, 0.3);
            box-shadow: 7px 7px 17px rgba(52, 56, 66, 0.5);
            border-radius: 5px;
        }
        .register h1 {
            color: #f0edf3;
            text-align: center;
        }
        .register input{
            margin-top: 17px;
            margin-left: 15px;
            border-radius: 5px;
            border-style: hidden;
            height: 30px;
            width: 165px;
            background-color: rgba(211, 223, 224, 0.608);
            outline: none;
            font-family: 宋体;
            color: #f0edf3;
            font-size: 20px;
        }
        .register span{
            display: block;
            text-align: center;
            color: #f0edf3;
            font-size: 20px;
        }
        .register .button{
            text-align: center;
            height: 30px;
            width: 120px;
            font-family: 宋体;
        }
        .register .userSex{
            width: 52px;
            height: 17px;
        }
        .register button{
            /* position: absolute; */
            /* right: 500px; */
            /* margin-top: 2px;
            margin-right: 5px; */
            margin-left: 10px;
            color: #fff;
            font-size: 20px;
            border-radius: 5px;
            border-style: hidden;
            background-color: rgba(211, 223, 224, 0.608);
            text-align: center;
            height: 30px;
            width: 120px;
            font-family: 宋体;
        }
</style>