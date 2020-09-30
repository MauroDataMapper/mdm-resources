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
export class MdmDataElementResource extends MdmResource {
    suggestLinks(dataModelId, dataClassId, dataElementId, otherDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}/suggestLinks/${otherDataModelId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    save(dataModelId, dataClassId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    list(dataModelId, dataClassId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    listWithDataType(dataModelId, dataTypeId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/dataElements`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    remove(dataModelId, dataClassId, dataElementId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(dataModelId, dataClassId, dataElementId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    /// <summary>
    /// Get Data Element by Data Model Id, Data Class Id and Data Element Id or a path
    /// </summary>
    /// <param name="dataModelId">Data Model Id</param>
    /// <param name="dataClassId">Data Class Id</param>
    /// <param name="dataElementId">Data Element Id or a path in the format typePrefix:label|typePrefix:label</param>
    /// <param name="queryStringParams">Query String Params</param>
    /// <param name="restHandlerOptions">restHandler Options</param>
    get(dataModelId, dataClassId, dataElementId, queryStringParams, restHandlerOptions) {
        let url = '';
        if (this.isGuid(dataElementId)) {
            url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${dataElementId}`;
        }
        else {
            url = `${this.apiEndpoint}/dataClasses/path/${dataElementId}`;
        }
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    copyDataElement(dataModelId, dataClassId, otherDataModelId, otherDataClassId, dataElementId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/${otherDataModelId}/${otherDataClassId}/${dataElementId}`;
        return this.simplePost(url, data, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-data-element.resource.js.map