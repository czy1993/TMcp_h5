<template>
    <div id="find">
        <van-nav-bar title="发现" left-text="" right-text="" />

        
        <Foot></Foot>
    </div>
</template>
<script>
import Foot from "../../components/foot"
export default {
    data(){
        return{

        }
    },
    components:{
        Foot
    }
}
</script>
<style lang="less" scoped>
#find{
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    .hh{
        height: 100px;
        width: 3rem;
        background: #cccccc;
    }

}
</style>