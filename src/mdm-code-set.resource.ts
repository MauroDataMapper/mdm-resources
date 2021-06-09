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
import { FinalisePayload, ModelRemoveQueryParameters } from './mdm-model-types.model';
import { RequestSettings, QueryParameters, Uuid, FilterQueryParameters } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
import { CodeSetCreatePayload, CodeSetUpdatePayload } from './mdm-code-set.model';

/**
 * Controller: codeSet
 |   GET    | /api/codeSets/providers/importers                                                                          | Action: importerProviders                       |
 |   GET    | /api/codeSets/providers/exporters                                                                          | Action: exporterProviders                       |
 |   POST   | /api/codeSets/import/${importerNamespace}/${importerName}/${importerVersion}                               | Action: importModels                            |
 |   POST   | /api/codeSets/export/${exporterNamespace}/${exporterName}/${exporterVersion}                               | Action: exportModels                            |
 |  DELETE  | /api/codeSets/${codeSetId}/readByAuthenticated                                                             | Action: readByAuthenticated                     |
 |   PUT    | /api/codeSets/${codeSetId}/readByAuthenticated                                                             | Action: readByAuthenticated                     |
 |  DELETE  | /api/codeSets/${codeSetId}/readByEveryone                                                                  | Action: readByEveryone                          |
 |   PUT    | /api/codeSets/${codeSetId}/readByEveryone                                                                  | Action: readByEveryone                          |
 |   PUT    | /api/codeSets/${codeSetId}/newModelVersion                                                                 | Action: newModelVersion                         |
 |   PUT    | /api/codeSets/${codeSetId}/newDocumentationVersion                                                         | Action: newDocumentationVersion                 |
 |   PUT    | /api/codeSets/${codeSetId}/finalise                                                                        | Action: finalise                                |
 |   POST   | /api/folders/${folderId}/codeSets                                                                          | Action: save                                    |
 |   GET    | /api/folders/${folderId}/codeSets                                                                          | Action: index                                   |
 |  DELETE  | /api/codeSets/${codeSetId}/terms/${termId}                                                                 | Action: alterTerms                              |
 |   PUT    | /api/codeSets/${codeSetId}/terms/${termId}                                                                 | Action: alterTerms                              |
 |   PUT    | /api/codeSets/${codeSetId}/folder/${folderId}                                                              | Action: changeFolder                            |
 |   GET    | /api/codeSets/${codeSetId}/diff/${otherModelId}                                                            | Action: diff                                    |
 |   PUT    | /api/folders/${folderId}/codeSets/${codeSetId}                                                             | Action: changeFolder                            |
 |   GET    | /api/codeSets/${codeSetId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                  | Action: exportModel                             |
 |   GET    | /api/codeSets                                                                                              | Action: index                                   |
 |  DELETE  | /api/codeSets                                                                                              | Action: deleteAll                               |
 |  DELETE  | /api/codeSets/${id}                                                                                        | Action: delete                                  |
 |   PUT    | /api/codeSets/${id}                                                                                        | Action: update                                  |
 |   GET    | /api/codeSets/${id}                                                                                        | Action: show                                    |
 |   PUT    | /api/codeSets/${codeSetId}/newBranchModelVersion                                                           | Action: newBranchModelVersion                   |
 |   PUT    | /api/codeSets/${codeSetId}/newForkModel                                                                    | Action: newForkModel                            |
 |   GET    | /api/codeSets/${codeSetId}/latestModelVersion                                                              | Action: latestModelVersion                      |
 |   GET    | /api/codeSets/${codeSetId}/latestFinalisedModel                                                            | Action: latestFinalisedModel                    |
 |   GET    | /api/codeSets/${codeSetId}/modelVersionTree                                                                | Action: modelVersionTree                        |
 */

/**
 * MDM resources for the management of code sets.
 */
export class MdmCodeSetResource extends MdmResource {

