<template>
  <div class="managercheckadd">
    <!-- action 响应post提交改变 -->
    <form action="" class="wy-form" @submit.prevent.self="request">
      <h1>物业费信息</h1>
      <span>
        <label>业主姓名:</label>
        <input
          name="userName"
          type="text"
          v-model="fm.userName"
          autofocus
          required
        />
      </span>
      <span>
        <label>住房编号:</label>
        <input
          name="userNumber"
          type="text"
          v-model="fm.userNumber"
          required
        />
      </span>
      <span>
        <label>物业费定额:</label>
        <input
          name="quota"
          type="text"
          v-model="fm.quota"
          required
        />
      </span>
      <span class="wy-sex">
        <label>收费时间:</label>
        <input name="time" type="date" v-model="fm.time" required />
      </span>
      <span>
        <label>物业费:</label>
        <input name="property" type="text" v-model="fm.property" />
      </span>
      <span>
        <label>停车费:</label>
        <input
          name="parking"
          type="text"
          v-model="fm.parking"
          required
        />
      </span>
      <span>
        <label>其他费用:</label>
        <input
          name="other"
          type="text"
          v-model="fm.other"
          required
        />
      </span>
      <span>
        <label>总计:</label>
        <input
          name="all1"
          type="text"
          v-model="fm.all1"
          required
        />
      </span>
      <span>
        <label>当日缴清/欠费:</label>
        <input
          name="paid"
          type="text"
          v-model="fm.paid"
          required
        />
      </span>
      <span>
        <input type="submit" class="button" value="提交" />
        <button @click="back">返回</button>
      </span>
    </form>
  </div>
</template>

<script setup>
import { reactive, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();

let fm = reactive({
  userNumber: '',
  userName: '',
  quota: '',
  time: '',
  property: '',
  parking: '',
  other: '',
  all1: '',
  paid: '',
});

function request() {
  axios
    .post("http://localhost:3001/managercheckadd",fm)
    .then(function (res) {
    //   console.log(res);
    //   console.log(obj.data);
      router.push({
        path: "/managercheck",
        query: { fm:res.data },
      });
    });
}
function back(){
  router.push({path:'/managercheck'})
}
</script>

<style>
.managercheckadd {
  width: 37%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  background-color: rgba(75, 81, 95, 0.3);
  box-shadow: 7px 7px 17px rgba(52, 56, 66, 0.5);
  border-radius: 5px;
}
.managercheckadd h1 {
  color: #f0edf3;
  text-align: center;
}
.managercheckadd input {
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
.managercheckadd span {
  display: block;
  text-align: center;
  color: #f0edf3;
  font-size: 20px;
}
.managercheckadd .button {
  text-align: center;
  height: 30px;
  width: 120px;
  font-family: 宋体;
}
.managercheckadd button{
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