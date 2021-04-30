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
import { FinalisePayload, ModelRemoveQueryParameters, ModelUpdatePayload } from './mdm-model-types.model';
import { RequestSettings, QueryParameters, Uuid, FilterQueryParameters } from './mdm-common.model';
import { DataModelCreatePayload, DataModelCreateQueryParameters } from './mdm-data-model.model';
import { MdmResource } from './mdm-resource';

/**
 * Controller: dataModel
 |   GET    | /api/dataModels/providers/defaultDataTypeProviders                                                                                   | Action: defaultDataTypeProviders
 |   GET    | /api/dataModels/providers/importers                                                                                                  | Action: importerProviders
 |   GET    | /api/dataModels/providers/exporters                                                                                                  | Action: exporterProviders
 |   GET    | /api/dataModels/types                                                                                                                | Action: types
 |   POST   | /api/dataModels/import/${importerNamespace}/${importerName}/${importerVersion}                                                       | Action: importModels
 |   POST   | /api/dataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                       | Action: exportModels
 |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/clean                                                                                     | Action: deleteAllUnusedDataClasses
 |  DELETE  | /api/dataModels/${dataModelId}/dataTypes/clean                                                                                       | Action: deleteAllUnusedDataTypes
 |   GET    | /api/folders/${folderId}/dataModels                                                                                                  | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/readByAuthenticated                                                                                   | Action: readByAuthenticated
 |   PUT    | /api/dataModels/${dataModelId}/readByAuthenticated                                                                                   | Action: readByAuthenticated
 |  DELETE  | /api/dataModels/${dataModelId}/readByEveryone                                                                                        | Action: readByEveryone
 |   PUT    | /api/dataModels/${dataModelId}/readByEveryone                                                                                        | Action: readByEveryone
 |   GET    | /api/dataModels/${dataModelId}/search                                                                                                | Action: search
 |   POST   | /api/dataModels/${dataModelId}/search                                                                                                | Action: search
 |   GET    | /api/dataModels/${dataModelId}/hierarchy                                                                                             | Action: hierarchy
 |   PUT    | /api/dataModels/${dataModelId}/newModelVersion                                                                                       | Action: newModelVersion
 |   PUT    | /api/dataModels/${dataModelId}/newDocumentationVersion                                                                               | Action: newDocumentationVersion
 |   PUT    | /api/dataModels/${dataModelId}/finalise                                                                                              | Action: finalise
 |   POST   | /api/folders/${folderId}/dataModels                                                                                                  | Action: save
 |   PUT    | /api/folders/${folderId}/dataModels/${dataModelId}                                                                                   | Action: changeFolder
 |   PUT    | /api/dataModels/${dataModelId}/folder/${folderId}                                                                                    | Action: changeFolder
 |   GET    | /api/dataModels/${dataModelId}/suggestLinks/${otherModelId}                                                                          | Action: suggestLinks
 |   GET    | /api/dataModels/${dataModelId}/diff/${otherModelId}                                                                                  | Action: diff
 |   GET    | /api/dataModels/${dataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                        | Action: exportModel
 |   GET    | /api/dataModels                                                                                                                      | Action: index
 |  DELETE  | /api/dataModels                                                                                                                      | Action: deleteAll
 |  DELETE  | /api/dataModels/${id}                                                                                                                | Action: delete
 |   PUT    | /api/dataModels/${id}                                                                                                                | Action: update
 |   GET    | /api/dataModels/${id}                                                                                                                | Action: show
 |   PUT    | /api/dataModels/${dataModelId}/newBranchModelVersion                                                                                 | Action: newBranchModelVersion
 |   PUT    | /api/dataModels/${dataModelId}/newForkModel                                                                                          | Action: newForkModel
 |   GET    | /api/dataModels/${dataModelId}/latestModelVersion                                                                                    | Action: latestModelVersion
 |   GET    | /api/dataModels/${dataModelId}/latestFinalisedModel                                                                                  | Action: latestFinalisedModel
 |   GET    | /api/dataModels/${dataModelId}/modelVersionTree                                                                                      | Action: modelVersionTree
 */

/**
 * MDM resource for managing data models.
 *
 * Create new data models by placing them under folders using the {@link MdmDataModelResource.addToFolder} endpoint.
 *
 * @see {@link MdmDataClassResource}
 * @see {@link MdmDataElementResource}
 * @see {@link MdmDataTypeResource}
 */
export class MdmDataModelResource extends MdmResource {

