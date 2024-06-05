export async function load({ locals }) {
  // share session data with all pages
  return {
    session: await locals.getSession()
  }
}