  importers(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/providers/importers`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  exporters(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/providers/exporters`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  importModels(namespace, name, version, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/import/${namespace}/${name}/${version}`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  exportModels(namespace, name, version, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/export/${namespace}/${name}/${version}`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  newModelVersion(codeSetId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/newModelVersion`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  newDocumentationVersion(codeSetId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/newDocumentationVersion`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  /**
   * `HTTP PUT` - Finalise a draft version of a code set to make it final and read-only.
   *
   * @param codeSetId The unique identifier of the code set to finalise.
   * @param data The payload to pass to the request when finalising the data model.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link CodeSetDetailResponse} containing a {@link CodeSetDetail} object.
   */
  finalise(codeSetId: Uuid, data: FinalisePayload, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/finalise`;
    return this.simplePut(url, data, options);
  }

  newBranchModelVersion(codeSetId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/newBranchModelVersion`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  newForkModel(codeSetId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/newForkModel`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  /**
   * `HTTP POST` - Creates a new code set under a chosen folder.
   *
   * @param folderId The unique identifier of the folder to create the code set under.
   * @param data The payload of the request containing all the details for the code set to create.
   * @param query Optional query parameters to control the creation of the code set, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link CodeSetDetailResponse} containing a {@link CodeSetDetail} object.
   */
  addToFolder(folderId: Uuid, data: CodeSetCreatePayload, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/folders/${folderId}/codeSets`;
    return this.simplePost(url, data, options);
  }

  listCodeSetsInFolder(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/folders/${folderId}/codeSets`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  removeTerm(codeSetId: string, termId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/terms/${termId}`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  alterTerm(codeSetId: string, termId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/terms/${termId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  moveCodeSetToFolder(codeSetId: string, folderId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/folder/${folderId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  /**
   * `HTTP GET` - Performs a comparison between two code sets and returns the differences between them.
   *
   * @param leftModelId The unique identifier of the code set on the left (source) side of the comparison.
   * @param rightModelId The unique identifier of the code set on the right (target) side of the comparison.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DiffCollectionResponse} containing a list of {@link DiffCollection}.
   */
  diff(leftModelId: Uuid, rightModelId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${leftModelId}/diff/${rightModelId}`;
    return this.simpleGet(url, query, options);
  }

  // changeFolder(codeSetId: string, folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
  //     const url = `${this.apiEndpoint}/folders/${folderId}/codeSets/${codeSetId}`;
  //     return this.simplePut(url, data, restHandlerOptions);
  // }

  exportModel(codeSetId: string, exporterNamespace, exporterName, exporterVersion, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP GET` - Request the list of code sets.
   *
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link CodeSetIndexResponse} containing a list of {@link CodeSet} items.
   *
   * @see {@link MdmCodeSetResource.get}
   */
  list(query?: FilterQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets`;
    return this.simpleGet(url, query, options);
  }

  removeAll(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP DELETE` - Removes an existing code set, either temporarily or permanently.
   *
   * @param codeSetId The unique identifier of the code set to remove.
   * @param query Query parameters to state if the operation should be temporary, or a "soft delete", or permanent.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   *
   * @description It is required to pass a {@link ModelRemoveParameters.permanent} flag to explicitly state whether
   * the operation is permanent or not. Setting this to `false` allows the code set to remain in Mauro but hidden; the
   * operation may also be reversed by an administrator using the {@link MdmCodeSetResource.undoSoftDelete} endpoint.
   *
   * If {@link ModelRemoveParameters.permanent} is set to `true`, then the code set will be permanently deleted with
   * no method of retrieving it.
   *
   * @see {@link MdmCodeSetResource.undoSoftDelete}
   */
  remove(codeSetId: Uuid, query?: ModelRemoveQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}`;
    return this.simpleDelete(url, query, options);
  }

  /**
   * `HTTP PUT` - Updates an existing code set.
   *
   * @param codeSetId The unique identifier of the code set to update.
   * @param data The payload of the request containing all the details for the code set to update.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link CodeSetDetailResponse} containing a {@link CodeSetDetail} object.
   */
  update(codeSetId: Uuid, data: CodeSetUpdatePayload, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}`;
    return this.simplePut(url, data, options);
  }

  /**
   * `HTTP GET` - Request a code set.
   *
   * @param dataModelId Either a unique identifier of the code set, or a path in the format `typePrefix:label|typePrefix:label`.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link CodeSetDetailResponse} containing a {@link CodeSetDetail} object.
   */
  get(codeSetId: Uuid | string, query?: QueryParameters, options?: RequestSettings) {
    let url = '';
    if (this.isGuid(codeSetId)) {
      url = `${this.apiEndpoint}/codeSets/${codeSetId}`;
    }
    else {
      url = `${this.apiEndpoint}/codeSets/path/${codeSetId}`;
    }
    return this.simpleGet(url, query, options);
  }

  terms(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/terms`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  removeReadByAuthenticated(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByAuthenticated`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  updateReadByAuthenticated(codeSetId: string, data?, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByAuthenticated`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  removeReadByEveryone(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByEveryone`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  updateReadByEveryone(codeSetId: string, data?, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByEveryone`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  latestModelVersion(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/latestModelVersion`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  latestFinalisedModel(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/latestFinalisedModel`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  modelVersionTree(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/codeSets/${codeSetId}/modelVersionTree`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP PUT` - Restores a temporarily deleted code set.
   *
   * @param codeSetId The unique identifier of the code set to restore.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link CodeSetDetailResponse} containing a {@link CodeSetDetail} object.
   *
   * `403 Forbidden` - user is not an administrator.
   *
   * @description **Note:** this endpoint may only be accessed by an administrator.
   *
   * This operation has no affect on _permanently_ deleted code set, only those temporarily marked as "deleted". Any
   * permanently deleted code set are unretrievable.
   *
   * @see {@link MdmCodeSetResource.remove}
   */
  undoSoftDelete(codeSetId: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/admin/codeSets/${codeSetId}/undoSoftDelete`;
    return this.simplePut(url, {}, options);
  }
}
