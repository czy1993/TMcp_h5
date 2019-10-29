<template>
    <div id="foot">
        <div v-for="(item,index) in batList" :key="index" @click="item.event">
            <img :src="item.icon" alt="">
            <p>{{item.name}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            batList:[
                {
                    name:"首页",
                    icon:"../../../static/img/logo.png",
                    router:"/",
                    event: () => {
                        this.$router.push("/");
                    }
                },
                {
                    name:"消息",
                    icon:"../../../static/img/logo.png",
                    router:"/",
                    event: () => {
                        this.$router.push("/news");
                    }
                },
                {
                    name:"发现",
                    icon:"../../../static/img/logo.png",
                    router:"/",
                    event: () => {
                        this.$router.push("/find");
                    }
                },
                {
                    name:"我的",
                    icon:"../../../static/img/logo.png",
                    router:"/",
                    event: () => {
                        this.$router.push("/myDNA");
                    }
                }
            ]
        }
    },

}
</script>
<style lang="less" scoped>
#foot{
    position: fixed;
    left: 0;
    bottom: 0;
    height: 1.6rem;
    width: 100%;
    text-align: center;
    // line-height: 1.6rem;
    border-top: 1px solid #ccc;
    font-size: 12px;
    div{
        width: 25%;
        float: left;
        img{
            width: 1rem;
            height: 1rem;
        }
        p{
            margin: 0;
        }
    }
}
</style>