/*
Copyright 2020-2024 University of Oxford and NHS England

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
import {
  RequestSettings,
  QueryParameters,
  Uuid,
  FilterQueryParameters
} from '../mdm-common.model';
import { DataType } from './mdm-data-type.model';
import { MdmResource } from '../mdm-resource';

/**
 * Controller: dataType
 |   POST   | /api/dataModels/${dataModelId}/dataTypes                                                                                             | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataTypes                                                                                             | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/dataTypes/${id}                                                                                       | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataTypes/${id}                                                                                       | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${id}                                                                                       | Action: show
 |   POST   | /api/dataModels/${dataModelId}/dataTypes/${otherDataModelId}/${dataTypeId}                                                           | Action: copyDataType
 */

/**
 * MDM resource for managing data types attached to data models.
 */
export class MdmDataTypeResource extends MdmResource {
  /**
   * `HTTP POST` - Creates a new data type under a chosen data model.
   *
   * @param dataModelId The unique identifier of the data model to add to.
   * @param data The payload of the request containing all the details for the data type to create.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link DataTypeDetailResponse} containing a {@link DataTypeDetail} object.
   */
  save(dataModelId: Uuid, data: DataType, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes`;
    return this.simplePost(url, data, options);
  }

  /**
   * `HTTP GET` - Request the list of data types contained within a particular data model.
   *
   * @param dataModelId The identifier of the data model to inspect.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataTypeIndexResponse} containing a list of {@link DataType} items.
   *
   * @see {@link MdmDataTypeResource.get}
   */
  list(
    dataModelId: Uuid,
    query?: FilterQueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP DELETE` - Removes an existing data type.
   *
   * @param dataModelId The unique identifier of the data model.
   * @param dataTypeId The unique indentifier of the data type to remove.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  remove(
    dataModelId: Uuid,
    dataTypeId: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}`;
    return this.simpleDelete(url, query, options);
  }

  /**
   * `HTTP PUT` - Updates an existing data type under a chosen data model.
   *
   * @param dataModelId The unique identifier of the data model the data type exists under.
   * @param dataTypeId The unique identifier of the data type to update.
   * @param data The payload of the request containing all the details for the data type to update.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link DataTypeDetailResponse} containing a {@link DataTypeDetail} object.
   */
  update(
    dataModelId: Uuid,
    dataTypeId: Uuid,
    data: DataType,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}`;
    return this.simplePut(url, data, options);
  }

  /**
   * `HTTP GET` - Request a data type from a data model.
   *
   * @param dataModelId Unique identifier of the data model the type is under.
   * @param dataTypeId Either a unique indentifier of the data type to get, or a path in the format `typePrefix:label|typePrefix:label`.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link DataTypeDetailResponse} containing a {@link DataTypeDetail} object.
   *
   * This function does allow either an ID or a path string, but should ideally be used only for IDs. For using paths,
   * see the {@link MdmCatalogueItemResource.getPath()} function instead; there are no guarantees this function will support
   * paths in the future, but will currently be supported for backwards compatibility.
   */
  get(
    dataModelId: Uuid,
    dataTypeId: Uuid,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    let url = '';
    if (this.isGuid(dataModelId)) {
      url = url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}`;
    } else {
      url = url = `${this.apiEndpoint}/dataModels/path/${dataTypeId}`;
    }
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP POST` - Copies an existing data type from one data model to another target data model.
   *
   * @param dataModelId The unique identifier of the source data model.
   * @param otherDataModelId The unique indentifier of the target data model to copy to.
   * @param dataTypeId The unique identifier of the data type to copy.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link DataTypeDetailResponse} containing the new copy of a {@link DataTypeDetail} object.
   */
  copyDataType(
    dataModelId: Uuid,
    otherDataModelId: Uuid,
    dataTypeId: Uuid,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${otherDataModelId}/${dataTypeId}`;
    return this.simplePost(url, {}, options);
  }
}
