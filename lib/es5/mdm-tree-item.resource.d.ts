import { MdmResource } from './mdm-resource';
/**
 * Controller: treeItem
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/deleted                                     | Action: deletedModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/modelSuperseded                             | Action: modelSupersededModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/documentationSuperseded                     | Action: documentationSupersededModels
 |   GET    | /api/tree/${containerDomainType}/search/${searchTerm}                                                 | Action: search
 |   GET    | /api/tree/${containerDomainType}                                                                      | Action: index
 |   GET    | /api/tree/${containerDomainType}/${catalogueItemDomainType}/${catalogueItemId}                        | Action: show
 */
export declare class MdmTreeItemResource extends MdmResource {
    deletedModels(containerDomainType: any, modelDomainType: any, queryStringParams?: any, restHandlerOptions?: any): any;
    modelSupersededModels(containerDomainType: any, modelDomainType: any, queryStringParams?: any, restHandlerOptions?: any): any;
    documentationSupersededModels(containerDomainType: any, modelDomainType: any, queryStringParams?: any, restHandlerOptions?: any): any;
    search(containerDomainType: any, searchTerm: any, queryStringParams?: any, restHandlerOptions?: any): any;
    list(containerDomainType: any, queryStringParams?: any, restHandlerOptions?: any): any;
    get(containerDomainType: any, catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: any, restHandlerOptions?: any): any;
}
