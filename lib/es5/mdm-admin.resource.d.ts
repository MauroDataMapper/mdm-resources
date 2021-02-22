import { ContainerDomainType, MdmResource, ModelDomainType } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
/**
 * Controller: admin
 |   GET    | /api/admin/status                                                                                     | Action: status
 |   POST   | /api/admin/rebuildLuceneIndexes                                                                       | Action: rebuildLuceneIndexes
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
    status(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    rebuildLuceneIndexes(data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    modules(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    deletedModels(containerDomainType: string | ContainerDomainType, modelDomainType: string | ModelDomainType, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    modelSupersededModels(containerDomainType: string | ContainerDomainType, modelDomainType: string | ModelDomainType, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    documentationSupersededModels(containerDomainType: string | ContainerDomainType, modelDomainType: string | ModelDomainType, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    emails(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    activeSessions(data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
