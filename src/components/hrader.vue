<template>
    <div id="head">
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            batList:[
                {
                    name:"首页",
                    icon:"",
                    router:"/"
                },
                {
                    name:"消息",
                    icon:"",
                    router:"/"
                },
                {
                    name:"发现",
                    icon:"",
                    router:"/"
                },
                {
                    name:"我的",
                    icon:"",
                    router:"/"
                }
            ]
        }
    },

}
</script>
<style lang="less" scoped>
#head{
    position: fixed;
    left: 0;
    bottom: 0;
    height: 1rem;
    width: 100%;
    text-align: center;
    line-height: 1rem;
    div{
        width: 25%;
        float: left;
    }
}
</style>