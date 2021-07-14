import request from './request';

export function selectOrderBySeller(params) {
  return request({
    url: `/mall/order/selectbyseller`
  })
}

// 取消订单
export function cancelOrderById(data) {
  return request({
    url: `/mall/order/cancels`,
		method: 'put',
		data
  })
}

// 删除订单
export function delOrderById(data) {
  return request({
    url: `/mall/order/delete`,
		method: 'delete',
		data
  })
}

// 查询用户订单
export function getUserOrderByUserName(user) {
  return request({
    url: `/mall/order/selectbyuser/${user}`,
  })
}
