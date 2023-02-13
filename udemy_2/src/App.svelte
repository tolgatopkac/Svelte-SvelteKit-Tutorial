<script>
  // EVENTS - INLINE EVENTS
  /*   let konum = { x: 0, y: 0 };
  const handleClick = (event) => {
    // console.log(event);
    konum.x = event.clientX;
    konum.y = event.clientY;
  }; */
  // ----------------------------------------------------------------

  // Event Modifiers
  const handleClick = () => {
    alert("merhaba");
  };
</script>

<!--    EVENTS - INLINE EVENTS
<div on:mousemove={handleClick}>
  <h1>x: {konum.x}</h1>
  <h1>y: {konum.y}</h1>
</div>
   ---------------------------------------------------------------- -->

<!-- EVENT MODIFIERS -->
<button on:click|once={handleClick}>Tıkla</button>

<form on:submit|preventDefault>
  <input type="text" name="name" value="name" id="name" />
  <button type="submit">Submit</button>
</form>

<style>
</style>
