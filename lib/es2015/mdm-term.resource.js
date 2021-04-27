import { MdmResource } from './mdm-resource';
/**
 * Controller: term
 |   GET    | /api/terminologies/${terminologyId}/terms/search                                                           | Action: search                                  |
 |   POST   | /api/terminologies/${terminologyId}/terms/search                                                           | Action: search                                  |
 |   GET    | /api/terminologies/${terminologyId}/terms/tree/${termId}?                                                  | Action: tree                                    |
 |   POST   | /api/terminologies/${terminologyId}/terms                                                                  | Action: save                                    |
 |   GET    | /api/terminologies/${terminologyId}/terms                                                                  | Action: index                                   |
 |   GET    | /api/codeSets/${codeSetId}/terms                                                                           | Action: index                                   |
 |  DELETE  | /api/terminologies/${terminologyId}/terms/${id}                                                            | Action: delete                                  |
 |   PUT    | /api/terminologies/${terminologyId}/terms/${id}                                                            | Action: update                                  |
 |   GET    | /api/terminologies/${terminologyId}/terms/${id}                                                            | Action: show
 *
 * Controller: termRelationship
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships            | Action: index                                   |
 |   POST   | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships                                            | Action: save                                    |
 |   GET    | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships                                            | Action: index                                   |
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships/${id}      | Action: show                                    |
 |  DELETE  | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships/${id}                                      | Action: delete                                  |
 |   PUT    | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships/${id}                                      | Action: update                                  |
 |   GET    | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships/${id}                                      | Action: show
 */
export class MdmTermResource extends MdmResource {
    search(terminologyId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/search`;
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    }
    tree(terminologyId, termId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/tree${termId ? `/${termId}` : ''}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    save(terminologyId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    list(terminologyId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    remove(terminologyId, termId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(terminologyId, termId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    /// <summary>
    /// Get term by Terminology Id, term Id or a path
    /// </summary>
    /// <param name="terminologyId">Terminology Id</param>
    /// <param name="termId">Terminology Id or a path in the format typePrefix:label|typePrefix:label</param>
    /// <param name="queryStringParams">Query String Params</param>
    /// <param name="restHandlerOptions">restHandler Options</param>
    get(terminologyId, termId, queryStringParams, restHandlerOptions) {
        let url = '';
        if (this.isGuid(terminologyId)) {
            url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}`;
        }
        else {
            url = `${this.apiEndpoint}/terminologies/path/${termId}`;
        }
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    addTermRelationships(terminologyId, termId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    termRelationships(terminologyId, termId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeTermRelationship(terminologyId, termId, termRelationshipId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships/${termRelationshipId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateTermRelationship(terminologyId, termId, termRelationshipId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships/${termRelationshipId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    getTermRelationship(terminologyId, termId, termRelationshipId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships/${termRelationshipId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-term.resource.js.map