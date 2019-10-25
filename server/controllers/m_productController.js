import model from '../models';
const { m_product } = model;

module.exports = {
    show: (req, res) => {
        return m_product.findAll()
            .then(m_products => res.status(200).send({
                success: true,
                message: 'Product List',
                m_products
            }))
            .catch(err => res.json({ message: 'Cannot to fetch data', err }))
    },
    detail: (req, res) => {
        const id = req.params.id
        m_product.findOne({
                where: { m_product_id: id }
            })
            .then(m_products => res.json({ 'message': 'Fetched products', 'data': m_products }))
            .catch(err => res.json({ 'message': ' Cannot fetch user ' }))
    },
    store: (req, res) => {
        const {
            ad_client_id,
            ad_org_id,
            isactive,
            createdby,
            updatedby,
            value,
            name,
            description,
            documentnote,
            help,
            upc,
            sku,
            c_uom_id,
            salesrep_id,
            issummary,
            isstocked,
            ispurchased,
            issold,
            isbom,
            isinvoiceprintdetails,
            ispicklistprintdetails,
            isverified,
            c_revenuerecognition_id,
            m_product_category_id,
            classification,
            volume,
            weight,
            shelfwidth,
            shelfheight,
            shelfdepth,
            unitsperpallet,
            c_taxcategory_id,
            s_resource_id,
            discontinued,
            processing,
            s_expensetype_id,
            producttype,
            imageurl,
            descriptionurl,
            guaranteedays,
            r_mailtext_id,
            versionno,
            m_attributeset_id,
            m_attributesetinstance_id,
            downloadurl,
            m_freightcategory_id,
            m_locator_id,
            guaranteedaysmin,
            iswebstorefeatured,
            isselfservice,
            c_subscriptiontype_id,
            isdropship,
            isexcludeautodelivery,
            group1,
            group2,
            istoformule,
            lowlevel,
            unitsperpack,
            copyfrom,
            m_product_uu,
            m_parttype_id,
            iskanban,
            ismanufactured,
            isphantom,
            isownbox
        } = req.body;
        return m_product.create({
                ad_client_id,
                ad_org_id,
                isactive,
                createdby,
                updatedby,
                value,
                name,
                description,
                documentnote,
                help,
                upc,
                sku,
                c_uom_id,
                salesrep_id,
                issummary,
                isstocked,
                ispurchased,
                issold,
                isbom,
                isinvoiceprintdetails,
                ispicklistprintdetails,
                isverified,
                c_revenuerecognition_id,
                m_product_category_id,
                classification,
                volume,
                weight,
                shelfwidth,
                shelfheight,
                shelfdepth,
                unitsperpallet,
                c_taxcategory_id,
                s_resource_id,
                discontinued,
                processing,
                s_expensetype_id,
                producttype,
                imageurl,
                descriptionurl,
                guaranteedays,
                r_mailtext_id,
                versionno,
                m_attributeset_id,
                m_attributesetinstance_id,
                downloadurl,
                m_freightcategory_id,
                m_locator_id,
                guaranteedaysmin,
                iswebstorefeatured,
                isselfservice,
                c_subscriptiontype_id,
                isdropship,
                isexcludeautodelivery,
                group1,
                group2,
                istoformule,
                lowlevel,
                unitsperpack,
                copyfrom,
                m_product_uu,
                m_parttype_id,
                iskanban,
                ismanufactured,
                isphantom,
                isownbox
            })
            .then(m_products => res.status(200).send({
                success: true,
                message: 'Product has been created',
                m_products
            }))
            .catch(err => res.json({
                message: 'Can not create Product',
                err
            }))
    },
    update: (req, res) => {
        const {
            ad_client_id,
            ad_org_id,
            isactive,
            createdby,
            updatedby,
            value,
            name,
            description,
            documentnote,
            help,
            upc,
            sku,
            c_uom_id,
            salesrep_id,
            issummary,
            isstocked,
            ispurchased,
            issold,
            isbom,
            isinvoiceprintdetails,
            ispicklistprintdetails,
            isverified,
            c_revenuerecognition_id,
            m_product_category_id,
            classification,
            volume,
            weight,
            shelfwidth,
            shelfheight,
            shelfdepth,
            unitsperpallet,
            c_taxcategory_id,
            s_resource_id,
            discontinued,
            processing,
            s_expensetype_id,
            producttype,
            imageurl,
            descriptionurl,
            guaranteedays,
            r_mailtext_id,
            versionno,
            m_attributeset_id,
            m_attributesetinstance_id,
            downloadurl,
            m_freightcategory_id,
            m_locator_id,
            guaranteedaysmin,
            iswebstorefeatured,
            isselfservice,
            c_subscriptiontype_id,
            isdropship,
            isexcludeautodelivery,
            group1,
            group2,
            istoformule,
            lowlevel,
            unitsperpack,
            copyfrom,
            m_product_uu,
            m_parttype_id,
            iskanban,
            ismanufactured,
            isphantom,
            isownbox
        } = req.body;
        return m_product.update({
                ad_client_id: ad_client_id,
                ad_org_id: ad_org_id,
                isactive: isactive,
                createdby: createdby,
                updatedby: updatedby,
                value: value,
                name: name,
                description: description,
                documentnote: documentnote,
                help: help,
                upc: upc,
                sku: sku,
                c_uom_id: c_uom_id,
                salesrep_id: salesrep_id,
                issummary: issummary,
                isstocked: isstocked,
                ispurchased: ispurchased,
                issold: issold,
                isbom: isbom,
                isinvoiceprintdetails: isinvoiceprintdetails,
                ispicklistprintdetails: ispicklistprintdetails,
                isverified: isverified,
                c_revenuerecognition_id: c_revenuerecognition_id,
                m_product_category_id: m_product_category_id,
                classification: classification,
                volume: volume,
                weight: weight,
                shelfwidth: shelfwidth,
                shelfheight: shelfheight,
                shelfdepth: shelfdepth,
                unitsperpallet: unitsperpallet,
                c_taxcategory_id: c_taxcategory_id,
                s_resource_id: s_resource_id,
                discontinued: discontinued,
                processing: processing,
                s_expensetype_id: s_expensetype_id,
                producttype: producttype,
                imageurl: imageurl,
                descriptionurl: descriptionurl,
                guaranteedays: guaranteedays,
                r_mailtext_id: r_mailtext_id,
                versionno: versionno,
                m_attributeset_id: m_attributeset_id,
                m_attributesetinstance_id: m_attributesetinstance_id,
                downloadurl: downloadurl,
                m_freightcategory_id: m_freightcategory_id,
                m_locator_id: m_locator_id,
                guaranteedaysmin: guaranteedaysmin,
                iswebstorefeatured: iswebstorefeatured,
                isselfservice: isselfservice,
                c_subscriptiontype_id: c_subscriptiontype_id,
                isdropship: isdropship,
                isexcludeautodelivery: isexcludeautodelivery,
                group1: group1,
                group2: group2,
                istoformule: istoformule,
                lowlevel: lowlevel,
                unitsperpack: unitsperpack,
                copyfrom: copyfrom,
                m_product_uu: m_product_uu,
                m_parttype_id: m_parttype_id,
                iskanban: iskanban,
                ismanufactured: ismanufactured,
                isphantom: isphantom,
                isownbox: isownbox
            }, {
                where: { m_product_id: req.params.id }
            })
            .then(row => res.json({ message: 'Successfull', 'row': row[0] }))
            .catch(err => res.json({ message: 'Cannot to update book', err }))
    },
    destroy: (req, res) => {
        return m_product.destroy({
                where: { m_product_id: req.params.id }
            })
            .then(row => res.json({ message: 'Deleted', 'row': row }))
            .catch(err => res.json({ message: 'Cannot to delete book' }))
    }
}