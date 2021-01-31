var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * Controller: dataType
 |   POST   | /api/dataModels/${dataModelId}/dataTypes                                                                                             | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataTypes                                                                                             | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/dataTypes/${id}                                                                                       | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataTypes/${id}                                                                                       | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${id}                                                                                       | Action: show
 |   POST   | /api/dataModels/${dataModelId}/dataTypes/${otherDataModelId}/${dataTypeId}                                                           | Action: copyDataType
 */
var MdmDataTypeResource = /** @class */ (function (_super) {
    __extends(MdmDataTypeResource, _super);
    function MdmDataTypeResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmDataTypeResource.prototype.save = function (dataModelId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmDataTypeResource.prototype.list = function (dataModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataTypeResource.prototype.remove = function (dataModelId, dataTypeId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/" + dataTypeId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmDataTypeResource.prototype.update = function (dataModelId, dataTypeId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/" + dataTypeId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    /// <summary>
    /// Get data type by Id or a path
    /// </summary>
    /// <param name="dataModelId">Date Model Id</param>
    /// <param name="dataTypeId">Date Type Id or a path in the format typePrefix:label|typePrefix:label</param>
    /// <param name="queryStringParams">Query String Params</param>
    /// <param name="restHandlerOptions">restHandler Options</param>
    MdmDataTypeResource.prototype.get = function (dataModelId, dataTypeId, queryStringParams, restHandlerOptions) {
        var url = '';
        if (this.isGuid(dataModelId)) {
            url = url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/" + dataTypeId;
        }
        else {
            url = url = this.apiEndpoint + "/dataModels/path/" + dataTypeId;
        }
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmDataTypeResource.prototype.copyDataType = function (dataModelId, otherDataModelId, dataTypeId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/" + otherDataModelId + "/" + dataTypeId;
        return this.simplePost(url, data, restHandlerOptions);
    };
    return MdmDataTypeResource;
}(MdmResource));
export { MdmDataTypeResource };
//# sourceMappingURL=mdm-data-type.resource.js.map