const videos = [
  {
    id: 'saas-course',
    title: 'SaaS Course',
    price: 5900,
    vid: 'a5bfa8f926dae824c04ea1db3440aeb2'
  },
  {
    id: 'prisma-course',
    title: 'Prisma Course',
    price: 5900,
    vid: 'c65be7d36a36ab58a0c43319c8d7cbe1'
  }
]

export function get(id) {
  return videos.find((video) => video.id == id)
}

export default videos
