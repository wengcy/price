<template>
    <div id="productDetail" v-wechat-title="$route.meta.title">
        <div class="banner">
            <img :src="url+result.picture">
        </div>
        <div class="text">
            <div>{{result.name}}</div>
            <div class="money">RMB:{{result.price}}</div>
        </div>
        <div class="detail">
            <img :src="item" v-for="item in detailFileList" :key="item">
        </div>
        <div class="space">

        </div>
        <div class="fixed">
          <a :href="'tel:'+result.tel">立即联系</a>
        </div>
    </div>
</template>
<script>
import FetchData from '@/axios/index';
import config from '@/config/index'
export default {
    data(){
        return {
            url:process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro,
            result:{},
            detailFileList:[]
        }
    },
    mounted(){
        let id = this.$route.query;
        this.queryProductById(id);
    },
    methods:{
        queryProductById(id) {
            let that = this;
            FetchData.request("product/queryProductById",{"id":id}).then((data) => {
                data = data.data;
                if(data.code == "200") {
                    that.result = data.data[0];
                    that.getDetailFileList(that.result.detail);
                }else {
                    this.$message.error('查询失败');
                }
            })
        },
        getDetailFileList(detail){
            if(detail !=""){
                let detailPicture = detail.split(",");
                for(let i = 0;i < detailPicture.length; i++){
                    this.detailFileList.push(this.url+detailPicture[i]);
                }
            }  
         }
    }
}
</script>
<style lang="scss" scoped>
#productDetail {
    .space {
        height: 45px;
    }
    .fixed {
        position: fixed;
        bottom: 0;
        background: #409EFF;
        height: 45px;
        width: 100%;
        line-height: 45px;
        text-align: center;
        letter-spacing: 10px;
        a {
            color: #fff;
        }

    }
    min-height: 100%;
    background-color: #F1F6F9;
    .banner {
        height: 174px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        >img {
            height: 90%;
            width: auto;
            padding-top: 2%;
        }
    }
    .text {
        background-color: #fff;
        padding-left: 15px;
        padding-left: 10px;
        padding-bottom: 10px;
    }
    .money {
        font-size: 16px;
        color: $theme-one;
        font-weight: bold;
    }
    .detail {
        margin-top: 10px;
        background-color: #fff;
        >img {
            width: 100%;
        }
    }
}

</style>