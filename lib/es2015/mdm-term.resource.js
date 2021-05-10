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
/**
 * MDM resource for the management of terms within terminologies.
 *
 * @see {@link MdmTerminologyResource}
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
    /**
     * `HTTP POST` - Creates a new term under a chosen terminology.
     *
     * @param terminologyId The unique identifier of the terminology to create the term under.
     * @param data The payload of the request containing all the details for the term to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link TermDetailResponse} containing a {@link TermDetail} object.
     */
    save(terminologyId, data, options) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms`;
        return this.simplePost(url, data, options);
    }
    /**
     * `HTTP GET` - Request the list of terms.
     *
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link TermIndexResponse} containing a list of {@link Term} items.
     *
     * @see {@link MdmTermResource.get}
     */
    list(terminologyId, query, options) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms`;
        return this.simpleGet(url, query, options);
    }
    /**
     * `HTTP DELETE` - Removes an existing term.
     *
     * @param terminologyId The unique identifier of the owner terminology.
     * @param termId The unique identifier of the term to remove.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    remove(terminologyId, termId, query, options) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}`;
        return this.simpleDelete(url, query, options);
    }
    /**
     * `HTTP PUT` - Updates an existing term.
     *
     * @param terminologyId The unique identifier of the owner terminology.
     * @param termId The unique identifier of the term to update.
     * @param data The payload of the request containing all the details for the term to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link TermDetailResponse} containing a {@link TermDetail} object.
     */
    update(terminologyId, termId, data, options) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}`;
        return this.simplePut(url, data, options);
    }
    /**
     * `HTTP GET` - Request a term.
     *
     * @param terminologyId The unique identifier of the owner terminology.
     * @param termId Either a unique identifier of the term, or a path in the format `typePrefix:label|typePrefix:label`.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link TermDetailResponse} containing a {@link TermDetail} object.
     */
    get(terminologyId, termId, query, options) {
        let url = '';
        if (this.isGuid(terminologyId)) {
            url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}`;
        }
        else {
            url = `${this.apiEndpoint}/terminologies/path/${termId}`;
        }
        return this.simpleGet(url, query, options);
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