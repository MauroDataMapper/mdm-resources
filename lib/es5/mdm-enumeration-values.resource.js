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
 * Controller: enumerationValue
 |   POST   | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues                                               | Action: save
 |   GET    | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues                                               | Action: index
 |   POST   | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues                                                             | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues                                                             | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${id}                                         | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${id}                                         | Action: update
 |   GET    | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${id}                                         | Action: show
 |  DELETE  | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${id}                                                       | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${id}                                                       | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${id}                                                       | Action: show
 */
var MdmEnumerationValuesResource = /** @class */ (function (_super) {
    __extends(MdmEnumerationValuesResource, _super);
    function MdmEnumerationValuesResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //   delete(dataModelId, dataTypeId, id) {
    //     return this.deleteResource(this.makeUrl(dataModelId, dataTypeId), id);
    //   }
    //   put(dataModelId, dataTypeId, id, action, options) {
    //     return this.putResource(this.makeUrl(dataModelId, dataTypeId), id, action, options);
    //   }
    //   post(dataModelId, dataTypeId, options) {
    //     return this.postResource(this.makeUrl(dataModelId, dataTypeId), null, null, options);
    //   }
    //   makeUrl(dataModelId, dataTypeId) {
    //     return `dataModels/${dataModelId}/enumerationTypes/${dataTypeId}/enumerationValues/`;
    //   }
    MdmEnumerationValuesResource.prototype.saveToEnumeratedType = function (dataModelId, enumerationTypeId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/enumerationTypes/" + enumerationTypeId + "/enumerationValues";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmEnumerationValuesResource.prototype.listForEnumeratedType = function (dataModelId, enumerationTypeId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/enumerationTypes/" + enumerationTypeId + "/enumerationValues";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmEnumerationValuesResource.prototype.saveToDataType = function (dataModelId, dataTypeId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/" + dataTypeId + "/enumerationValues";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmEnumerationValuesResource.prototype.listForDataType = function (dataModelId, dataTypeId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/" + dataTypeId + "/enumerationValues";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmEnumerationValuesResource.prototype.removeFromEnumeratedType = function (dataModelId, enumerationTypeId, enumerationValueId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/enumerationTypes/" + enumerationTypeId + "/enumerationValues/" + enumerationValueId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmEnumerationValuesResource.prototype.updateInEnumeratedType = function (dataModelId, enumerationTypeId, enumerationValueId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/enumerationTypes/" + enumerationTypeId + "/enumerationValues/" + enumerationValueId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmEnumerationValuesResource.prototype.getFromEnumeratedType = function (dataModelId, enumerationTypeId, enumerationValueId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/enumerationTypes/" + enumerationTypeId + "/enumerationValues/" + enumerationValueId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmEnumerationValuesResource.prototype.removeFromDataType = function (dataModelId, dataTypeId, enumerationValueId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/" + dataTypeId + "/enumerationValues/" + enumerationValueId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmEnumerationValuesResource.prototype.updateInDataType = function (dataModelId, dataTypeId, enumerationValueId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/" + dataTypeId + "/enumerationValues/" + enumerationValueId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmEnumerationValuesResource.prototype.getFromDataType = function (dataModelId, dataTypeId, enumerationValueId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/" + dataTypeId + "/enumerationValues/" + enumerationValueId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmEnumerationValuesResource;
}(MdmResource));
export { MdmEnumerationValuesResource };
//# sourceMappingURL=mdm-enumeration-values.resource.js.map