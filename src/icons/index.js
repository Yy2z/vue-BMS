import SvgIcon from '@/components/SvgIcon'

// 是否查询子目录（false），再匹配一个正则
const svgRequired = require.context('./svg', false, /\.svg$/)

// svgRequired会返回一个函数，把值传到循环里去
svgRequired.keys().forEach((item) => svgRequired(item))

// 导出，接收一个参数，注册一个全局组件
export default (app) => {
  app.component('svg-icon', SvgIcon)
}
