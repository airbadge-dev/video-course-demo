# AirBadge Demo

This is an example of using [AirBadge](https://airbadge.dev) for selling digital goods.

AirBadge handles the sign up flow via [Auth.js](https://authjs.dev) and the payment flow via [Stripe Checkout](https://stripe.com/payments/checkout).

Here, the example is selling video courses. The videos are hosted privately on [Cloudflare Stream](https://developers.cloudflare.com/stream/) and are only accessible to paid customers. Once the customer pays, a signed url is generated for the video stream on the server-side.

See AirBadge's [Getting Started Guide](https://docs.airbadge.dev/getting-started) for step-by-step setup instructions.

## License

MIT
