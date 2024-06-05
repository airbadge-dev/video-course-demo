import { error } from '@sveltejs/kit'
import { get } from '$data/videos'
import { signUrl } from '$lib/server/cloudflare'

/*
 * For paid customers, returns a signed Cloudflare Stream url
 *
 * If accessed without a signed in user, or a customer that
 * has'nt purchased, it returns a 403 (access denied)
*/
export async function load({ params, locals }) {
  // get session data
  const session = await locals.getSession()

  // check if customer has purchased
  if (!session?.purchases.includes(params.id)) {
    error(403, 'Access denied')
  }

  // get video based on URL params
  const video = get(params.id)

  // create a signed video URL
  const url = await signUrl(video)

  // return video and signed url to +page.svelte
  return {
    video,
    url
  }
}
