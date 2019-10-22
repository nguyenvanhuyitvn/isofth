'use strict'

import Housekeeping from '../controllers/ad_housekeeping';
import ServiceSequences from '../controllers/his_service_sequence';
module.exports = function(app) {

    // Housekeeping API
    app.route('/api/housekeeping')
        .get(Housekeeping.show)
        .post(Housekeeping.store)
        .put(Housekeeping.update)
        .delete(Housekeeping.destroy)
        // Service Sequence API
    app.route('/api/service-sequences')
        .get(ServiceSequences.show)
        .post(ServiceSequences.store)
        .put(ServiceSequences.update)
        .delete(ServiceSequences.destroy)
}