<script>
  export let data

  $: ({ session, videos } = data)
</script>

{#each videos as video}
  <section>
    <hgroup>
      <h2>{video.title}</h2>
      <span class="price">${video.price / 100}</span>
    </hgroup>

    {#if session?.purchases.includes(video.id)}
      <a class="btn" href="/watch/{video.id}">
        🍿 Watch
      </a>
    {:else}
      <a class="btn" href="/billing/checkout?id={video.id}">
        💳 Buy Now
      </a>
    {/if}

    <img src="/covers/{video.id}.png" alt="cover" />
  </section>
{/each}

<style>
  section {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr 1fr;
    max-width: 800px;
    margin-bottom: 5rem;
  }

  hgroup {
    grid-column: 1 / 1;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .price {
    font-size: 28px;
  }

  img {
    grid-row: 2;
    grid-column: 1 / 3;
    border-radius: 5px;
    width: 100%;
  }

  a {
    place-self: flex-end;
    align-self: center;
  }
</style>
