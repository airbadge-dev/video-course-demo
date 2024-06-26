# AirBadge Demo

This is an example of using [AirBadge](https://airbadge.dev) to sell digital goods.

AirBadge handles the sign up flow via [Auth.js](https://authjs.dev) and the payment flow via [Stripe Checkout](https://stripe.com/payments/checkout), and provides an API to gate paid content.

This example is setup for selling video courses. The videos are hosted privately on [Cloudflare Stream](https://developers.cloudflare.com/stream/) and are only accessible to paid customers. Once the customer pays, a signed url is generated for the stream on the server-side.

See AirBadge's [Getting Started Guide](https://docs.airbadge.dev/getting-started) for step-by-step setup instructions.

## License

MIT
