import model from '../models';
const { ad_housekeeping } = model;

module.exports = {
    show: (req, res) => {
        return ad_housekeeping.findAll()
            .then(housekeeping => res.status(200).send({
                success: true,
                message: "Housekeeping list",
                housekeeping
            }))
            .catch(err => res.json({ 'message': 'Can not fetched data' }))

    },
    store: (req, res) => {
        const { ad_client_id, ad_org_id, ad_table_id, backupfolder, created, description, help, isactive, name, isexportxmlbackup, issaveinhistoric } = req.body;
        return ad_housekeeping.create({
                ad_client_id,
                ad_org_id,
                ad_table_id,
                backupfolder,
                created,
                description,
                help,
                isactive,
                name,
                isexportxmlbackup,
                issaveinhistoric
            })
            .then(HouseKeeping => res.status(200).send({
                success: true,
                message: "Housekeeping successfully created",
                HouseKeeping
            }))
            .catch(err => res.json({
                message: 'Can not fetched data',
                err
            }))
    },
    update: (req, res) => {
        const { ad_housekeeping_id, ad_client_id, ad_org_id, ad_table_id, backupfolder, created, description, help, isactive, name, isexportxmlbackup, issaveinhistoric } = req.body;
        return ad_housekeeping.update({
                ad_client_id: ad_client_id,
                ad_org_id: ad_org_id,
                ad_table_id: ad_table_id,
                backupfolder: backupfolder,
                created: created,
                description: description,
                help: help,
                isactive: isactive,
                name: name,
                isexportxmlbackup: isexportxmlbackup,
                issaveinhistoric: issaveinhistoric
            }, {
                where: { ad_housekeeping_id: ad_housekeeping_id }
            })
            .then(row => res.json({ message: 'Successfull', 'row': row[0] }))
            .catch(err => res.json({ message: 'Cannot to update book', err }))
    },
    destroy: (req, res) => {
        const { id } = req.body;
        return ad_housekeeping.destroy({
                where: { ad_housekeeping_id: id }
            })
            .then(row => res.json({ message: 'Deleted', 'row': row }))
            .catch(err => res.json({ message: 'Cannot to delete book' }))
    }
}