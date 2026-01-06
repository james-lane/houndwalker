<script>
	import solo from './images/solo.jpg';
	import group from './images/group.jpg';
	import ooh from './images/ooh.jpg';
	const services = [
		{
			title: 'Solo',
			price: 16,
			info: 'Some time restriction these can be done 10am-2pm is group walking',
			image: solo
		},
		{
			title: 'Group',
			price: 14,
			info: '50% discount for second dog at same address',
			image: group
		},
		{
			title: 'Out of Hours',
			price: 16,
			info: 'On weekends or before 9am and after 5pm on weekdays',
			image: ooh
		}
	];
</script>

<section>
	<ul>
		{#each services as { title, price, info, image }}
			<li style="background-image: url({image})">
				<h3>{title}</h3>
				<p class="price">£{price}</p>
				<p class="info">{info}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		width: 100%;
		padding: 0 20px;
	}

	ul {
		display: grid;
		grid-template-columns: none;
		grid-gap: 8px;
		list-style: none;
		width: 100%;
		padding: 0;
		margin: 0;
	}

	li {
		background: var(--color-grey);
		background-position: center center;
		background-size: cover;
		background-blend-mode: multiply;
		color: var(--color-white);
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		padding: 24px 20px;
		text-align: center;
		border-radius: 4px;
	}

	h3 {
		margin: 20px 0 0;
	}

	.price {
		font-size: 3rem;
		font-weight: bold;
		margin: 0 0 20px;
	}

	.info {
		border-top: 1px solid var(--color-white);
		padding: 20px 0 0;
		margin: 0;
		width: 100%;
	}

	@media only screen and (min-width: 1024px) {
		ul {
			grid-template-columns: repeat(3, 1fr);
			margin: 0 auto;
			max-width: 80vw;
			align-self: center;
		}
	}
</style>
