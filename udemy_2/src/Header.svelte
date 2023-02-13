<script>
  import { sepet } from "./store";
</script>

<div>
  <h3>Header</h3>
  <span>Sepet:{$sepet}</span>
</div>

<style>
  div {
    display: flex;
    align-items: center;
  }
  h3 {
    flex: 1;
  }
  span {
    margin-right: 50px;
  }
</style>
