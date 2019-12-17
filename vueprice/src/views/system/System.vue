<template>
    <div class="system" v-wechat-title="$route.meta.title">
        <div class="title">
            后台管理系统
        </div>
        <router-link :to="{ name: 'controlPrice'}"><el-button type="primary" class="mt15">价格管理</el-button></router-link>
        <router-link :to="{ name: 'message'}"><el-button type="primary" class="mt15">头部信息管理</el-button></router-link>
        <router-link :to="{ name: 'car'}"><el-button type="primary" class="mt15">车管理</el-button></router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.system {
    .title {
        text-align: center;
        font-size: 26px !important;
        font-weight: bold;
        color: $theme-three;
    }
    a {
        text-decoration:none
    }
    padding:15px;
    .el-button {
        display: block;
        width: 100%;
        margin-left: 0px;
    }
}
</style>