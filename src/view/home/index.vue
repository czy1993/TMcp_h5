<template>
  <div id="home">
    <div class="head">
      <img src="../../../static/img/shaixuan.png" alt />
      <span>筛选</span>
    </div>
    <div class="nav">
      <div class="swipe">
        <van-swipe   :loop="false">
            <van-swipe-item>
                <img class="imgs" src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img class="imgs"  src="https://img.yzcdn.cn/vant/apple-2.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                 <img class="imgs" src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img  class="imgs" src="https://img.yzcdn.cn/vant/apple-2.jpg" alt="">
            </van-swipe-item>
        </van-swipe>
      </div>
      
    </div>
    <div class="userInfo">
        <img  class="account-icon" src="../../../static/img/account.png" alt="">
        <div class="account-info">
            <p class="account">小甜密</p>
            <p class="dna">
                <span>VIP</span>
            </p>
        </div>
        <div class="account-aodiv">
 
        </div>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
import { mapState} from 'vuex'
import Foot from "../../components/foot";
export default {
  data() {
    return {
      
    };
  },
  components: {
    Foot
  },
  computed:{
      ...mapState(['account'])
  },
  created(){
      console.log(this.account)
  }
};
</script>
<style lang="less" scoped>
#home {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  .head {
    height: 1rem;
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    padding: 0.05rem 0.1rem;
    img {
      float: left;
      height: 0.9rem;
    }
    span {
      float: left;
      line-height: 0.9rem;
      font-weight: 700;
    }
  }
  .nav {
    position: absolute;
    top: 1.1rem;
    left: 0.3rem;
    bottom: 1.6rem;
    right: 0.3rem;
    background: #f1f1f1;
    border-radius: 0.5rem 0.5rem 0 0;
    box-shadow: #f1f1f1;
    .swipe{
        height: 100%;
            .van-swipe{
            height: 100%;
            .imgs{
                height: 90%;
                width: 100%;
                border-radius: 0.5rem 0.5rem 0 0;
            }
        }
    }
  }
  .userInfo{
        position: absolute;
        left: 0;
        bottom: 1.6rem;
        width: 100%;
        height: 2.5rem;
        background: #fff;
        border-radius: 0.6rem 0.6rem 0 0;
        box-sizing: border-box;
        padding: 0.2rem 0.5rem;
        box-shadow: darkgrey 0px -4px 6px -2px ;
        .account-icon{
            float: left;
            height: 1.5rem;
            margin-top: 0.25rem;
        }
        .account-info{
            float: left;
            padding-top: 0.3rem;
            margin-left: 0.15rem;
            p{
                height: 0.8rem;
                margin: 0;
                line-height: 0.8rem;
            }
            .account{
                color: #000;
                font-weight: 700;
            }
            .dna{
                span{
                    float: left;
                    height: 0.5rem;
                    font-size: 10px;
                    background: yellowgreen;
                    color: #fff;
                    line-height: 0.55rem;
                    padding: 0 0.15rem;
                    border-radius: 0.2rem;
                }
            }
        }
        .account-aodiv{
            float: right;
        }
    }
}
</style>