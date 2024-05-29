<script>
  import { onMount } from 'svelte'

  export let url
  export let poster

  let element

  onMount(() => {
    videojs(element, {
      playbackRates: [0.5, 1, 1.5, 2],
      poster,
      aspectRatio: '16:9',
      fluid: true
    })
  })
</script>

<video-js bind:this={element} controls preload="auto" muted autoplay>
  <source src={url} type="application/x-mpegURL" />
</video-js>
