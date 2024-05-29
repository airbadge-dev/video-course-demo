import { error } from '@sveltejs/kit'
import { get } from '$data/videos'
import { signUrl } from '$lib/server/cloudflare'

export async function load({ params, locals }) {
  const session = await locals.getSession()

  if (!session?.purchases.includes(params.id)) {
    error(403, 'Access denied')
  }

  const video = get(params.id)
  const url = await signUrl(video)

  return {
    video,
    url
  }
}
