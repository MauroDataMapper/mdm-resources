import { MdmResource, ModelDomainType } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
/**
 * Controller: versionLink
 |   GET    | /api/${modelDomainType}/${modelId}/commonAncestor/${otherModelId}                                         | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/latestVersion                                                          | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/mergeDiff/${otherModelId}                                              | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/currentMainBranch                                                      | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/availableBranches                                                      | Action: list
 **/
export declare class MdmVersioningResource extends MdmResource {
    commonAncestor(modelDomainType: string | ModelDomainType, modelId: string, otherModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    latestVersion(modelDomainType: string | ModelDomainType, modelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    mergeDiff(modelDomainType: string | ModelDomainType, modelId: string, otherModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    currentMainBranch(modelDomainType: string | ModelDomainType, modelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    availableBranches(modelDomainType: string | ModelDomainType, modelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    mergeInto(sourceModelId: string, targetModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
