/*
Copyright 2020-2021 University of Oxford
and Health and Social Care Information Centre, also known as NHS Digital

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
import { RequestSettings, QueryParameters, Uuid, SearchQueryParameters } from './mdm-common.model';
import { DataClass, DataClassIndexParameters } from './mdm-data-class.model';
import { MdmResource } from './mdm-resource';

/**
 * Controller: dataClass
 * |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses                                                                | Action: save
 * |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses                                                                | Action: index
 * |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/search                                                                     | Action: search
 * |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/search                                                                     | Action: search
 * |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/content                                                                    | Action: content
 * |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${id}                                                          | Action: delete
 * |   PUT    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${id}                                                          | Action: update
 * |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${id}                                                          | Action: show
 * |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${otherDataModelId}/${otherDataClassId}                        | Action: copyDataClass
 * |   POST   | /api/dataModels/${dataModelId}/dataClasses                                                                                           | Action: save
 * |   GET    | /api/dataModels/${dataModelId}/dataClasses                                                                                           | Action: index
 * |   GET    | /api/dataModels/${dataModelId}/allDataClasses                                                                                        | Action: all
 * |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/${id}                                                                                     | Action: delete
 * |   PUT    | /api/dataModels/${dataModelId}/dataClasses/${id}                                                                                     | Action: update
 * |   GET    | /api/dataModels/${dataModelId}/dataClasses/${id}                                                                                     | Action: show
 * |   POST   | /api/dataModels/${dataModelId}/dataClasses/${otherDataModelId}/${otherDataClassId}                                                   | Action: copyDataClass
 * |
 * |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${otherDataModelId}/${otherDataClassId}                         | Action: removeImportDataClass
 * |   PUT    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${otherDataModelId}/${otherDataClassId}                         | Action: addImportDataClass
 * |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${otherDataModelId}/${otherDataClassId}/${otherDataElementId}  | Action: removeImportDataElement
 * |   PUT    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${otherDataModelId}/${otherDataClassId}/${otherDataElementId}  | Action: addImportDataElement
 */

/**
 * MDM resource for managing data classes attached to data models.
 */
export class MdmDataClassResource extends MdmResource {

  /**
   * `HTTP POST` - Creates a new data class under a chosen parent data class.
   *
   * @param dataModelId The unique identifier of the data model to add to.
   * @param dataClassId The unique identifier of the parent data class to add to.
   * @param data The payload of the request containing all the details for the data class to create.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link DataClassDetailResponse} containing a {@link DataClassDetail} object.
   */
  addChildDataClass(dataModelId: Uuid, dataClassId: Uuid, data: DataClass, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses`;
    return this.simplePost(url, data, options);
  }

  /**
   * `HTTP GET` - Request the list of data classes contained under a parent data class.
   *
   * @param dataModelId The identifier of the data model to inspect.
   * @param dataClassId The identifier of the parent data class to inspect.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataClassIndexResponse} containing a list of {@link DataClass} items.
   *
   * @see {@link MdmDataClassResource.getChildDataClass}
   */
  listChildDataClasses(dataModelId: Uuid, dataClassId: Uuid, query?: DataClassIndexParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP POST` - Request a full text search against the a parent data class within a data model.
   *
   * @param dataModelId The identifier of the data model to search in.
   * @param dataClassId The identifier of the parent data class to search in.
   * @param query Additional search parameters to filter the search results.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link CatalogueItemSearchResponse} containing a collection of
   * {@link CatalogueItemSearchResult} objects.
   *
   * @see {@link TreeItemSearchParameters}
   */
  search(dataModelId: Uuid, dataClassId: Uuid, query?: SearchQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/search`;
    return this.simplePost(url, query, options);
  }

  content(dataModelId: string, dataClassId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/content`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP DELETE` - Removes an existing data class from a parent data class.
   *
   * @param dataModelId The unique identifier of the data model.
   * @param dataClassId The unique indentifier of the parent data class.
   * @param childDataClassId The unique identifier of the child data class to remove.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  removeChildDataClass(dataModelId: Uuid, dataClassId: Uuid, childDataClassId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${childDataClassId}`;
    return this.simpleDelete(url, query, options);
  }

