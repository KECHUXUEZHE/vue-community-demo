<template>
    <div class="managercheck">
        <div class="table">
            <div class="caption">物业费</div>
            <div class="thead">
                <div class="th">住房编号</div>
                <div class="th">业主姓名</div>
                <div class="th">物业费定额</div>
                <div class="th">收取时间</div>
                <div class="th">物业费</div>
                <div class="th">停车费</div>
                <div class="th">其他</div>
                <div class="th">总计</div>
                <div class="th">当日缴清/欠费</div>
                <div class="th">更新</div>
                <div class="th">删除</div>
            </div>
            <div class="tbody">
                <div class="tr" v-for="(item,index) in obj.data" :key="index">
                    <div class="td">{{item.userNumber}}</div>
                    <div class="td">{{item.userName}}</div>
                    <div class="td">{{item.quota}}</div>
                    <div class="td">{{item.time}}</div>
                    <div class="td">{{item.property}}</div>
                    <div class="td">{{item.parking}}</div>
                    <div class="td">{{item.other}}</div>
                    <div class="td">{{item.all1}}</div>
                    <div class="td">{{item.paid}}</div>
                    <div class="td"><button @click="managercheckupdate(item)">更新</button></div>
                    <div class="td"><button @click="managercheckdelete(item.userNumber)">删除</button></div>
                </div>
            </div>
            <div ><button class="tfooter" @click="managercheckadd">添加</button></div>
        </div>
    </div>
</template>

<script setup>
    import {useRoute,useRouter } from 'vue-router'
    import {reactive,onBeforeMount,toRaw} from 'vue'
    import axios from 'axios'

    let router = useRouter()
    let route = useRoute()

    let obj = reactive ({
        data:{}
    })

    onBeforeMount(()=>{
        axios.get("http://localhost:3001/managercheck",{obj:obj.data})
            .then(function(res){
                obj.data = res.data;
                // console.log(res);
            })
    })
   function managercheckadd(){
       router.push({path:'/managercheckadd'})
   }
   function managercheckupdate(e){
        const data =  toRaw(e)
        console.log(e);
        router.push({path:'/managercheckupdate',query:{
            data:JSON.stringify(data)
        }})
    }
    function managercheckdelete(e){
        // const data = toRaw(e);
        console.log(e);
        axios.post("http://localhost:3001/managercheckdelete",{userNumber:e})
            .then(function(res){
                router.push({path:'/managercheck'})
                obj.data = res.data
            })
    }
</script>

    <style>
        .managercheck {
            position: absolute;
            top: 140px;
            left: 130px;
        }
        .managercheck .table{
            color:white;
            width: 100%;
            text-align: center;
        }
        .managercheck .caption{
            display: block;
            font-size: 30px;
            margin-bottom: 20px;
            font-weight: bold;
        }
        .managercheck .thead{
            display: flex;
            flex-direction: row;
        }
        .managercheck .th{
            width: 100px;
            font-size: 20px;
            padding-left: 20px;
            font-weight: bold;
        }
        .managercheck .tr{
            display: flex;
        }
        .managercheck .td{
            width: 100px;
            padding-left: 20px;
            padding-top: 5px;
            flex: 1;
            /* margin-left: 10px; */
            font-size: 20px;
            text-align: center;
        }
        .managercheck button{
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
        .managercheck .tfooter{
            margin-top: 10px;
            height: 30px;
            width: 100px;
        }
    </style>