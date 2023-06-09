<script>
  const services = [
    {
      title: 'Solo Walks',
      price: 15,
      info: 'Some time restriction these can be done 10am-2pm is group walking'
    },
    {
      title: 'Group Walks',
      price: 10,
      info: '50% discount for second dog at same address'
    },
    {
      title: 'Out of Hours Walks',
      price: 15,
      info: 'Before 9am and after 5pm and weekends'
    }
  ]
</script>

<style>
  .services {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));;
    grid-gap: 20px;
    list-style: none;
    width: 100%;
    padding: 0;
  }

  .service {
    background: var(--color-grey);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
  }
</style>

<ul class="services">
	{#each services as { title, price, info }, i}
		<li class="service">
      <h3>{title}</h3>
      <p class="service__price">{`£${price}`}</p>
      <p class="service__info">{info}</p>
    </li>
  {/each}
</ul>