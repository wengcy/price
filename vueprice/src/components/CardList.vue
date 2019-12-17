<template>
    <div class="card-lists">
      <div class="item" v-for="item in carList" :key="item.id">
        <div class="item-left">
           <div class="img">
             <img :src="item.picture">
           </div>
           <div class="desc">
              <span>车牌号：{{item.carNo}}</span>
              <span>载重：{{item.loadWeight}}吨</span>
              <span>介质：{{item.media}}</span>
           </div>
        </div>
        <div class="item-right">
          <a href="tel:item.tel">立即联系</a>
        </div>
      </div>
    </div>
</template>
<script>

export default {
    props:["carList"],
    data(){
       return {}
    },
    mounted() {
    },
    methods:{
       
        
    }
    
}
</script>
<style lang="scss">
.van-tabs__line {
    background-color:$theme-three;
}
.card-lists {
  .item {
      position: relative;
      box-sizing: border-box;
      padding: 8px 16px;
      color: #323233;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      background-color: #fafafa;
      margin-bottom: 10px;
      .item-right {
        display: flex;
        align-items: center;
        a{
          background:$theme-three; 
          color: #fff;
          padding: 5px 14px;
          border-radius: 20px;
        }
       
      }
      .item-left{
        display: flex;
        .img {
            width:120px;
            height: 90px;
            margin-right: 8px;
            img{
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
        }
        .desc {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
  }
}
  
</style>