  /**
   * `HTTP PUT` - Updates an existing data class under a chosen parent data class.
   *
   * @param dataModelId The unique identifier of the data model the data class exists under.
   * @param dataClassId The unique identifier of the parent data class.
   * @param childDataClassId The unique identifier of the child data class to update.
   * @param data The payload of the request containing all the details for the data class to update.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link DataClassDetailResponse} containing a {@link DataClassDetail} object.
   */
  updateChildDataClass(dataModelId: Uuid, dataClassId: Uuid, childDataClassId: Uuid, data: DataClass, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${childDataClassId}`;
    return this.simplePut(url, data, options);
  }

  /**
   * `HTTP GET` - Request a data class from a parent data class.
   *
   * @param dataModelId Unique identifier of the data model the type is under.
   * @param dataClassId The identifier of the parent data class to inspect.
   * @param childDataClassId Either a unique indentifier of the data class to get, or a path in the format `typePrefix:label|typePrefix:label`.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataClassDetailResponse} containing a {@link DataClassDetail} object.
   *
   * This function does allow either an ID or a path string, but should ideally be used only for IDs. For using paths,
   * see the {@link MdmCatalogueItemResource.getPath()} function instead; there are no guarantees this function will support
   * paths in the future, but will currently be supported for backwards compatibility.
   */
  getChildDataClass(dataModelId: Uuid, dataClassId: Uuid, childDataClassId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    let url = '';
    if (this.isGuid(childDataClassId)) {
      url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${childDataClassId}`;
    }
    else {
      url = `${this.apiEndpoint}/dataModels/path/${childDataClassId}`;
    }

    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP POST` - Copies an existing child data class from one data model to another target data model.
   *
   * @param dataModelId The unique identifier of the source data model.
   * @param dataClassId The unique identifier of the parent data class.
   * @param otherDataModelId The unique indentifier of the target data model to copy to.
   * @param otherDataClassId The unique identifier of the data class to copy.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link DataClassDetailResponse} containing the new copy of a {@link DataClassDetail} object.
   */
  copyChildDataClass(dataModelId: Uuid, dataClassId: Uuid, otherDataModelId: Uuid, otherDataClassId: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${otherDataModelId}/${otherDataClassId}`;
    return this.simplePost(url, { }, options);
  }

  /**
   * `HTTP POST` - Creates a new data class under a chosen data model.
   *
   * @param dataModelId The unique identifier of the data model to add to.
   * @param data The payload of the request containing all the details for the data class to create.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link DataClassDetailResponse} containing a {@link DataClassDetail} object.
   */
  save(dataModelId: string, data: DataClass, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses`;
    return this.simplePost(url, data, options);
  }

  /**
   * `HTTP GET` - Request the list of data classes contained within a particular data model.
   *
   * @param dataModelId The identifier of the data model to inspect.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataClassIndexResponse} containing a list of {@link DataClass} items.
   *
   * @see {@link MdmDataClassResource.get}
   */
  list(dataModelId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses`;
    return this.simpleGet(url, query, options);
  }

  all(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/allDataClasses`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  /**
   * `HTTP DELETE` - Removes an existing data class.
   *
   * @param dataModelId The unique identifier of the data model.
   * @param dataClasseId The unique indentifier of the data class to remove.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  remove(dataModelId: Uuid, dataClassId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}`;
    return this.simpleDelete(url, query, options);
  }

  /**
   * `HTTP PUT` - Updates an existing data class under a chosen data model.
   *
   * @param dataModelId The unique identifier of the data model the data class exists under.
   * @param dataClassId The unique identifier of the data class to update.
   * @param data The payload of the request containing all the details for the data class to update.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link DataClassDetailResponse} containing a {@link DataClassDetail} object.
   */
  update(dataModelId: Uuid, dataClassId: Uuid, data: DataClass, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}`;
    return this.simplePut(url, data, options);
  }

  /**
   * `HTTP GET` - Request a data class from a data model.
   *
   * @param dataModelId Unique identifier of the data model the type is under.
   * @param dataClassId Either a unique indentifier of the data class to get.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataClassDetailResponse} containing a {@link DataClassDetail} object.
   */
  get(dataModelId: Uuid, dataClassId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP POST` - Copies an existing data class from one data model to another target data model.
   *
   * @param dataModelId The unique identifier of the source data model.
   * @param otherDataModelId The unique indentifier of the target data model to copy to.
   * @param otherDataClassId The unique identifier of the data class to copy.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link DataClassDetailResponse} containing the new copy of a {@link DataClassDetail} object.
   */
  copyDataClass(dataModelId: string, otherDataModelId: string, otherDataClassId: string, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${otherDataModelId}/${otherDataClassId}`;
    return this.simplePost(url, { }, restHandlerOptions);
  }

  /**
   * `HTTP PUT` - Import a data class into specified data class.
   *
   * @param dataModelId The unique identifier of the data model the target data class exists under.
   * @param dataClassId The unique identifier of the target data class.
   * @param otherDataModelId The unique identifier of the data model the imported data class exists under.
   * @param otherDataClassId The unique identifier of the imported data class.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link DataClassDetailResponse} containing a {@link DataClassDetail} object.
   */
  importDataClass(dataModelId: Uuid, dataClassId: Uuid, otherDataModelId: Uuid, otherDataClassId: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${otherDataModelId}/${otherDataClassId}`;
    return this.simplePut(url, { }, options);
  }

  /**
   * `HTTP DELETE` - Removes an imported data class from specified data class.
   *
   * @param dataModelId The unique identifier of the data model the target data class exists under.
   * @param dataClasseId The unique indentifier of the target data class to remove from.
   * @param otherDataModelId The unique identifier of the data model the imported data class exists under.
   * @param otherDataClassId The unique identifier of the imported data class.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  removeImportedDataClass(dataModelId: Uuid, dataClassId: Uuid, otherDataModelId: Uuid, otherDataClassId: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${otherDataModelId}/${otherDataClassId}`;
    return this.simpleDelete(url, { }, options);
  }

  /**
   * `HTTP PUT` - Import a data element into specified data class.
   *
   * @param dataModelId The unique identifier of the data model the target data class exists under.
   * @param dataClassId The unique identifier of the target data class.
   * @param otherDataModelId The unique identifier of the data model the data element exists under.
   * @param otherDataClassId The unique identifier of the data class the data element exists under.
   * @param otherDataElementId The unique identifier of the data element.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link DataClassDetailResponse} containing a {@link DataClassDetail} object.
   */
  importDataElement(dataModelId: Uuid, dataClassId: Uuid, otherDataModelId: Uuid, otherDataClassId: Uuid, otherDataElementId: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${otherDataModelId}/${otherDataClassId}/${otherDataElementId}`;
    return this.simplePut(url, { }, options);
  }

  /**
   * `HTTP DELETE` - Removes an imported data element from specified data class.
   *
   * @param dataModelId The unique identifier of the data model the target data class exists under.
   * @param dataClasseId The unique indentifier of the target data class to remove from.
   * @param otherDataModelId The unique identifier of the data model the data element exists under.
   * @param otherDataClassId The unique identifier of the data class the data element exists under.
   * @param otherDataElementId The unique identifier of the data element.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  removeImportedDataElement(dataModelId: Uuid, dataClassId: Uuid, otherDataModelId: Uuid, otherDataClassId: Uuid, otherDataElementId: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${otherDataModelId}/${otherDataClassId}/${otherDataElementId}`;
    return this.simpleDelete(url, { }, options);
  }

  /**
   * `HTTP PUT` - Add data class to the extension list of specified data class.
   *
   * @param dataModelId The unique identifier of the data model the target data class exists under.
   * @param dataClassId The unique identifier of the target data class.
   * @param otherDataModelId The unique identifier of the data model the extension data class exists under.
   * @param otherDataClassId The unique identifier of the data class to be added.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link DataClassDetailResponse} containing a {@link DataClassDetail} object.
   */
  addExtendDataClass(dataModelId: Uuid, dataClassId: Uuid, otherDataModelId: Uuid, otherDataClassId: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/extends/${otherDataModelId}/${otherDataClassId}`;
    return this.simplePut(url, { }, options);
  }

  /**
   * `HTTP DELETE` - Removes data class from the extension list of specified data class.
   *
   * @param dataModelId The unique identifier of the data model the target data class exists under.
   * @param dataClassId The unique identifier of the target data class.
   * @param otherDataModelId The unique identifier of the data model the extension data class exists under.
   * @param otherDataClassId The unique identifier of the extension data class to be removed.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  removeExtendDataClass(dataModelId: Uuid, dataClassId: Uuid, otherDataModelId: Uuid, otherDataClassId: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/extends/${otherDataModelId}/${otherDataClassId}`;
    return this.simpleDelete(url, { }, options);
  }
}
