// 导入配置好的配置文件
import request from './request'

// 导出login方法
export const login = (data) => {
  return request({
    url: '/login',
    method: 'POST',

    // 接收用户信息
    data
  })
}
