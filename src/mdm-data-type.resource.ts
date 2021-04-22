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
import { QueryParameters } from 'mdm-common.model';
import { MdmResource } from './mdm-resource';
import { IMdmRestHandlerOptions } from './mdm-rest-handler';

/**
 * Controller: dataType
 |   POST   | /api/dataModels/${dataModelId}/dataTypes                                                                                             | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataTypes                                                                                             | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/dataTypes/${id}                                                                                       | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataTypes/${id}                                                                                       | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${id}                                                                                       | Action: show
 |   POST   | /api/dataModels/${dataModelId}/dataTypes/${otherDataModelId}/${dataTypeId}                                                           | Action: copyDataType
 */
export class MdmDataTypeResource extends MdmResource {
    save(dataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    list(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    remove(dataModelId: string, dataTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    update(dataModelId: string, dataTypeId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    /// <summary>
    /// Get data type by Id or a path
    /// </summary>
    /// <param name="dataModelId">Date Model Id</param>
    /// <param name="dataTypeId">Date Type Id or a path in the format typePrefix:label|typePrefix:label</param>
    /// <param name="queryStringParams">Query String Params</param>
    /// <param name="restHandlerOptions">restHandler Options</param>
    get(dataModelId: string, dataTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        let url = '';
        if (this.isGuid(dataModelId)) {
            url = url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}`;
        }
        else {
            url = url = `${this.apiEndpoint}/dataModels/path/${dataTypeId}`;
        }
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    copyDataType(dataModelId: string, otherDataModelId: string, dataTypeId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${otherDataModelId}/${dataTypeId}`;
        return this.simplePost(url, data, restHandlerOptions);
    }
}
