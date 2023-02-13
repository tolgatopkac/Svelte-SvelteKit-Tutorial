<div class="named-card">
  <h1>
    <slot name="isim">
      <span>İsim belirtilmemiş</span>
    </slot>
  </h1>

  <h3>
    <slot name="adres">
      <span>Adres belirtilmemiş</span>
    </slot>
  </h3>
</div>

<style>
  .named-card {
    width: 250px;
    border: 2px solid orangered;
    border-radius: 10px;
    padding: 5px;
  }
</style>
