<template>
  <main>
    <!--<div v-if="User">
      <p>{{ User }}</p>
    </div>-->
    <NavBarDashboard />
    <div class="container">
      <div class="tableUsers ">
        <TableUsers />
      </div>
    </div>
  </main>
</template>

<script>
import TableUsers from '../components/TableUsers.vue'
import NavBarDashboard from '../components/NavBarDashboard.vue'

export default {
  name: 'Dashboard',
  components: {
    TableUsers,
    NavBarDashboard,
  },
}
</script>

<style scoped>
.tableUsers {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0rem 0 1rem rgb(194, 193, 193);
  padding: 20px;
  margin-top: 40px;
  width: 85%;
  float: right;
}

@media screen and (max-width: 1000px) {
  .tableUsers {
    width: 100%;
  }
}
</style>
