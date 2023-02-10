<!-- Script Tag -->
<script>
	let name = 'Svelte';
	let src = 'http://picsum.com/200/200';
	let string = 'Some <strong>string</strong> with html.';
</script>

<!-- HTML -->
<img {src} alt="Some text {name}" />
<h1>Hello {name.toLowerCase()}!</h1>
<p>{@html string}</p>

<!-- style -->
<style>
	h1 {
		color: red;
	}
</style>
