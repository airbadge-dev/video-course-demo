#!/bin/env bash

# create products & pricing
stripe prices create \
  --product-data.name="SaaS Course" \
  --lookup-key=saas-course \
  --currency=usd \
  --unit-amount=5900 

stripe prices create \
  --product-data.name="Prisma Course" \
  --lookup-key=prisma-course \
  --currency=usd \
  --unit-amount=5900
