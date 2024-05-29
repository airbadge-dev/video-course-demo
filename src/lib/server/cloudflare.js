import {
  CLOUDFLARE_DOMAIN,
  CLOUDFLARE_ACCOUNT_ID,
  CLOUDFLARE_ACCESS_TOKEN
} from '$env/static/private'

export async function signUrl(video) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/stream/${video.vid}/token`,
    {
      method: 'POST',
      headers: {
        authorization: `Bearer ${CLOUDFLARE_ACCESS_TOKEN}`
      }
    }
  ).then((r) => r.json())

  const token = response.result.token
  const url = `https://${CLOUDFLARE_DOMAIN}/${token}/manifest/video.m3u8`

  return url
}
