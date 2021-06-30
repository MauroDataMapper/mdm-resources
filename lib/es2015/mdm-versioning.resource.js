import { MdmResource } from "./mdm-resource";
/**
 * Controller: versionLink
 |   GET    | /api/${modelDomainType}/${modelId}/commonAncestor/${otherModelId}                                         | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/latestVersion                                                          | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/mergeDiff/${otherModelId}                                              | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/currentMainBranch                                                      | Action: show
 |   GET    | /api/${modelDomainType}/${modelId}/availableBranches                                                      | Action: list
 **/
export class MdmVersioningResource extends MdmResource {
    commonAncestor(modelDomainType, modelId, otherModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/commonAncestor/${otherModelId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    latestVersion(modelDomainType, modelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/latestVersion`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    mergeDiff(modelDomainType, modelId, otherModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/mergeDiff/${otherModelId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * @deprecated use {@link MdmMergeResource.currentMainBranch} instead
     */
    currentMainBranch(modelDomainType, modelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/currentMainBranch`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    availableBranches(modelDomainType, modelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/availableBranches`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    mergeInto(modelDomainType, sourceModelId, targetModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${sourceModelId}/mergeInto/${targetModelId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-versioning.resource.js.map