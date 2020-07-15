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
 *
 * Controller: authenticating
 |   POST   | /api/admin/activeSessions                                                                             | Action: activeSessionsWithCredentials
 */
export declare class MdmAdminResource extends MdmResource {
    status(queryStringParams?: any): any;
    editProperties(data: any): any;
    rebuildLuceneIndexes(data: any): any;
    properties(queryStringParams?: any): any;
    modules(queryStringParams?: any): any;
    deletedModels(containerDomainType: any, modelDomainType: any, queryStringParams?: any): any;
    modelSupersededModels(containerDomainType: any, modelDomainType: any, queryStringParams?: any): any;
    documentationSupersededModels(containerDomainType: any, modelDomainType: any, queryStringParams?: any): any;
    emails(queryStringParams?: any): any;
    activeSessions(data: any): any;
}
