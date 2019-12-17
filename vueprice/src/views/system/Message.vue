<template>
    <div class="meaasge" v-wechat-title="$route.meta.title">
        <el-input type="textarea" v-model="headerInfo"  autosize></el-input>
        <div class="gray mt15">注：{{tip}}</div>
        <el-button type="primary" class="mt15" @click="requestPrice">修改头部信息</el-button>
    </div>

</template>
<script>
import FetchData from '@/axios/index';
export default {
    data(){
        return {
            headerInfo:"",
            tip:"<br>为换行符"
        
        }
    },
    mounted() {
        this.queryMessage();
    },
    methods:{
        queryMessage() {
            FetchData.request("message/queryMessage").then((data) => {
                data = data.data;
                if(data.code == "200") {
                this.headerInfo = data.data[0].message;
                }else {
                this.$message.error('头信息查询失败');
                }
            })
        },
         requestPrice() {
            FetchData.request(`message/updateMessage`, {"message":this.headerInfo}, "post").then(data => {
                data = data.data;
                if (data.code == "200") {
                this.$message({
                    message: `修改数据成功`,
                    type: "success"
                });
                } else {
                this.$message.error(`修改数据失败`);
                }
            });
        },
        
    }
    
}
</script>
<style lang="scss">
    .meaasge {
        padding:15px;
        .el-button {
            width: 100%;
        }
    }
</style>