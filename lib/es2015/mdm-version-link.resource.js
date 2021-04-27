import { MdmResource } from './mdm-resource';
/**
 * Controller: versionLink
 |   POST   | /api/${modelDomainType}/${modelId}/versionLinks                                                       | Action: save
 |   GET    | /api/${modelDomainType}/${modelId}/versionLinks                                                       | Action: index
 |  DELETE  | /api/${modelDomainType}/${modelId}/versionLinks/${id}                                                 | Action: delete
 |   PUT    | /api/${modelDomainType}/${modelId}/versionLinks/${id}                                                 | Action: update
 |   GET    | /api/${modelDomainType}/${modelId}/versionLinks/${id}                                                 | Action: show
 */
export class MdmVersionLinkResource extends MdmResource {
    save(modelDomainType, modelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/versionLinks`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    list(modelDomainType, modelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/versionLinks`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    remove(modelDomainType, modelId, versionLinkId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/versionLinks/${versionLinkId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(modelDomainType, modelId, versionLinkId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/versionLinks/${versionLinkId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    get(modelDomainType, modelId, versionLinkId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${modelDomainType}/${modelId}/versionLinks/${versionLinkId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-version-link.resource.js.map