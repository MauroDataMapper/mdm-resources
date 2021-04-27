import { RequestOptions, QueryParameters, ModelDomainType } from 'mdm-common.model';
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
    save(modelDomainType: string | ModelDomainType, modelId: string, data: any, restHandlerOptions?: RequestOptions): any;
    list(modelDomainType: string | ModelDomainType, modelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    remove(modelDomainType: string | ModelDomainType, modelId: string, versionLinkId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    update(modelDomainType: string | ModelDomainType, modelId: string, versionLinkId: string, data: any, restHandlerOptions?: RequestOptions): any;
    get(modelDomainType: string | ModelDomainType, modelId: string, versionLinkId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
}
