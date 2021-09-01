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
import { ReferenceDataType } from './mdm-reference-data-type.model';
import { RequestSettings, QueryParameters, Uuid, FilterQueryParameters } from './mdm-common.model';
import { MdmResource } from './mdm-resource';

/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes                                                                        | Action: index
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}                                                 | Action: get
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes                                                                        | Action: save
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}                                                 | Action: update
 |   DELETE | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}                                                 | Action: delete
 */

/**
 * MDM resource for the management of Reference Data Types.
 */
export class MdmReferenceDataTypeResource extends MdmResource {

  /**
   * `HTTP GET` - Request the list of reference data types for a reference data model.
   *
   * @param modelId The ID of the reference data model containing the data types.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ReferenceDataTypeIndexResponse} containing a list of {@link ReferenceDataType} items.
   *
   * @see {@link MdmReferenceDataTypeResource.get}
   */
  list(modelId: Uuid, query?: FilterQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataTypes`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request a reference data type from a reference data model.
   *
   * @param modelId Unique identifier of the reference data model the type is under.
   * @param dataTypeId Unique indentifier of the data type to get.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ReferenceDataTypeDetailResponse} containing a {@link ReferenceDataTypeDetail} object.
   */
  get(modelId: Uuid, dataTypeId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataTypes/${dataTypeId}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP POST` - Creates a new reference data type under a chosen reference data model.
   *
   * @param modelId The unique identifier of the reference data model to add to.
   * @param data The payload of the request containing all the details for the reference data type to create.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link ReferenceDataTypeDetailResponse} containing a {@link ReferenceDataTypeDetail} object.
   */
  save(modelId: Uuid, data: ReferenceDataType, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataTypes`;
    return this.simplePost(url, data, options);
  }

  /**
   * `HTTP PUT` - Updates an existing reference data type under a chosen reference data model.
   *
   * @param modelId The unique identifier of the reference data model the data type exists under.
   * @param dataTypeId The unique identifier of the reference data type to update.
   * @param data The payload of the request containing all the details for the data type to update.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link ReferenceDataTypeDetailResponse} containing a {@link ReferenceDataTypeDetail} object.
   */
  update(modelId: Uuid, dataTypeId: Uuid, data: ReferenceDataType, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataTypes/${dataTypeId}`;
    return this.simplePut(url, data, options);
  }

  /**
   * `HTTP DELETE` - Removes an existing reference data type from a reference data model.
   *
   * @param modelId The unique identifier of the reference data model.
   * @param typeId The unique indentifier of the reference data type to remove.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  remove(modelId: Uuid, dataTypeId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataTypes/${dataTypeId}`;
    return this.simpleDelete(url, query, options);
  }

  /**
   * `HTTP POST` - Copies an existing reference data type from one reference data model to another target reference data model.
   *
   * @param modelId The unique identifier of the source data model.
   * @param otherModelId The unique indentifier of the target data model to copy to.
   * @param dataTypeId The unique identifier of the data type to copy.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link ReferenceDataTypeDetailResponse} containing the new copy of a {@link ReferenceDataTypeDetail} object.
   */
   copyDataType(modelId: Uuid, otherModelId: Uuid, dataTypeId: Uuid, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataTypes/${otherModelId}/${dataTypeId}`;
    return this.simplePost(url, { }, options);
  }
}
