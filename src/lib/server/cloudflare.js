import {
  CLOUDFLARE_DOMAIN,
  CLOUDFLARE_ACCOUNT_ID,
  CLOUDFLARE_ACCESS_TOKEN
} from '$env/static/private'

// generate a signed streaming url from a video
export async function signUrl(video) {
  // call Cloudflare API
  const response = await post(`stream/${video.vid}/token`)

  // extract token
  const token = response.result.token

  // return a signed URL
  return `https://${CLOUDFLARE_DOMAIN}/${token}/manifest/video.m3u8`
}

// handle Cloudflare API calls
async function post(path) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/${path}`
  const authorization = `Bearer ${CLOUDFLARE_ACCESS_TOKEN}`

  return fetch(url, {
    method: 'POST',
    headers: { authorization }
  }).then((r) => r.json())
}
