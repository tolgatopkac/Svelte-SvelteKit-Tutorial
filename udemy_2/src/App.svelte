<script>
  import Card from "./Card.svelte";
  import NamedCard from "./NamedCard.svelte";
</script>

<div>
  <Card>Merhaba</Card>

  <Card>
    <button>Tıkla</button>
  </Card>
  <div>
    <NamedCard>
      <span slot="isim">Tolga</span>
      <span slot="adres">kocaeli</span>
    </NamedCard>
  </div>
</div>

<style>
</style>
