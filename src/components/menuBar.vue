<template>
    <div class="menuBar">
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="orders-o" to="/categroy">分类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" to="/shopcart">购物车</van-tabbar-item>
            <van-tabbar-item icon="manager-o" to="mine">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active:3,
        }
    },
}
</script>
<style>


</style>
