<template>
    <div>
        <van-nav-bar
            :title="title"
            left-arrow
        >
        <van-icon name="search" slot="left" />
        <van-icon name="cart" slot="right" />
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        title:String,
    }

}
</script>

<style lang="less">
    .van-icon{
        font-size: 20px !important;
    }
</style>