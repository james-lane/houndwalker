<script>
	import { afterUpdate, onMount } from 'svelte';
  import testimonials from './testimonials.json'


  /**
	 * @type {{ excerpt: any; author: any; testimonial?: string; }}
	 */
  let currentTestimonial
  let count = 0
  
  onMount(() => {
    currentTestimonial = testimonials[Math.floor(Math.random() * (testimonials.length))]
	});
  
  const getRandomTestimonial = () => {
    const validTestimonials = testimonials.filter((testimonial) => testimonial !== currentTestimonial)
    return validTestimonials[Math.floor(Math.random() * validTestimonials.length)]
  }

  afterUpdate(() => {
    count++
	  setTimeout(() => {
      currentTestimonial = getRandomTestimonial()
    }, 3000);
  });
</script>

{#if currentTestimonial}
  <section>
    <h3 class="testimonial">"{currentTestimonial.excerpt}"</h3>
    <p class="author">- {currentTestimonial.author}</p>
  </section>
{/if}

<style>
  section {
    margin: 0 auto;
    text-align: center;
    margin-bottom: 60px;
  }
</style>