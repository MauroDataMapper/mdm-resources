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
import { ReferenceDataValue, ReferenceDataValueFilterQueryParameters, ReferenceDataValueSearchQueryParameters } from './mdm-reference-data-value.model';
import { RequestSettings, QueryParameters, Uuid } from './mdm-common.model';
import { MdmResource } from './mdm-resource';

/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues                                                                        | Action: index
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: get
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues                                                                        | Action: save
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: update
 |   DELETE | /api/referenceDataModels/${referenceDataModelId}/referenceDataValues/${referenceDataValueId}                                                | Action: delete
 */

/**
 * MDM resource for the management of Reference Data Values.
 */
export class MdmReferenceDataValueResource extends MdmResource {

  /**
   * `HTTP GET` - Request the list of reference data values for a reference data model.
   *
   * @param modelId The ID of the reference data model containing the data types.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   * 
   * `200 OK` - will return one of two values depending on if `query.asRows` is provided:
   * 
   * 1. `query.asRows = true` - will return a {@link ReferenceDataValueTableResponse} containing a {@link ReferenceDataValueTable}.
   * 2. `query.asRows = false` - will return a {@link ReferenceDataValueIndexResponse} containing a list of {@link ReferenceDataValue} items.
   */
  list(modelId: Uuid, query?: ReferenceDataValueFilterQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataValues`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Request a reference data value from a reference data model.
   *
   * @param modelId Unique identifier of the reference data model the value is under.
   * @param valueId Unique indentifier of the data value to get.
   * @param query Optional query parameters, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ReferenceDataValueDetailResponse} containing a {@link ReferenceDataValue} object.
   */
  get(modelId: Uuid, valueId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataValues/${valueId}`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP POST` - Creates a new reference data value under a chosen reference data model.
   *
   * @param modelId The unique identifier of the reference data model to add to.
   * @param data The payload of the request containing all the details for the reference data value to create.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link ReferenceDataValueDetailResponse} containing a {@link ReferenceDataValue} object.
   */
  save(modelId: Uuid, data: ReferenceDataValue, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataValues`;
    return this.simplePost(url, data, options);
  }

  /**
   * `HTTP PUT` - Updates an existing reference data value under a chosen reference data model.
   *
   * @param modelId The unique identifier of the reference data model the data value exists under.
   * @param valueId The unique identifier of the reference data value to update.
   * @param data The payload of the request containing all the details for the data value to update.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `PUT` request.
   *
   * `200 OK` - will return a {@link ReferenceDataValueDetailResponse} containing a {@link ReferenceDataValue} object.
   */
  update(modelId: Uuid, valueId: string, data: ReferenceDataValue, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataValues/${valueId}`;
    return this.simplePut(url, data, options);
  }

  /**
   * `HTTP DELETE` - Removes an existing reference data value from a reference data model.
   *
   * @param modelId The unique identifier of the reference data model.
   * @param valueId The unique indentifier of the reference data value to remove.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  remove(modelId: Uuid, valueId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataValues/${valueId}`;
    return this.simpleDelete(url, query, options);
  }

  /**
   * `HTTP POST` - Searches a reference data model for a data value.
   *
   * @param modelId The unique identifier of the source data model.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return one of two values depending on if `query.asRows` is provided:
   * 
   * 1. `query.asRows = true` - will return a {@link ReferenceDataValueTableResponse} containing a {@link ReferenceDataValueTable}.
   * 2. `query.asRows = false` - will return a {@link ReferenceDataValueIndexResponse} containing a list of {@link ReferenceDataValue} items.
   */
  search(modelId: Uuid, query?: ReferenceDataValueSearchQueryParameters, options?: RequestSettings) {
    const queryString = this.generateQueryString(query);
    const url = `${this.apiEndpoint}/referenceDataModels/${modelId}/referenceDataValues/search${queryString}`;
    return this.simplePost(url, { }, options);
  }
}
