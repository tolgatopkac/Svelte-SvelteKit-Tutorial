<script>
  import Header from "./Header.svelte";
  import { products, sepet } from "./store";

  const sepeteEkle = (id) => {
    products.update((currentProducts) => {
      let kopyaProducts = [...currentProducts];
      let updatedProduct = kopyaProducts.find((product) => product.id == id);
      if (updatedProduct.adet > 0) {
        updatedProduct.adet--;
        sepet.update((value) => value + 1);
      }
      return kopyaProducts;
    });
  };
</script>

<Header />

{#each $products as product (product.id)}
  <div>
    <h3>{product.title}</h3>
    <span>Stok : {product.adet}</span>
    <button disabled={!product.adet} on:click={() => sepeteEkle(product.id)}
      >Sepete Ekle</button
    >
    <hr />
  </div>
{/each}

<style>
</style>
