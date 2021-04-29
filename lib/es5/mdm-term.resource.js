var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var MdmTermResource = /** @class */ (function (_super) {
    __extends(MdmTermResource, _super);
    function MdmTermResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmTermResource.prototype.search = function (terminologyId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/search";
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    };
    MdmTermResource.prototype.tree = function (terminologyId, termId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/tree" + (termId ? "/" + termId : '');
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
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
    MdmTermResource.prototype.save = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms";
        return this.simplePost(url, data, restHandlerOptions);
    };
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
    MdmTermResource.prototype.list = function (terminologyId, query, options) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms";
        return this.simpleGet(url, query, options);
    };
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
    MdmTermResource.prototype.remove = function (terminologyId, termId, query, options) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId;
        return this.simpleDelete(url, query, options);
    };
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
    MdmTermResource.prototype.update = function (terminologyId, termId, data, options) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId;
        return this.simplePut(url, data, options);
    };
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
    MdmTermResource.prototype.get = function (terminologyId, termId, query, options) {
        var url = '';
        if (this.isGuid(terminologyId)) {
            url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId;
        }
        else {
            url = this.apiEndpoint + "/terminologies/path/" + termId;
        }
        return this.simpleGet(url, query, options);
    };
    MdmTermResource.prototype.addTermRelationships = function (terminologyId, termId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId + "/termRelationships";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmTermResource.prototype.termRelationships = function (terminologyId, termId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId + "/termRelationships";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTermResource.prototype.removeTermRelationship = function (terminologyId, termId, termRelationshipId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId + "/termRelationships/" + termRelationshipId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmTermResource.prototype.updateTermRelationship = function (terminologyId, termId, termRelationshipId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId + "/termRelationships/" + termRelationshipId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTermResource.prototype.getTermRelationship = function (terminologyId, termId, termRelationshipId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId + "/termRelationships/" + termRelationshipId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmTermResource;
}(MdmResource));
export { MdmTermResource };
//# sourceMappingURL=mdm-term.resource.js.map