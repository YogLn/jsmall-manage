import request from './request';

export function getGoodsList(param) {
  const {pageNo, pageSize} = param
  return request({
    url: `/mall/goods/list?pageNo=${pageNo}&pageSize=${pageSize}`
  }) 
}

export function getGoodsInfoById(id) {
  return request({
    url: `/mall/goods/getGoodsById`,
    params: {
      id
    }
  })
}

export function addGoods(data,formdata) {
  for(const key in data){
    formdata.append(key,data[key])
  }
  console.log(formdata.get("name"));
  return request({
    url: `/mall/seller/releaseGoods`,
    method: 'POST',
    data: {
      data: 
    }
  }) 
}

export function deleteGoods(id) {
  return request({
    url: `/mall/goods/deleteGoodsById`,
    method: 'delete',
    data: {
      id
    }
  }) 
}

export function updataGoodsInfo(data) {
  return request({
    url: `/mall/goods/updateGoodsById`,
    method: 'post',
    data
  }) 
}