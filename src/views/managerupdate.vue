<template>
  <div class="managerupdate">
    <!-- action 响应post提交改变 -->
    <form action="" class="wy-form" @submit.prevent.self="request">
      <h1>个人信息</h1>
      <span>
        <label>业主姓名:</label>
        <input
          name="userName"
          type="text"
          v-model="obj.data.userName"
          autofocus
          required
        />
      </span>
      <span>
        <label>住房编号:</label>
        <input
          name="userNumber"
          type="text"
          v-model="obj.data.userNumber"
          required
        />
      </span>
      <span>
        <label>业主职业:</label>
        <input
          name="userProfession"
          type="text"
          v-model="obj.data.userProfession"
          required
        />
      </span>
      <span class="wy-sex">
        <label>业主性别:</label>
        <input name="userSex" v-model="obj.data.userSex" required />
      </span>
      <span>
        <label>入住时间:</label>
        <input name="userData" type="date" v-model="obj.data.userData" />
      </span>
      <span>
        <label>住房面积:</label>
        <input
          name="userArea"
          type="text"
          v-model="obj.data.userArea"
          required
        />
      </span>
      <span>
        <label>常住人口:</label>
        <input
          name="userPerson"
          type="text"
          v-model="obj.data.userPerson"
          required
        />
      </span>
      <span>
        <label>联系电话:</label>
        <input
          name="userPhone"
          type="text"
          v-model="obj.data.userPhone"
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

let obj = reactive({
  data: {},
});
onBeforeMount(() => {
  console.log(route.query.data);
  let data = JSON.parse(route.query.data);
  obj.data = data;
});
function request() {
  axios
    .post("http://localhost:3001/managerupdate",obj.data)
    .then(function (res) {
      console.log(res);
      console.log(obj.data);
      router.push({
        path: "/manager",
        query: { route: route.query.userNumber },
      });
    });
}
function back(){
  router.push({path:'/manager'})
}
</script>

<style>
.managerupdate {
  width: 37%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  background-color: rgba(75, 81, 95, 0.3);
  box-shadow: 7px 7px 17px rgba(52, 56, 66, 0.5);
  border-radius: 5px;
}
.managerupdate h1 {
  color: #f0edf3;
  text-align: center;
}
.managerupdate input {
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
.managerupdate span {
  display: block;
  text-align: center;
  color: #f0edf3;
  font-size: 20px;
}
.managerupdate .button {
  text-align: center;
  height: 30px;
  width: 120px;
  font-family: 宋体;
}
.managerupdate button{
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