'use strict';

/**
 * recent-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recent-project.recent-project');
