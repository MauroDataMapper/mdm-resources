import { Term } from './mdm-term.model';
import { RequestSettings, QueryParameters, Uuid, FilterQueryParameters } from './mdm-common.model';
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
export declare class MdmTermResource extends MdmResource {
    search(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    tree(terminologyId: string, termId?: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP POST` - Creates a new term under a chosen terminology.
     *
     * @param terminologyId The unique identifier of the terminology to create the term under.
     * @param data The payload of the request containing all the details for the term to create.
     * @param query Optional query parameters to control the creation of the term, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link TermDetailResponse} containing a {@link TermDetail} object.
     */
    save(terminologyId: Uuid, data: Term, restHandlerOptions?: RequestSettings): any;
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
    list(terminologyId: Uuid, query?: FilterQueryParameters, options?: RequestSettings): any;
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
    remove(terminologyId: Uuid, termId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
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
    update(terminologyId: Uuid, termId: Uuid, data: Term, options?: RequestSettings): any;
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
    get(terminologyId: Uuid, termId: Uuid | string, query?: QueryParameters, options?: RequestSettings): any;
    addTermRelationships(terminologyId: string, termId: string, data: any, restHandlerOptions?: RequestSettings): any;
    termRelationships(terminologyId: string, termId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeTermRelationship(terminologyId: string, termId: string, termRelationshipId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateTermRelationship(terminologyId: string, termId: string, termRelationshipId: string, data: any, restHandlerOptions?: RequestSettings): any;
    getTermRelationship(terminologyId: string, termId: string, termRelationshipId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
}
