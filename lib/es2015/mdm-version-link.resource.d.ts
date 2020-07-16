import { MdmResource } from './mdm-resource';
/**
 * Controller: versionLink
 |   POST   | /api/${modelDomainType}/${modelId}/versionLinks                                                       | Action: save
 |   GET    | /api/${modelDomainType}/${modelId}/versionLinks                                                       | Action: index
 |  DELETE  | /api/${modelDomainType}/${modelId}/versionLinks/${id}                                                 | Action: delete
 |   PUT    | /api/${modelDomainType}/${modelId}/versionLinks/${id}                                                 | Action: update
 |   GET    | /api/${modelDomainType}/${modelId}/versionLinks/${id}                                                 | Action: show
 */
export declare class MdmVersionLinkResource extends MdmResource {
    save(modelDomainType: any, modelId: any, data: any, restHandlerOptions?: any): any;
    list(modelDomainType: any, modelId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    remove(modelDomainType: any, modelId: any, versionLinkId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    update(modelDomainType: any, modelId: any, versionLinkId: any, data: any, restHandlerOptions?: any): any;
    get(modelDomainType: any, modelId: any, versionLinkId: any, queryStringParams?: any, restHandlerOptions?: any): any;
}
