import { MdmRequestOptions, QueryParameters, ModelDomainType } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: versionLink
 |   GET    | /api/${modelDomainType}/${modelId}/commonAncestor/${otherModelId}                                         | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/latestVersion                                                          | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/mergeDiff/${otherModelId}                                              | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/currentMainBranch                                                      | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/availableBranches                                                      | Action: list
 **/
export declare class MdmVersioningResource extends MdmResource {
    commonAncestor(modelDomainType: string | ModelDomainType, modelId: string, otherModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    latestVersion(modelDomainType: string | ModelDomainType, modelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    mergeDiff(modelDomainType: string | ModelDomainType, modelId: string, otherModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    currentMainBranch(modelDomainType: string | ModelDomainType, modelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    availableBranches(modelDomainType: string | ModelDomainType, modelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    mergeInto(sourceModelId: string, targetModelId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
}
