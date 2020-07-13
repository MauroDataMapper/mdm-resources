import { MdmResource } from './mdm-resource';
/**
 * Controller: admin
 |   GET    | /api/admin/status                                                                                     | Action: status
 |   POST   | /api/admin/editProperties                                                                             | Action: editApiProperties
 |   POST   | /api/admin/rebuildLuceneIndexes                                                                       | Action: rebuildLuceneIndexes
 |   GET    | /api/admin/properties                                                                                 | Action: apiProperties
 *
 * Controller: mauroDataMapperProvider
 |   GET    | /api/admin/modules                                                                                    | Action: modules
 *
 * Controller: treeItem
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/deleted                                     | Action: deletedModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/modelSuperseded                             | Action: modelSupersededModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/documentationSuperseded                     | Action: documentationSupersededModels
 *
 * Controller: email
 |   GET    | /api/admin/emails                                                                                     | Action: index
 */
export declare class MdmAdminResource extends MdmResource {
    status(options?: {}): any;
    editProperties(data: any, options?: {}): any;
    rebuildLuceneIndexes(data: any, options?: {}): any;
    properties(options?: {}): any;
    modules(options?: {}): any;
    deletedModels(containerDomainType: any, modelDomainType: any, options?: {}): any;
    modelSupersededModels(containerDomainType: any, modelDomainType: any, options?: {}): any;
    documentationSupersededModels(containerDomainType: any, modelDomainType: any, options?: {}): any;
    emails(options?: {}): any;
}
