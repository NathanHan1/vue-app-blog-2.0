<template>
    <div class="production">
        <div class="wrapper">
            <ul>
                <li v-for="item in items" @click="showMessage(item.title)">
                    <a href="javascript:;">
                        <div class="imgwrapper">
                            <img :class="item.name.slice(0,-4)" ref="img" :src="`${imgUrl}/${item.name}`" alt="">
                        </div>
                    <h3>{{item.title}}</h3>
                    <p class="desc">{{item.desc}}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            modal1: false,
            imgUrl: '/app/components/Production',
            items: [
                { title: `食谱指南`, desc: '微信小程序项目', name: 'cook.jpg' },
                { title: `仿知乎日报`, desc: '基于react的DVA框架构建的新闻类项目', name: 'zhihu.jpg' },
                { title: `二手车平台`, desc: 'vue+iview构建的汽车二手车查询平台', name: 'car.jpg' },
                { title: `音乐APP`, desc: '使用QQ音乐接口构建的一款移动端音乐APP', name: 'music.jpg' },
                { title: `仿外卖APP商家页面`, desc: 'vue移动端项目', name: 'sell.jpg' },
                { title: `Flappy Bird`, desc: 'canvas练习游戏', name: 'flappy-bird.jpg' },
                { title: `俄罗斯方块`, desc: '使用二维数组及面向对象中介者模式编写', name: 'eluosi.jpg' },
            ]
        };
    },
    methods: {
        showMessage(title) {
            if (title === '食谱指南') {
                this.$Message.info('访问方式：进入微信小程序搜索“食谱指南”');
            } else if (title === '仿知乎日报') {
                this.$Modal.confirm({
                    title: '本作品为移动端项目，请切换成移动端视口打开',
                    onOk: () => {
                        window.open('http://hanzhibang.cn/zhihu');
                    }
                });
            } else if (title === '音乐APP') {
                this.$Modal.confirm({
                    title: '本作品为移动端项目，请切换成移动端视口打开',
                    onOk: () => {
                        window.open('http://hanzhibang.cn/music');
                    }
                });
            } else if (title === '俄罗斯方块') {
                window.open('http://hanzhibang.cn/tetris');
            } else if (title === 'Flappy Bird') {
                window.open('http://hanzhibang.cn/bird');
            } else if (title === '仿外卖APP商家页面') {
                this.$Modal.confirm({
                    title: '本作品为移动端项目，请切换成移动端视口打开',
                    onOk: () => {
                        window.open('http://hanzhibang.cn/sell');
                    }
                });
            } else if(title==='二手车平台'){
                window.open('http://hanzhibang.cn/car');
            }
        }
    }
};
</script>

<style lang="less" scoped>
.production {
    background: #252830;
    padding: 75px 0;
    text-align: center;
    .wrapper {
        box-sizing: border-box;
        width: 1050px;
        margin: 0 auto;
        background: #242c35;
        padding: 10px;
        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            li {
                background: #434857;
                margin: 10px;
                width: 400px;
                h3 {
                    margin: 10px 0;
                }
                .desc {
                    margin: 5px 0;
                }
                a:hover {
                    color: #fff;
                }
                .imgwrapper {
                    width: 400px;
                    height: 200px;
                    overflow: hidden;
                    .car {
                        width: 400px;
                    }
                    .flappy-bird {
                        width: 400px;
                    }
                    .zhihu,
                    .music,
                    .sell {
                        width: 200px;
                    }
                }
                transition: 0.5s;
                &:hover {
                    background: rgb(59, 104, 189);
                }
            }
        }
    }
}
</style>