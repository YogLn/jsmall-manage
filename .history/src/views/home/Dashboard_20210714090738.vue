<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover"
                 class="mgb20"
                 style="height:500px; width: 500px">
          <div class="user-info">
            <img src="../../assets/img/img.jpg"
                 class="user-avator"
                 alt />
            <div class="user-info-cont">
              <div class="user-info-name">{{ name }}</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user-info-list">
            上次登录时间：
            <span>2021-07-14</span>
          </div>
          <div class="user-info-list">
            上次登录地点：
            <span>曹县</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'dashboard',
  setup () {
    const name = localStorage.getItem('ms_username')
    const role = name === 'admin' ? '超级管理员' : '普通用户'

    return {
      name,
      role,
    }
  },
}
</script>

<style scoped>
.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}
</style>
