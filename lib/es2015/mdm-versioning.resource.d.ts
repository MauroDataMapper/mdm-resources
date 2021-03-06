import { RequestSettings, QueryParameters, ModelDomainType } from "./mdm-common.model";
import { MdmResource } from "./mdm-resource";
/**
 * Controller: versionLink
 |   GET    | /api/${modelDomainType}/${modelId}/commonAncestor/${otherModelId}                                         | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/latestVersion                                                          | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/mergeDiff/${otherModelId}                                              | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/currentMainBranch                                                      | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/availableBranches                                                      | Action: list
 **/
export declare class MdmVersioningResource extends MdmResource {
    commonAncestor(modelDomainType: string | ModelDomainType, modelId: string, otherModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    latestVersion(modelDomainType: string | ModelDomainType, modelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * @deprecated use {@link MdmMergeResource.mergeDiff} instead
     */
    mergeDiff(modelDomainType: string | ModelDomainType, modelId: string, otherModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * @deprecated use {@link MdmMergeResource.currentMainBranch} instead
     */
    currentMainBranch(modelDomainType: string | ModelDomainType, modelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    availableBranches(modelDomainType: string | ModelDomainType, modelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * @deprecated use {@link MdmMergeResource.mergeInto} instead
     */
    mergeInto(modelDomainType: string | ModelDomainType, sourceModelId: string, targetModelId: string, data: any, restHandlerOptions?: RequestSettings): any;
}
