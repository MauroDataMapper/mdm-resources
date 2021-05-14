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
/*
Copyright 2020 University of Oxford

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
*/
import { MdmResource } from './mdm-resource';
/**
 * Controller: terminology
 |   GET    | /api/terminologies/providers/importers                                                                     | Action: importerProviders                       |
 |   GET    | /api/terminologies/providers/exporters                                                                     | Action: exporterProviders                       |
 |   POST   | /api/terminologies/import/${importerNamespace}/${importerName}/${importerVersion}                          | Action: importModels                            |
 |   POST   | /api/terminologies/export/${exporterNamespace}/${exporterName}/${exporterVersion}                          | Action: exportModels                            |
 |  DELETE  | /api/terminologies/${terminologyId}/readByAuthenticated                                                    | Action: readByAuthenticated                     |
 |   PUT    | /api/terminologies/${terminologyId}/readByAuthenticated                                                    | Action: readByAuthenticated                     |
 |  DELETE  | /api/terminologies/${terminologyId}/readByEveryone                                                         | Action: readByEveryone                          |
 |   PUT    | /api/terminologies/${terminologyId}/readByEveryone                                                         | Action: readByEveryone                          |
 |   PUT    | /api/terminologies/${terminologyId}/newModelVersion                                                        | Action: newModelVersion                         |
 |   PUT    | /api/terminologies/${terminologyId}/newDocumentationVersion                                                | Action: newDocumentationVersion                 |
 |   PUT    | /api/terminologies/${terminologyId}/finalise                                                               | Action: finalise                                |
 |   GET    | /api/terminologies/${terminologyId}/tree                                                                   | Action: tree                                    |
 |   POST   | /api/folders/${folderId}/terminologies                                                                     | Action: save                                    |
 |   GET    | /api/folders/${folderId}/terminologies                                                                     | Action: index                                   |
 |   PUT    | /api/terminologies/${terminologyId}/folder/${folderId}                                                     | Action: changeFolder                            |
 |   GET    | /api/terminologies/${terminologyId}/diff/${otherModelId}                                                   | Action: diff                                    |
 |   PUT    | /api/folders/${folderId}/terminologies/${terminologyId}                                                    | Action: changeFolder                            |
 |   GET    | /api/terminologies/${terminologyId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}         | Action: exportModel                             |
 |   GET    | /api/terminologies                                                                                         | Action: index                                   |
 |  DELETE  | /api/terminologies                                                                                         | Action: deleteAll                               |
 |  DELETE  | /api/terminologies/${id}                                                                                   | Action: delete                                  |
 |   PUT    | /api/terminologies/${id}                                                                                   | Action: update                                  |
 |   GET    | /api/terminologies/${id}                                                                                   | Action: show                                    |
 |   PUT    | /api/terminologies/${terminologyId}/newBranchModelVersion                                                  | Action: newBranchModelVersion                   |
 |   PUT    | /api/terminologies/${terminologyId}/newForkModel                                                           | Action: newForkModel                            |
 |   GET    | /api/terminologies/${terminologyId}/latestModelVersion                                                     | Action: latestModelVersion                      |
 |   GET    | /api/terminologies/${terminologyId}/latestFinalisedModel                                                   | Action: latestFinalisedModel                    |
 |   GET    | /api/terminologies/${terminologyId}/modelVersionTree                                                       | Action: modelVersionTree                        |
 */
/**
 * MDM resource for the management of terminologies.
 *
 * @see {@link MdmTermResource}
 */
