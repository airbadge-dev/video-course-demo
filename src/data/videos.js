// list of products/courses
const videos = [
  {
    // id maps to a Stripe Price lookup_key
    id: 'saas-course',
    title: 'SaaS Course',

    // price in cents
    price: 5900,

    // vid maps to a Cloudflare Stream video id
    vid: 'a5bfa8f926dae824c04ea1db3440aeb2'
  },
  {
    // id maps to a Stripe Price lookup_key
    id: 'prisma-course',
    title: 'Prisma Course',

    // price in cents
    price: 5900,

    // vid maps to a Cloudflare Stream video id
    vid: 'c65be7d36a36ab58a0c43319c8d7cbe1'
  }
]

// find a video by id
export function get(id) {
  return videos.find((video) => video.id == id)
}

export default videos
