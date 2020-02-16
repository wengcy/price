<template>
	<div class="login hvcenter wper100 hper100" v-wechat-title="$route.meta.title">
		<div class="hvcenter login-wrap">
			<p class="c-white login-title">后台管理系统</p>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<div class="ptb20">
					  <el-form-item  prop="name" label-width="auto">
						 <el-input placeholder="请输入账号" class="w302" v-model="ruleForm.name">
							<template slot="prepend">账号</template>
						</el-input>
					</el-form-item>
				</div>
				<div>
					<el-form-item  prop="password" label-width="auto" >
						 <el-input placeholder="请输入密码" class="w302" v-model="ruleForm.password" type="password">
							<template slot="prepend">密码</template>
						</el-input>
					</el-form-item>
				</div>
				<el-button class="mtb20 wper100" type="primary" @click="submitForm('ruleForm')">登录</el-button>
			</el-form>
		</div>
	</div>
</template>

<script>
import {setCookie} from '@/assets/js/util'
import FetchData from '@/axios/index';
	export default {
		data() {
		  return {
			 ruleForm: {
				  name: '',
				  password:''
				},
				rules: {
				  name: [
					   { required: true, message: '请填写账号', trigger: 'blur' }
				  ],
				   password: [
				  		{ required: true, message: '请填写密码', trigger: 'blur' }
				  ]
				}
			  };
		},
		methods: {
            login(){
                 FetchData.request("user/login",{username:this.ruleForm.name,password:this.ruleForm.password}).then((data) => {
                    data = data.data;
                    if(data.code == "200") {
                        setCookie("token","dingyou");
                        this.$router.push('system');
                    }else {
                    this.$message.error('账号或密码错误');
                    }
                })
            },
		    submitForm(formName) {
				this.$refs[formName].validate((valid) => {
				  if (valid) {
					this.login();
				  } else {
					return false;
				  }
				});
			}
		}
	}
</script>

<style scoped >
.login {
	background-image: url(../../assets/images/login-bg.jpg);
	background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}
.login-wrap {
	background-color:rgba(255,255,255,0.5);
	border-radius: 5px;
	padding: 20px;
}
.login-title {
	padding:20px 0 0 0;
}
 .w302 {
	width:302px !important;
}
.el-form-item {
	margin: 0 !important;
}
.demo-ruleForm /deep/ .el-form-item__error {
	margin-left: 70px; 
}
.ptb20 {
    padding: 20px 0px;
}
.hvcenter {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.mtb20 {
    margin-top: 20px;
    margin-bottom:20px;
}

</style>
