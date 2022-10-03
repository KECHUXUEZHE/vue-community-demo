<template>
     <div class="owner">
        <!-- action 响应post提交改变 -->
        <form action="" class="wy-form"  @submit.prevent.self="request">
            <h1>个人信息</h1>
            <span>
                <label>业主姓名:</label>
                <input name="userName" type="text" v-model="obj.data.userName" autofocus required />
            </span>
            <span>
                <label>住房编号:</label>
                <input name="userNumber" type="text" v-model="obj.data.userNumber" required />                
            </span>
            <span>
                <label>业主职业:</label>
                <input name="userProfession" type="text" v-model="obj.data.userProfession" required />                
            </span>
            <span class="wy-sex">
                <label>业主性别:</label>
                <input  name="userSex" v-model="obj.data.userSex" required />       
            </span>
            <span>
                <label>入住时间:</label>
                <input name="userData" type="date" v-model="obj.data.userData" />                
            </span>
            <span>
                <label>住房面积:</label>
                <input name="userArea" type="text" v-model="obj.data.userArea" required />               
            </span>
            <span>
                <label>常住人口:</label>
                <input name="userPerson" type="text" v-model="obj.data.userPerson" required />         
            </span>
            <span>
                <label>联系电话:</label>
                <input name="userPhone" type="text" v-model="obj.data.userPhone" required />
            </span>
            <span>
                <input type="submit" class="button" value="修改">
                <button @click="back">返回</button>
            </span>
        </form>
    </div>
</template>

<script setup>
    import {reactive,onBeforeMount} from 'vue'
    import { useRoute,useRouter } from 'vue-router'
    import axios from 'axios'

    const route = useRoute();
    const router = useRouter();



    let obj = reactive({
        data:{}
    })

    onBeforeMount(()=>{
        axios.post("http://localhost:3001/owner",{route:route.query.userName})
            .then(function(res){
                obj.data = res.data;
                // console.log(obj.data);
                // router.push({path:'/ownerupdate',query:{route:route.query.userName}})
            })
    })
    function request (){
        axios.post('http://localhost:3001/ownerupdate',{obj:obj.data,route:route.query.userName})
        .then(function(res){
            console.log('aaa');
            router.push({path:'/owner',query:{route:obj.data.userName}})
        })
    }
    function back(){
        router.push({path:'/person'})
    }
</script>

<style>
        .owner{
            width: 37%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 600px;
            background-color: rgba(75, 81, 95, 0.3);
            box-shadow: 7px 7px 17px rgba(52, 56, 66, 0.5);
            border-radius: 5px;
        }
        .owner h1{
            margin-top: 10px;
            color: #f0edf3;
            text-align: center;
        }
        .owner input{
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
        .owner span{
            display: block;
            text-align: center;
            color: #f0edf3;
            font-size: 20px;
        }
        .owner .button{
            text-align: center;
            height: 30px;
            width: 120px;
            font-family: 宋体;
        }
        .owner button{
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