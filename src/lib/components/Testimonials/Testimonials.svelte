<script>
	import { afterUpdate, onMount } from 'svelte';
	import testimonials from './testimonials.json';

	/**
	 * @type {{ excerpt: any; author: any; testimonial?: string; }}
	 */
	let currentTestimonial;

	onMount(() => {
		currentTestimonial = testimonials[Math.floor(Math.random() * testimonials.length)];
	});

	const getRandomTestimonial = () => {
		const validTestimonials = testimonials.filter(
			(testimonial) => testimonial !== currentTestimonial
		);
		return validTestimonials[Math.floor(Math.random() * validTestimonials.length)];
	};

	afterUpdate(() => {
		setTimeout(() => {
			currentTestimonial = getRandomTestimonial();
		}, 3000);
	});
</script>

{#if currentTestimonial}
	<section>
		<h3 class="testimonial">{currentTestimonial.excerpt}</h3>
		<p class="author">- {currentTestimonial.author}</p>
	</section>
{/if}

<style>
	section {
		margin: 30px auto;
		text-align: center;
		padding: 0 20px;
		min-height: 250px;
		display: flex;
		justify-content: center;
		flex-flow: column;
		position: relative;
	}

	section:before,
	section:after {
		position: absolute;
		font-size: 20rem;
		opacity: 0.05;
		margin: 0;
		line-height: 0;
	}

	section:before {
		content: '\201C';
		top: 150px;
		left: 6vw;
	}

	section:after {
		content: '\201D';
		bottom: -20px;
		right: 6vw;
	}

	h3,
	p {
		margin: 0 0 20px;
	}

	@media only screen and (min-width: 1024px) {
		section:before {
			left: 10vw;
		}

		section:after {
			right: 10vw;
		}
	}
</style>
