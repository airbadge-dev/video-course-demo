import {
  CLOUDFLARE_DOMAIN,
  CLOUDFLARE_ACCOUNT_ID,
  CLOUDFLARE_ACCESS_TOKEN
} from '$env/static/private'

const authorization = `Bearer ${CLOUDFLARE_ACCESS_TOKEN}`

export async function signUrl(video) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/stream/${video.vid}/token`
  const response = await fetch(url, {
    method: 'POST',
    headers: { authorization }
  }).then((r) => r.json())

  const token = response.result.token
  const signedUrl = `https://${CLOUDFLARE_DOMAIN}/${token}/manifest/video.m3u8`

  return signedUrl
}
