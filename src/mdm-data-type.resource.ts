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
import { IMdmRestHandlerOptions, IMdmQueryStringParams } from './mdm-rest-handler';

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
    save(dataModelId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    list(dataModelId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    remove(dataModelId, dataTypeId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    update(dataModelId, dataTypeId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    get(dataModelId, dataTypeId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    copyDataType(dataModelId, otherDataModelId, dataTypeId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${otherDataModelId}/${dataTypeId}`;
        return this.simplePost(url, data, restHandlerOptions);
    }
}
