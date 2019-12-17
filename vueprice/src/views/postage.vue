<template>
    <div>
        <div>
            <van-dropdown-menu>
                <van-dropdown-item v-model="value" :options="districtList" @change="changeDistrict"/>
            </van-dropdown-menu>
        </div>
        <div>
            <van-tabs v-model="active" @change = "changeCarType">
                <van-tab v-for="item in carTypeList" :title="item.carType" :key="item.carType" :name="item.carType">
                </van-tab>
            </van-tabs>
             <cardList :carList = "carList"></cardList>
        </div>
    </div>
</template>
<script>
import FetchData from '@/axios/index';
import CardList from "@/components/CardList"
export default {
    components:{CardList},
    data(){
       return {
            value: "",
            active:0,
            districtList: [],
            carTypeList: [],
            carList:[]
        }
    },
    created() {
       this.queryDistrict();
    },
    methods:{
        changeCarType(name,title){
            this.queryCarListByDistrictIdAndCarType(this.value,this.active);
        },
        changeDistrict(value){
           this.getCarTypeListByDistrict(value);
        },
        queryDistrict() {
            FetchData.request("car/queryAllDistrict").then(data => {
                data = data.data;
                if (data.code == "200") {
                    this.value = data.data[0].district;
                    data.data.forEach(item => {
                        this.districtList.push({
                            value:item.district,
                            text:item.district
                        })
                    })
                    this.getCarTypeListByDistrict(this.value);
                } else {
                this.$message.error("查询数据失败");
                }
            });
        },
        queryCarListByDistrictIdAndCarType(district,carType){
            FetchData.request("car/queryCarListByDistrictAndCarType",{"district":district,"carType":carType}).then(data => {
                data = data.data;
                if (data.code == "200") {
                this.carList = data.data;
                } else {
                this.$message.error("查询数据失败");
                }
            });
        },
        getCarTypeListByDistrict(district){
            FetchData.request("car/queryCarTypeListByDistrict",{"district":district}).then(data => {
                data = data.data;
                if (data.code == "200") {
                    this.carTypeList = data.data;
                    this.active = this.carTypeList[0].carType;
                 this.queryCarListByDistrictIdAndCarType(this.value,this.active);
                } else {
                this.$message.error("查询数据失败");
                }
            });
        },
    }
}
</script>
<style lang="scss">
   
</style>