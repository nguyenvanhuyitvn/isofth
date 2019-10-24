import model from '../models';
const { his_service_sequence } = model;

module.exports = {
    show: (req, res) => {
        return his_service_sequence.findAll()
            .then(services => res.status(200).send({
                success: true,
                message: 'Service List',
                services
            }))
            .catch(err => res.json({ message: 'Cannot to fetch data', err }))
    },
    detail: (req, res) => {
        const id = req.params.id
        his_service_sequence.findOne({
                where: { his_service_sequence_id: id }
            })
            .then(services => res.json({ 'message': 'Fetched services', 'data': services }))
            .catch(err => res.json({ 'message': ' Cannot fetch user ' }))
    },
    store: (req, res) => {
        const { ad_client_id, ad_org_id, createdby, updatedby, his_service_sequence_uu, isactive, name, isdeleted, value } = req.body;
        return his_service_sequence.create({
                ad_client_id,
                ad_org_id,
                createdby,
                updatedby,
                his_service_sequence_uu,
                isactive,
                name,
                isdeleted,
                value
            })
            .then(services => res.status(200).send({
                success: true,
                message: 'Service Sequence has been created',
                services
            }))
            .catch(err => res.json({
                message: 'Can not create',
                err
            }))
    },
    update: (req, res) => {
        const { ad_client_id, ad_org_id, createdby, updatedby, his_service_sequence_uu, isactive, name, isdeleted, value } = req.body;
        return his_service_sequence.update({
                ad_client_id: ad_client_id,
                ad_org_id: ad_org_id,
                createdby: createdby,
                updatedby: updatedby,
                his_service_sequence_uu: his_service_sequence_uu,
                isactive: isactive,
                name: name,
                isdeleted: isdeleted,
                value: value
            }, {
                where: { his_service_sequence_id: req.params.id }
            })
            .then(row => res.json({ message: 'Successfull', 'row': row[0] }))
            .catch(err => res.json({ message: 'Cannot to update book', err }))
    },
    destroy: (req, res) => {
        const { id } = req.params.id;
        return his_service_sequence.destroy({
                where: { his_service_sequence_id: req.params.id }
            })
            .then(row => res.json({ message: 'Deleted', 'row': row }))
            .catch(err => res.json({ message: 'Cannot to delete book' }))
    }
}