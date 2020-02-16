<template>
    <div id="product" v-wechat-title="$route.meta.title">
        <img src="../assets/images/banner.jpg">
        <div class="flex-center pt10 pb10">
            <img src="../assets/images/hot.png" style="width: 16px">
            <div class="pl10 pr10 ">热门推荐</div>
            <img src="../assets/images/hot.png" style="width: 16px">
        </div>
        <div class="product-wrap">
            <div v-for="(item,index) in list" :class="{mrper2: index%2 ? false:true}" :key="index" @click="showDetai(item.id)">
                <img :src="url+item.picture">
                <div>{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import FetchData from '@/axios/index';
import config from '@/config/index'
export default {
    data(){
        return{
            url:process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro,
            list:[]
        }
    },
    mounted(){
        this.queryProduct();
    },
    methods:{
        queryProduct() {
            FetchData.request("product/queryProduct").then((data) => {
                data = data.data;
                if(data.code == "200") {
                this.list = data.data;
                }else {
                this.$message.error('息查询失败');
                }
            })
        },
        showDetai(id){
            this.$router.push({name:'productDetail',query:id}) 
        }
    }
}
</script>
<style lang="scss" scoped>
#product {
    .mrper2{
        margin-right:2%;
    }
    .product-wrap {
        margin:0 10px;
        >div {
            background-color: white;
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
            display: inline-block;
            margin-bottom: 10px;
            width: 49%;
            >img {
                width: 100%;
                margin-bottom: 5px;
            }
        }
    }
    min-height: 100%;
    background-color: #F1F6F9;
    >img {
        width: 100%;
        height: auto;
    }
    .flex-center {
       display: flex;
       align-items: center;
       justify-content: center; 
    }
    .pl10 {
        padding-left: 10px;
    }
    .pr10 {
        padding-right: 10px;
    }
    .pt10 {
        padding-top: 10px;
    }
    .pb10 {
        padding-bottom: 10px;
    }
}

</style>