<script>
  import VideoPlayer from './VideoPlayer.svelte'

  export let data

  $: ({ video, url } = data)
</script>

<h1>{video.title}</h1>

<VideoPlayer {url} poster="/covers/{video.id}.png" />
