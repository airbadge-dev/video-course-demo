<script>
  import { page } from '$app/stores'
  import emojis from 'http-status-emojis'
</script>

<section>
  <span class="emoji">{emojis[$page.status] || '🙈'}</span>

  <h1>
    <span class="code">{$page.status}</span>
    <span>{$page.error.message}</span>
  </h1>
</section>

<style>
  section {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 5rem 0;
  }
  h1 {
    display: flex;
    gap: 1rem;
  }

  .code {
    font-weight: normal;
  }

  .emoji {
    font-size: 8rem;
  }
</style>
