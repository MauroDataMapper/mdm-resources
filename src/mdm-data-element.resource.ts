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
import { RequestOptions, QueryParameters, Uuid } from './mdm-common.model';
import { DataElement, DataElementIndexParameters } from './mdm-data-element.model';
import { MdmResource } from './mdm-resource';

/**
 * Controller: dataElement
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}/suggestLinks/${otherDataModelId}             | Action: suggestLinks
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements                                                               | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements                                                               | Action: index
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/dataElements                                                                  | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${id}                                                         | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${id}                                                         | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${id}                                                         | Action: show
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${otherDataModelId}/${otherDataClassId}/${dataElementId}      | Action: copyDataElement
 */

/**
 * MDM resource for managing data elements attached to data classes.
 */
export class MdmDataElementResource extends MdmResource {

  suggestLinks(dataModelId: Uuid, dataClassId: Uuid, dataElementId: Uuid, otherDataModelId: Uuid, query?: QueryParameters, options?: RequestOptions) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}/suggestLinks/${otherDataModelId}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP POST` - Creates a new data element under a chosen data class.
   *
   * @param dataModelId The unique identifier of the data model to add to.
   * @param dataClassId The unique identifier of the data class to add to.
   * @param data The payload of the request containing all the details for the data element to create.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link DataElementDetailResponse} containing a {@link DataElementDetail} object.
   */
  save(dataModelId: Uuid, dataClassId: Uuid, data: DataElement, options?: RequestOptions) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements`;
    return this.simplePost(url, data, options);
  }

  /**
   * `HTTP GET` - Request the list of data elements contained within a particular data class.
   *
   * @param dataModelId The identifier of the data model to inspect.
   * @param dataClassId The identifier of the data class to inspect.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataElementIndexResponse} containing a list of {@link DataElement} items.
   *
   * @see {@link MdmDataElementResource.get}
   */
  list(dataModelId: Uuid, dataClassId: Uuid, query?: DataElementIndexParameters, options?: RequestOptions) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements`;
    return this.simpleGet(url, query, options);
  }

  listWithDataType(dataModelId: Uuid, dataTypeId: Uuid, query?: QueryParameters, options?: RequestOptions) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/dataElements`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP DELETE` - Removes an existing data element.
   *
   * @param dataModelId The unique identifier of the data model.
   * @param dataClassId The unique indentifier of the data class.
   * @param dataElementId The unique identifier of the data element to remove.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  remove(dataModelId: Uuid, dataClassId: Uuid, dataElementId: Uuid, query?: QueryParameters, options?: RequestOptions) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}`;
    return this.simpleDelete(url, query, options);
  }

  /**
   * `HTTP PUT` - Updates an existing data element under a chosen data class.
   *
   * @param dataModelId The unique identifier of the data model the data element exists under.
   * @param dataClassId The unique identifier of the data class the data element exists under.
   * @param dataElementId The unique identifier of the data element to update.
   * @param data The payload of the request containing all the details for the data element to update.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link DataElementDetailResponse} containing a {@link DataElementDetail} object.
   */
  update(dataModelId: Uuid, dataClassId: Uuid, dataElementId: Uuid, data: DataElement, options?: RequestOptions) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}`;
    return this.simplePut(url, data, options);
  }

  /**
   * `HTTP GET` - Request a data element from a data class.
   *
   * @param dataModelId Unique identifier of the data model the data element is under.
   * @param dataClassId Unique indentifier of the data class the data element is under.
   * @param dataElementId Either a unique indentifier of the data element to get, or a path in the format `typePrefix:label|typePrefix:label`.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataElementDetailResponse} containing a {@link DataElementDetail} object.
   */
  get(dataModelId: Uuid, dataClassId: Uuid, dataElementId: Uuid | string, query?: QueryParameters, options?: RequestOptions) {
    let url = '';
    if (this.isGuid(dataElementId)) {
      url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}`;
    }
    else {
      url = `${this.apiEndpoint}/dataModels/path/${dataElementId}`;
    }

    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP POST` - Copies an existing data element from one data class to another target data class.
   *
   * @param dataModelId The unique identifier of the source data model.
   * @param dataClassId The unique identifier of the source data class.
   * @param otherDataModelId The unique indentifier of the target data model to copy to.
   * @param otherDataClassId The unique identifier of the target data class to copy to.
   * @param dataElementId The unique identifier of the data element to copy.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link DataElementDetailResponse} containing the new copy of a {@link DataElementDetail} object.
   */
  copyDataElement(dataModelId: Uuid, dataClassId: Uuid, otherDataModelId: Uuid, otherDataClassId: Uuid, dataElementId: Uuid, options?: RequestOptions) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${otherDataModelId}/${otherDataClassId}/${dataElementId}`;
    return this.simplePost(url, { }, options);
  }
}
