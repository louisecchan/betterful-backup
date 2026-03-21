'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    try {
      const session = await strapi
        .service('api::order.order')
        .createCheckoutSession(products);

      return { stripeSession: session };
    } catch (error) {
      ctx.throw(500, error);
    }
  },
}));
