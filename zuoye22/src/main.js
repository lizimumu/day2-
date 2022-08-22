import App from './app.vue'
import './banner.js'
import './tab.js'
// 引入css
import '../src/style/banner.css'
import './style/index.less'
import './style/style.css'

// 1. 引入图片
//  - 引入的是图片的src属性值
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'
// 2. 创建img节点
const gif = document.createElement('img')
const png = document.createElement('img')
// 3. 设置src属性
gif.src = gifSrc
png.src = pngSrc
// 4. 插入dom
document.body.appendChild(gif)
document.body.appendChild(png)
// 引入字体图标
// 引入字体图标文件
import './assets/fonts/iconfont.css'
