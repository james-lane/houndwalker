<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// Load Netlify Identity Widget
		const identityScript = document.createElement('script');
		identityScript.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
		document.head.appendChild(identityScript);

		// Load Decap CMS
		const cmsScript = document.createElement('script');
		cmsScript.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
		cmsScript.onload = () => {
			if (window.netlifyIdentity) {
				window.netlifyIdentity.on('init', (user) => {
					if (!user) {
						window.netlifyIdentity.on('login', () => {
							document.location.href = '/admin/';
						});
					}
				});
			}
		};
		document.body.appendChild(cmsScript);
	});
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
	<title>Content Manager</title>
</svelte:head>
