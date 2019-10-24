'use strict'

import Housekeeping from '../controllers/ad_housekeeping';
import ServiceSequences from '../controllers/his_service_sequence';
import M_Product from '../controllers/m_productController';
module.exports = function(app) {

    // Housekeeping API
    app.route('/api/housekeeping')
        .get(Housekeeping.show)
        .post(Housekeeping.store)

    app.route('/api/housekeeping/:id')
        .get(Housekeeping.detail)
        .put(Housekeeping.update)
        .delete(Housekeeping.destroy)
        // Service Sequence API
    app.route('/api/service-sequences')
        .get(ServiceSequences.show)
        .post(ServiceSequences.store)
    app.route('/api/service-sequences/:id')
        .get(ServiceSequences.detail)
        .put(ServiceSequences.update)
        .delete(ServiceSequences.destroy)
        // m_product API
    app.route('/api/m_product')
        .get(M_Product.show)
        .post(M_Product.store)
    app.route('/api/m_product/:id')
        .get(M_Product.detail)
        .put(M_Product.update)
        .delete(M_Product.destroy)
}