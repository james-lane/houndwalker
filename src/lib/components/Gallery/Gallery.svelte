<script lang="ts">
	import type { BiggerPictureInstance } from 'bigger-picture';
	import { masonry } from './masonry';
	import { onMount } from 'svelte';

	// import style
	import { loadBp } from './load-bp';

	// image data
	let { items = [] }: { items?: any[] } = $props();

	// initializes in onMount so it runs only in browser
	let bp: BiggerPictureInstance;

	/** click handler */
	function openBiggerPicture(e: Event) {
		e.preventDefault();
		const target = e.currentTarget as HTMLAnchorElement;
		bp.open({
			items: target.parentElement!.children,
			el: target
		});
	}

	onMount(async () => {
		// use onMount to define variable so it runs only in the browser
		bp = await loadBp();
	});
</script>

<section use:masonry>
	{#each items as item}
		<a
			onclick={openBiggerPicture}
			href={item.img.split(' ')[0]}
			data-img={item.img}
			data-thumb={item.thumb}
			data-height={item.height}
			data-width={item.width}
			data-alt={item.alt}
		>
			<img src={item.thumb} alt={item.alt} />
		</a>
	{/each}
</section>

<style>
	section {
		margin: 0 auto;
	}
	img {
		max-width: 100%;
		vertical-align: bottom;
	}

	@media only screen and (min-width: 1024px) {
		section {
			margin: 0 auto;
			max-width: 80vw;
			align-self: center;
			margin-bottom: 20px;
		}
	}
</style>
