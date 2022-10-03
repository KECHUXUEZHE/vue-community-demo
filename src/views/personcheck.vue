<template>
    <div class="personcheck">
        <table>
            <caption>物业费</caption>
            <thead>
                <th>住房编号</th>
                <th>业主姓名</th>
                <th>物业费定额</th>
                <th>收取时间</th>
                <th>物业费</th>
                <th>停车费</th>
                <th>其他</th>
                <th>总计</th>
                <th>当日缴清/欠费</th>
            </thead>
            <tbody>
                <tr>
                    <td>{{obj.data.userNumber}}</td>
                    <td>{{obj.data.userName}}</td>
                    <td>{{obj.data.quota}}</td>
                    <td>{{obj.data.time}}</td>
                    <td>{{obj.data.property}}</td>
                    <td>{{obj.data.parking}}</td>
                    <td>{{obj.data.other}}</td>
                    <td>{{obj.data.all}}</td>
                    <td>{{obj.data.paid}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import {useRoute,useRouter } from 'vue-router'
    import {reactive,onBeforeMount} from 'vue'
    import axios from 'axios'
    let router = useRouter()
    let route = useRoute()
    let obj = reactive ({
        data:{}
    })
    onBeforeMount(()=>{
        axios.post("http://localhost:3001/personcheck",{route:route.query.userName})
            .then(function(res){
                obj.data = res.data;
                // console.log(obj.data);
                // router.push({path:'/ownerupdate',query:{route:route.query.userName}})
            })
    })
</script>

<style>
        .personcheck {
            position: absolute;
            top: 10px;
            left: 200px;
        }
        .personcheck table{
            margin-top: 100px;
            color:white;
            width: 150%;
            text-align: center;
        }
        .personcheck caption{
            font-size: 30px;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .personcheck th{
            font-size: 20px;
            padding: 5px 0;
            font-weight: bold;
        }
        .personcheck td{
            padding: 2px 0;
            font-size: 20px;
        }
        .personcheck button{
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