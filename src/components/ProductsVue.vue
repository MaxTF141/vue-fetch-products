<template>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Brand</th>
          <th scope="col">Serial Number</th>
          <th scope="col">User Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <td>{{ index }}</td>
          <td>{{ product.brand }}</td>
          <td>{{ product.serialNumber }}</td>
          <td>{{ product.userName }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  created() {
    this.fetchProducts();
  }
}
</script>
<style>

</style>