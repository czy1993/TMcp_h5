<template>
    <div id="news">
        <van-nav-bar title="消息" left-text="" right-text="" />
        <div class="head">
            <div class="head-li" v-for="(item,index) in newsList" :key="index">
                <span>
                    <img src="../../../static/img/account.png" alt="">
                    <i>{{item.num}}</i>
                </span>
                <p>{{item.name}}</p>
            </div>
        </div>
        <div class="nav">
            <div class="nav-top">
                <h4>最新消息(20)</h4>
                <span>星标好友(5)</span>
            </div>
            <div>
                
            </div>
        </div>
        <Foot></Foot>
    </div>
</template>
<script>
import Foot from "../../components/foot"
export default {
    data(){
        return{
            newsList:[
                {
                    id:"1",
                    name:"心动我",
                    icon:"../../../static/img/account.png",
                    num:"9",
                },
                {
                    id:"2",
                    name:"我心动",
                    icon:"../../../static/img/account.png",
                    num:"20",
                },
                {
                    id:"3",
                    name:"互相心动",
                    icon:"../../../static/img/account.png",
                    num:"11",
                },
                {
                    id:"4",
                    name:"好友申请",
                    icon:"../../../static/img/account.png",
                    num:"3",
                },
            ]
        }
    },
    components:{
        Foot
    }
}
</script>
<style lang="less" scoped>
#news{
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    .head{
        position: absolute;
        top: 1.2rem;
        left: 0;
        height: 3rem;
        width: 100%;
        background: greenyellow;
        box-sizing: border-box;
        padding: 0.4rem;
        .head-li{
            float: left;
            width: 25%;
            height: 2.2rem;
            box-sizing: border-box;
            padding: 0 0.2rem;
            span{
                display: block;
                position: relative;
                height: 1.2rem;
                box-sizing: border-box;
                padding: 0.2rem;
                img{
                    height: 0.8rem;
                }
                i{
                    position: absolute;
                    display: inline-block;
                    top: 0;
                    right: 0;
                    padding: 0 0.1rem;
                    background: red;
                    color: #fff;
                    font-size: 13px;
                    border-radius: 0.3rem;
                    border: 1px solid #fff;

                }
            }
            p{
                margin: 0;
                font-size: 12px;
                color: #fff;
            }
        }
    }
    .nav{
        position: absolute;
        top: 3.5rem;
        left: 0;
        bottom: 1.6rem;
        right: 0;
        background: #fff;
        border-radius: 0.5rem 0.5rem 0 0;
        box-shadow: #f1f1f1;
        box-sizing: border-box;
        padding:0 0.5rem;
        .nav-top{
            height: 1.5rem;
            line-height: 1.5rem;
            
            h4{
                float: left;
                margin: 0;
                padding: 0;
            }
            span{
                float: left;
                height: 1.5rem;
                margin-left: 0.2rem;
                font-size: 12px;
                line-height: 1.7rem;
                color: #ccc;
            }
        }
    }


}
</style>