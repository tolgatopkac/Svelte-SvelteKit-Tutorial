<script>
  let sorular = [
    { id: 1, text: "sevdiğiniz kitap ?" },
    { id: 2, text: "sevdiğiniz takım ?" },
    { id: 3, text: "sevdiğiniz renk ?" },
  ];

  let secilenSoru;
  let cevap = "";

  let tablo = [];
  const handleSubmit = (e) => {
    tablo = [
      {
        tabloSoru: secilenSoru,
        tabloCevap: cevap,
      },
      ...tablo,
    ];

    cevap = "";
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <select bind:value={secilenSoru}>
    {#each sorular as soru (soru.id)}
      <option value={soru.text}> {soru.text}</option>
    {/each}
  </select>
  <input type="text" bind:value={cevap} />
  <button type="submit">Submit</button>
</form>

<table>
  <tr>
    <th>Soru</th>
    <th>Cevap</th>
  </tr>

  {#each tablo as item (item)}
    <tr>
      <td>{item.tabloSoru}</td>
      <td>{item.tabloCevap}</td>
    </tr>
  {/each}
</table>

<style>
  table,
  th,
  td {
    border: 1px solid;
  }
</style>