  /**
   * `HTTP GET` - Request the available default type providers for creating data models.
   *
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataModelDefaultDataTypesResponse} containing an array of {@link DataTypeProvider} objects.
   */
  defaultDataTypes(query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/providers/defaultDataTypeProviders`;
    return this.simpleGet(url, query, options);
  }

  importers(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/providers/importers`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  exporters(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/providers/exporters`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP GET` - Request the available types for creating data models.
   *
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataModelTypesResponse} containing an array of strings.
   */
  types(query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/types`;
    return this.simpleGet(url, query, options);
  }

  importModels(importerNamespace, importerName, importerVersion, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/import/${importerNamespace}/${importerName}/${importerVersion}`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  exportModels(exporterNamespace, exporterName, exporterVersion, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  removeAllUnusedDataClasses(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/clean`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  removeAllUnusedDataTypes(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/clean`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  listInFolder(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/folders/${folderId}/dataModels`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  removeReadByAuthenticated(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByAuthenticated`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  updateReadByAuthenticated(dataModelId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByAuthenticated`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  removeReadByEveryone(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByEveryone`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  updateReadByEveryone(dataModelId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByEveryone`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  search(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/search`;
    return this.simplePost(url, queryStringParams, restHandlerOptions);
  }

  hierarchy(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/hierarchy`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  newModelVersion(dataModelId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/newModelVersion`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  newDocumentationVersion(dataModelId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/newDocumentationVersion`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  /**
   * `HTTP PUT` - Finalise a draft version of a data model to make it final and read-only.
   *
   * @param dataModelId The unique identifier of the data model to finalise.
   * @param data The payload to pass to the request when finalising the data model.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
   */
  finalise(dataModelId: Uuid, data: FinalisePayload, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/finalise`;
    return this.simplePut(url, data, options);
  }

  newBranchModelVersion(dataModelId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/newBranchModelVersion`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  newForkModel(dataModelId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/newForkModel`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  /**
   * `HTTP POST` - Creates a new data model under a chosen folder.
   *
   * @param folderId The unique identifier of the folder to create the data model under.
   * @param data The payload of the request containing all the details for the data model to create.
   * @param query Optional query parameters to control the creation of the data model, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
   */
  addToFolder(folderId: Uuid, data: DataModelCreatePayload, query?: DataModelCreateQueryParameters, options?: RequestSettings) {
    const queryString = this.generateQueryString(query);
    const url = `${this.apiEndpoint}/folders/${folderId}/dataModels${queryString}`;
    return this.simplePost(url, data, options);
  }

  updateDataModelInFolder(folderId: string, dataModelId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/folders/${folderId}/dataModels/${dataModelId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  moveDataModelToFolder(dataModelId: string, folderId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/folder/${folderId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  suggestLinks(dataModelId: string, otherModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/suggestLinks/${otherModelId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  diff(dataModelId: string, otherModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/diff/${otherModelId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  exportModel(dataModelId: string, exporterNamespace, exporterName, exporterVersion, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP GET` - Request the list of data models.
   *
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataModelIndexResponse} containing a list of {@link DataModel} items.
   *
   * @see {@link MdmDataModelResource.get}
   */
  list(query?: FilterQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels`;
    return this.simpleGet(url, query, options);
  }

  removeAll(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP DELETE` - Removes an existing data model, either temporarily or permanently.
   *
   * @param dataModelId The unique identifier of the data model to remove.
   * @param query Query parameters to state if the operation should be temporary, or a "soft delete", or permanent.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   *
   * @description It is required to pass a {@link ModelRemoveParameters.permanent} flag to explicitly state whether
   * the operation is permanent or not. Setting this to `false` allows the data model to remain in Mauro but hidden; the
   * operation may also be reversed by an administrator using the {@link MdmDataModelResource.undoSoftDelete} endpoint.
   *
   * If {@link ModelRemoveParameters.permanent} is set to `true`, then the data model will be permanently deleted with
   * no method of retrieving it.
   *
   * @see {@link MdmDataModelResource.undoSoftDelete}
   */
  remove(dataModelId: Uuid, query: ModelRemoveQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}`;
    return this.simpleDelete(url, query, options);
  }

  /**
   * `HTTP PUT` - Updates an existing data model.
   *
   * @param dataModelId The unique identifier of the data model to update.
   * @param data The payload of the request containing all the details for the data model to update.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
   */
  update(dataModelId: Uuid, data: ModelUpdatePayload, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}`;
    return this.simplePut(url, data, options);
  }

  /**
   * `HTTP GET` - Request a data model.
   *
   * @param dataModelId Either a unique identifier of the data model, or a path in the format `typePrefix:label|typePrefix:label`.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
   */
  get(dataModelId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    let url = '';
    if (this.isGuid(dataModelId)) {
      url = `${this.apiEndpoint}/dataModels/${dataModelId}`;
    }
    else {
      url = `${this.apiEndpoint}/dataModels/path/${dataModelId}`;
    }
    return this.simpleGet(url, query, options);
  }

  latestModelVersion(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/latestModelVersion`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  latestFinalisedModel(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/latestFinalisedModel`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  modelVersionTree(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/modelVersionTree`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP PUT` - Restores a temporarily deleted data model.
   *
   * @param dataModelId The unique identifier of the data model to restore.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link DataModelDetailResponse} containing a {@link DataModelDetail} object.
   *
   * `403 Forbidden` - user is not an administrator.
   *
   * @description **Note:** this endpoint may only be accessed by an administrator.
   *
   * This operation has no affect on _permanently_ deleted data models, only those temporarily marked as "deleted". Any
   * permanently deleted data models are unretrievable.
   *
   * @see {@link MdmDataModelResource.remove}
   */
  undoSoftDelete(dataModelId: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/admin/dataModels/${dataModelId}/undoSoftDelete`;
    return this.simplePut(url, {}, options);
  }
}
