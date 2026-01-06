<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header/Header.svelte';
	import About from '$lib/components/About/About.svelte';
	import Services from '$lib/components/Services/Services.svelte';
	import Testimonials from '$lib/components/Testimonials/Testimonials.svelte';
	import Gallery from '$lib/components/Gallery/Gallery.svelte';
	import Contact from '$lib/components/Contact/Contact.svelte';
	import Facebook from '$lib/components/Facebook/Facebook.svelte';

	let { data } = $props();
	const items = $derived(data.homepageGalleryItems);
	const services = $derived(data.services);
	const aboutHeading = $derived(data.aboutHeading);
	const aboutContent = $derived(data.aboutContent);
</script>

<Header />
<Services {services} />
<About heading={aboutHeading} content={aboutContent} />
<Facebook />
<Gallery {items} />
<Testimonials />
<Contact />
