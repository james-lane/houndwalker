<script lang="ts">
	let { heading = 'The Hound Walker', content = '' }: { heading?: string; content?: string } =
		$props();
</script>

<section>
	<h1>{heading}</h1>
	{@html content}
</section>

<style>
	section {
		margin: 0 auto;
		text-align: center;
		justify-self: center;
		padding: 60px 20px 0;
	}

	section :global(p:last-child) {
		margin-bottom: 0;
	}

	@media only screen and (min-width: 1024px) {
		section {
			width: 50vw;
		}
	}
</style>