var MdmTerminologyResource = /** @class */ (function (_super) {
    __extends(MdmTerminologyResource, _super);
    function MdmTerminologyResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmTerminologyResource.prototype.importers = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/providers/importers";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.exporters = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/providers/exporters";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.importModels = function (namespace, name, version, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/import/" + namespace + "/" + name + "/" + version;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.exportModels = function (namespace, name, version, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/export/" + namespace + "/" + name + "/" + version;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.newModelVersion = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/newModelVersion";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.newDocumentationVersion = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/newDocumentationVersion";
        return this.simplePut(url, data, restHandlerOptions);
    };
    /**
     * `HTTP PUT` - Finalise a draft version of a terminology to make it final and read-only.
     *
     * @param terminologyId The unique identifier of the terminology to finalise.
     * @param data The payload to pass to the request when finalising the terminology.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link TerminologyDetailResponse} containing a {@link TerminologyDetail} object.
     */
    MdmTerminologyResource.prototype.finalise = function (terminologyId, data, options) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/finalise";
        return this.simplePut(url, data, options);
    };
    MdmTerminologyResource.prototype.newBranchModelVersion = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/newBranchModelVersion";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.newForkModel = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/newForkModel";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.tree = function (terminologyId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/tree";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.moveTerminologyToFolder = function (terminologyId, folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/folder/" + folderId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.diff = function (terminologyId, otherModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/diff/" + otherModelId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.exportModel = function (terminologyId, exporterNamespace, exporterName, exporterVersion, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/export/" + exporterNamespace + "/" + exporterName + "/" + exporterVersion;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP GET` - Request the list of terminologies.
     *
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link TerminologyIndexResponse} containing a list of {@link Terminology} items.
     *
     * @see {@link MdmTerminologyResource.get}
     */
    MdmTerminologyResource.prototype.list = function (query, options) {
        var url = this.apiEndpoint + "/terminologies";
        return this.simpleGet(url, query, options);
    };
    MdmTerminologyResource.prototype.removeAll = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP DELETE` - Removes an existing terminology, either temporarily or permanently.
     *
     * @param terminologyId The unique identifier of the terminology to remove.
     * @param query Query parameters to state if the operation should be temporary, or a "soft delete", or permanent.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     *
     * @description It is required to pass a {@link ModelRemoveParameters.permanent} flag to explicitly state whether
     * the operation is permanent or not. Setting this to `false` allows the terminology to remain in Mauro but hidden; the
     * operation may also be reversed by an administrator using the {@link MdmTerminologyResource.undoSoftDelete} endpoint.
     *
     * If {@link ModelRemoveParameters.permanent} is set to `true`, then the terminology will be permanently deleted with
     * no method of retrieving it.
     *
     * @see {@link MdmDataModelResource.undoSoftDelete}
     */
    MdmTerminologyResource.prototype.remove = function (terminologyId, query, options) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId;
        return this.simpleDelete(url, query, options);
    };
    /**
     * `HTTP PUT` - Updates an existing terminology.
     *
     * @param terminologyId The unique identifier of the terminology to update.
     * @param data The payload of the request containing all the details for the terminology to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link TerminologyDetailResponse} containing a {@link TerminologyDetail} object.
     */
    MdmTerminologyResource.prototype.update = function (terminologyId, data, options) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId;
        return this.simplePut(url, data, options);
    };
    /**
     * `HTTP GET` - Request a terminology.
     *
     * @param dataModelId Either a unique identifier of the terminology, or a path in the format `typePrefix:label|typePrefix:label`.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link TerminologyDetailResponse} containing a {@link TerminologyDetail} object.
     */
    MdmTerminologyResource.prototype.get = function (terminologyId, query, options) {
        var url = '';
        if (this.isGuid(terminologyId)) {
            url = this.apiEndpoint + "/terminologies/" + terminologyId;
        }
        else {
            url = this.apiEndpoint + "/terminologies/path/" + terminologyId;
        }
        return this.simpleGet(url, query, options);
    };
    MdmTerminologyResource.prototype.termRelationships = function (terminologyId, termRelationshipTypeId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/termRelationshipTypes/" + termRelationshipTypeId + "/termRelationships";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.getTermRelationship = function (terminologyId, termRelationshipTypeId, termRelationshipId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/termRelationshipTypes/" + termRelationshipTypeId + "/termRelationships/" + termRelationshipId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.removeReadByAuthenticated = function (terminologyId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/readByAuthenticated";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.updateReadByAuthenticated = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/readByAuthenticated";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.removeReadByEveryone = function (terminologyId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/readByEveryone";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.updateReadByEveryone = function (terminologyId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/readByEveryone";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.latestModelVersion = function (terminologyId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/latestModelVersion";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.latestFinalisedModel = function (terminologyId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/latestFinalisedModel";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmTerminologyResource.prototype.modelVersionTree = function (terminologyId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/modelVersionTree";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    /**
     * `HTTP PUT` - Restores a temporarily deleted terminology.
     *
     * @param terminologyId The unique identifier of the terminology to restore.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link TerminologyDetailResponse} containing a {@link TerminologyDetail} object.
     *
     * `403 Forbidden` - user is not an administrator.
     *
     * @description **Note:** this endpoint may only be accessed by an administrator.
     *
     * This operation has no affect on _permanently_ deleted terminologies, only those temporarily marked as "deleted". Any
     * permanently deleted terminologies are unretrievable.
     *
     * @see {@link MdmTerminologyResource.remove}
     */
    MdmTerminologyResource.prototype.undoSoftDelete = function (terminologyId, options) {
        var url = this.apiEndpoint + "/admin/terminologies/" + terminologyId + "/undoSoftDelete";
        return this.simplePut(url, {}, options);
    };
    return MdmTerminologyResource;
}(MdmResource));
export { MdmTerminologyResource };
//# sourceMappingURL=mdm-terminology.resource.js.map