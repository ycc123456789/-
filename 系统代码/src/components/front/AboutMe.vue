<template>
    <div id="contact">
        <a href="#about_me" class="title animated bounceIn">
            <p class="headline" id="about_me">About me</p>
        </a>
        <div class="info animated tada">
            <img src="../../../static/me.png" alt="me"/>
            <div class="wraper">
                <p class="left">班级:</p><p class="right">19计算机1班</p>
                <p class="left">年级:</p><p class="right">大三</p>
                <p class="left">学号:</p><p class="right">190110910734</p>
                <p class="left">所获荣誉如下:</p><a class="right" ><br>2021年4月 美国大学生数学建模竞赛国际一等奖 <br>
                2021年1月 第十届APMCM亚太地区大学生数学建模竞赛三等奖 <br>
                2021年6月 国家级大学生创新创业训练计划立项 <br>
                2021年8月 第十二届中国大学生服务外包创新创业大赛全国三等奖 <br>
                2021年6月 第十二届中国大学生服务外包创新创业大赛江北新区-中兴通讯东部区域赛企业类命题二等奖 <br>
                2021年8月 第十四届中国大学生计算机设计大赛省级二等奖 <br>
                2021年6月 浙江省第十六届大学生电子商务竞赛本科组三等奖 <br>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    created () {
        this.set_headline({
            content: '关于我',
            animation: 'animated bounce'
        })
    },
    methods: mapMutations(['set_headline'])
}

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
#contact {
    min-height: 30rem;
    padding: 0 1rem 5rem;
    background: rgba(55, 57, 65, 0.2);
    .title {
        p.headline {
            width: 13rem;
        }
    }
    .info {
        position: relative;
        width: 55%;
        margin: 6.875rem auto 0;
        padding-bottom: 2rem;
        border: 0.1875rem solid rgb(129, 216, 208);
        transition: all 2s;
        &:hover {
             background: rgb(0, 194, 169);
             transition: all 2s;
         }
        img {
            width: 9.375rem;
            height: 9.375rem;
            border: 0.1875rem solid #cccccc;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            margin-left: -4.6875rem;
            margin-top: -4.6875rem;
        }
        div.wraper {
            margin-top: 8.125rem;
            padding-left: 2rem;
            p {
                display: inline-block;
                font-size: 1.25rem;
                color: #fff;
                margin-bottom: 1.5625rem;
            }
            .left {
                width: 30%;
            }
            .right {
                width: 50%;
            }
        }
    }
}
p.headline {
    padding-top: 4.375rem;
    margin: 0 auto 1.25rem;
    text-align: center;
    color: #fff;
    font-size: 2rem;
    padding-bottom: 1.25rem;
    border-bottom: 0.3125rem double rgb(129, 216, 208);
}
@media screen and (max-width: 440px) {
    /*.title, .info {*/
        /*display: block !important;*/
    /*}*/
    .info {
        width: 100% !important;
    }
    .wraper {
        padding-left: 1rem !important;
        p {
            display: block !important;
        }
        p.left {
            color: rgb(129, 216, 208) !important;
        }
        p.right {
            width: 100% !important;
        }
    }
}
</style>
