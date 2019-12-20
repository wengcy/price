<template>
    <div class="login" v-wechat-title="$route.meta.title">
        <div >
            <van-cell-group>
            <van-field
                v-model="username"
                required
                clearable
                label="用户名"
                placeholder="请输入用户名"
            />

            <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />
            </van-cell-group>
             <el-button type="primary" class="mt15 loginBtn" @click="login">登录</el-button>
        </div>
        
    </div>
</template>
<script>
import {setCookie} from '@/assets/js/util'
import FetchData from '@/axios/index';
export default {
    data(){
        return {
            username:"",
            password:""
        }
    },
    methods:{
        login(){
             FetchData.request("user/login",{username:this.username,password:this.password}).then((data) => {
                data = data.data;
                if(data.code == "200") {
                    setCookie("token","dingyou");
                    this.$router.push('system');
                }else {
                this.$message.error('账号或密码错误');
                }
            })
        }
    }
    
}
</script>
<style lang="scss">
    .login {
        margin-top:50%;
        text-align: center;
        padding:0 30px;
        .loginBtn {
            width: 100%;
        }
    }
</style>