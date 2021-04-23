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
import { RequestOptions, QueryParameters, Uuid, FilterQueryParameters } from 'mdm-common.model';
import { MdmResource } from './mdm-resource';

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
  save(dataModelId: Uuid, data: any, options?: RequestOptions) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes`;
    return this.simplePost(url, data, options);
  }

  /**
   * `HTTP GET` - Request the list of data types contained within a particular data model.
   * @param dataModelId The identifier of the data model to inspect.
   * @param query Optional query string parameters to filter the returned list, if required.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `GET` request.
   * 
   * `200 OK` - will return a {@link DataTypeIndexResponse} containing a list of {@link DataType} items.
   * 
   * @see {@link MdmDataTypeResource.get}
   */
  list(dataModelId: Uuid, query?: FilterQueryParameters, options?: RequestOptions) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes`;
    return this.simpleGet(url, query, options);
  }

  remove(dataModelId: Uuid, dataTypeId: Uuid, query?: QueryParameters, options?: RequestOptions) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}`;
    return this.simpleDelete(url, query, options);
  }

  update(dataModelId: Uuid, dataTypeId: Uuid, data: any, options?: RequestOptions) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}`;
    return this.simplePut(url, data, options);
  }

  /// <summary>
  /// Get data type by Id or a path
  /// </summary>
  /// <param name="dataModelId">Date Model Id</param>
  /// <param name="dataTypeId">Date Type Id or a path in the format typePrefix:label|typePrefix:label</param>
  /// <param name="queryStringParams">Query String Params</param>
  /// <param name="restHandlerOptions">restHandler Options</param>
  get(dataModelId: Uuid, dataTypeId: Uuid, query?: QueryParameters, options?: RequestOptions) {
    let url = '';
    if (this.isGuid(dataModelId)) {
      url = url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}`;
    }
    else {
      url = url = `${this.apiEndpoint}/dataModels/path/${dataTypeId}`;
    }
    return this.simpleGet(url, query, options);
  }

  copyDataType(dataModelId: Uuid, otherDataModelId: Uuid, dataTypeId: Uuid, data: any, options?: RequestOptions) {
    const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${otherDataModelId}/${dataTypeId}`;
    return this.simplePost(url, data, options);
  }
}
