<script>
  import Card from "./Card.svelte";

  const cardBilgi = {
    urun: "Kulaklik",
    fiyat: "56",
    aciklama: "Uygun bir kulaklık",
    satici: "a sahsi",
  };
</script>

<Card {...cardBilgi} />

<style>
</style>
