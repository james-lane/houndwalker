<script>
  import solo from './images/solo.jpg';
  import group from './images/group.jpg';
  import ooh from './images/ooh.jpg';
  const services = [
    {
      title: 'Solo Walks',
      price: 15,
      info: 'Some time restriction these can be done 10am-2pm is group walking',
      image: solo
    },
    {
      title: 'Group Walks',
      price: 10,
      info: '50% discount for second dog at same address',
      image: group
    },
    {
      title: 'Out of Hours Walks',
      price: 15,
      info: 'Before 9am and after 5pm and weekends',
      image: ooh
    }
  ]
</script>

<ul class="services">
	{#each services as { title, price, info, image }, i}
		<li class="service" style="background-image: url({image})">
      <h3>{title}</h3>
      <p class="service__price">£{price}</p>
      <p class="service__info">{info}</p>
    </li>
  {/each}
</ul>

<style>
  .services {
    display: grid;
    grid-template-columns: none;
    grid-gap: 8px;
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .service {
    background: var(--color-grey);
    background-position: center center;
    background-size: cover;
    background-blend-mode: multiply;
    color: var(--color-white);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
    border-radius: 4px;
  }

  @media only screen and (min-width: 1024px)  {
    .services {
      grid-template-columns: repeat(3, 1fr);
      margin: 0 auto;
      max-width: 80vw;
      align-self: center;
      margin-bottom: 20px;
    }
  }
</style>