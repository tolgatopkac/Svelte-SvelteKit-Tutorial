<script>
	import { page } from '$app/stores';
	const greetings = {
		en: 'Hello!',
		es: 'Holda!',
		tr: 'Merhaba',
		fr: 'Bonjour'
	};

	const { lang = 'en' } = $page.params;
	const greeting = greetings[lang];
</script>

<h1>{greeting}</h1>
