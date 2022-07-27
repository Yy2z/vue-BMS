import request from './request'

export const getUser = (params) => {
  return request({
    url: '/users',
    params
  })
}

// 修改用户状态
export const changeUserState = (uid, type) => {
  return request({
    url: `users/${uid}/state/&{type}`,
    method: 'put'
  })
}

// 添加用户
export const addUser = (data) => {
  return request({
    url: 'users',
    method: 'post',
    data
  })
}

// 编辑
export const editUser = (data) => {
  return request({
    url: `users/${data.id}`,
    method: 'put',
    data
  })
}
// 删除
export const deleteUser = (id) => {
  return request({
    url: `users/${id}`,
    method: 'delete'
  })
}
