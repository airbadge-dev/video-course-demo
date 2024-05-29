<script>
  import '../global.css'

  export let data

  $: ({ session } = data)
</script>

<header>
  <a href="/" class="title">My courses</a>

  <div class="buttons">
    {#if session}
      <a href="/auth/signout">Sign out</a>
      <img src={session.user.image} alt="avatar" />
    {:else}
      <a class="btn" href="/auth/signin">Sign in</a>
    {/if}
  </div>
</header>

<main>
  <slot />
</main>

<pre>session = {JSON.stringify(data.session, null, 2)}</pre>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
  }

  header img {
    width: 40px;
    height: 40px;
    aspect-ratio: 1 / 1;
    border: solid 2px #ddd;
    border-radius: 50%;
  }

  main {
    margin: 2rem 0;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  pre {
    background: #f1f1f1;
    padding: 15px;
    border-radius: 5px;
  }

  .title {
    font-family: Inter, sans-serif;
    font-size: 22px;
    letter-spacing: -0.05em;
    text-decoration: none;
    color: inherit;
  }
</style>
