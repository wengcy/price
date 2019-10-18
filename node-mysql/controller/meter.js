var express = require('express')
var app = express()
let connection = require('../config/db')
var Mock = require('mockjs')
var Random = Mock.Random
let meter = {
	findMeterUser:function(req,res) {
		let data = {
			resultCode:"1",
			resultError:"",
			resultJson:{},
			resultArray:[]
		};
		data.resultJson = {
			"西南表厂(100)":["图源(20)","天联(80)"],
			"东北表厂(50)":["热力(20)","万安(30)"],
			"西北表厂(0)":["南和(0)","卓雷(0)"]
		},
		res.send(data);
	},
	findCatchMeterByPage:function(req,res){
		let userName = req.query.userName;  
		let pageSize = req.query.pageSize;
		let pageNum = req.query.pageNum;
		let data = {
			resultCode:"1",
			resultError:"",
			resultJson:{},
			resultArray:[],
			totalPage:"10",
			pageSize:pageSize,
			pageNum:pageNum
		};
		for (let i=0;i<data.pageSize;i++) {
		    let arr = [
				{"value":Random.natural(1000000000,9999999999),"name":"meterId"},
				{"value":Random.natural(1000000000,9999999999),"name":"表号"},
				{"value":Random.region()+Random.natural(0,32)+"小区","name":"地址"},
				{"value":Random.datetime(),"name":"时间"},
			]
			data.resultArray.push(arr);
		}
		res.send(data);
	},
	findMeterDetailInfo:function(req,res) {
		let meterId = req.query.meterId;
		let data = {
			resultCode:"1",
			resultError:"",
			resultJson:{},
			resultArray:[],
		};
		data.resultArray =  [
						{"value":Random.natural(1000000000,9999999999),"name":"表号"},
						{"value":Random.region()+Random.natural(0,32)+"小区","name":"地址"},
						{"value":Random.datetime(),"name":"时间"},
						{"value":Random.float(10, 100, 2, 2),"name":"充值金额"},
						{"value":Random.float(10, 100, 2, 2),"name":"缴费金额"},
						{"value":Random.float(10, 100, 2, 2),"name":"剩余金额"},
						{"value":"开阀","name":"类型"},
					]
		res.send(data);
	}
	
}

module.exports = meter



