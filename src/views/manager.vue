<template>
    <div class="manager">
        <div class="table">
            <div class="caption">业主信息维护和管理</div>
            <div class="thead">
                <div class="th">住房编号</div>
                <div class="th">业主姓名</div>
                <div class="th">性别</div>
                <div class="th">职业</div>
                <div class="th">入住时间</div>
                <div class="th">住房面积</div>
                <div class="th">常住人口</div>
                <div class="th">联系电话</div>
                <div class="th">编辑</div>
                <div class="th">删除</div>
            </div>
            <div class="tbody">
                <div class="tr" v-for="(item,index) in obj.data" :key="index">
                    <div class="td">{{item.userNumber}}</div>
                    <div class="td">{{item.userName}}</div>
                    <div class="td">{{item.userSex}}</div>
                    <div class="td">{{item.userProfession}}</div>
                    <div class="td">{{item.userData}}</div>
                    <div class="td">{{item.userArea}}</div>
                    <div class="td">{{item.userPerson}}</div>
                    <div class="td">{{item.userPhone}}</div>
                    <div class="td"><button @click="managerupdate(item)">更新</button></div>
                    <div class="td"><button @click="managerdelete(item.userNumber)">删除</button></div>
                </div>
            </div>
        </div>
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
        axios.get("http://localhost:3001/manager",{obj:obj.data})
            .then(function(res){
                obj.data = res.data;
            })
    })

    function managerupdate(e){
        const data =  toRaw(e) // 获取原始页面的初始数据
        router.push({path:'/managerupdate',query:{
            data:JSON.stringify(data) // 字符串转换
        }})
    }
    function managerdelete(e){
        // const data = toRaw(e);
        console.log(e);
        axios.post("http://localhost:3001/managerdelete",{userNumber:e})
            .then(function(res){
                router.push({path:'/manager'})
                obj.data = res.data
            })
    }
</script>

    <style>
        .manager {
            position: absolute;
            top: 140px;
            left: 130px;
        }
        .manager .table{
            /* margin-top: 100px; */
            color:white;
            width: 100%;
            text-align: center;
        }
        .manager .caption{
            display: block;
            font-size: 30px;
            margin-bottom: 20px;
            font-weight: bold;
        }
        .manager .thead{
            display: flex;
            flex-direction: row;
        }
        .manager .th{
            /* flex: 1; */
            width: 100px;
            font-size: 20px;
            padding-left: 20px;
            font-weight: bold;
        }
        /* .manager .tbody{
            display: flex;
        } */
        .manager .tr{
            display: flex;
        }
        .manager .td{
            width: 100px;
            padding-left: 20px;
            padding-top: 5px;
            flex: 1;
            /* margin-left: 10px; */
            font-size: 20px;
            text-align: center;
        }
        .manager button{
            color: #fff;
            font-size: 20px;
            /* margin-top: 17px; */
            /* margin-left: 15px; */
            border-radius: 5px;
            border-style: hidden;
            background-color: rgba(211, 223, 224, 0.608);
            text-align: center;
            height: 30px;
            width: 40px;
            font-family: 宋体;
        }
    </style>