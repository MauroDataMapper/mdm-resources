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
var MdmDataElementResource = /** @class */ (function (_super) {
    __extends(MdmDataElementResource, _super);
    function MdmDataElementResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //   private catalogueItem: MdmCatalogueItemResource;
    //   constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler) {
    //     super(resourcesConfig, restHandler);
    //     this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
    //   }
    //   get(dataModelId, dataClassId, id, action, options) {
    //     if (!options) {
    //       options = {};
    //     }
    //     // if (['metadata', 'annotations', 'classifiers', 'semanticLinks'].indexOf(action) !== -1) {
    //     //   return this.catalogueItem.get(id, action, options.contentType);
    //     // }
    //     switch(action) {
    //         case 'metadata': return this.catalogueItem.listMetadata('dataElements', id, options);
    //         case 'annotations': return this.catalogueItem.listAnnotations('dataElements', id, options);
    //         case 'classifiers': return this.catalogueItem.listClassifiers('dataElements', id, options);
    //         case 'semanticLinks': return this.catalogueItem.listSemanticLinks('dataElements', id, options);
    //     }
    //     return this.getResource(`dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/`, id, action, options);
    //   }
    //   put(dataModelId, dataClassId, id, action, options) {
    //     return this.putResource(`dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/`, id, action, options);
    //   }
    //   delete(dataModelId, dataClassId, id) {
    //     return this.deleteResource(`dataModels/${dataModelId}/dataClasses/${dataClassId}/dataElements/`, id);
    //   }
    MdmDataElementResource.prototype.suggestLinks = function (dataModelId, dataClassId, dataElementId, otherDataModelId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements/" + dataElementId + "/suggestLinks/" + otherDataModelId;
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataElementResource.prototype.save = function (dataModelId, dataClassId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements";
        return this.simplePost(url, data);
    };
    MdmDataElementResource.prototype.list = function (dataModelId, dataClassId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements";
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataElementResource.prototype.listWithDataType = function (dataModelId, dataTypeId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/" + dataTypeId + "/dataElements";
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataElementResource.prototype.remove = function (dataModelId, dataClassId, dataElementId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements/" + dataElementId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmDataElementResource.prototype.update = function (dataModelId, dataClassId, dataElementId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements/" + dataElementId;
        return this.simplePut(url, data);
    };
    MdmDataElementResource.prototype.get = function (dataModelId, dataClassId, dataElementId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements/" + dataElementId;
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataElementResource.prototype.copyDataElement = function (dataModelId, dataClassId, otherDataModelId, otherDataClassId, dataElementId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements/" + otherDataModelId + "/" + otherDataClassId + "/" + dataElementId;
        return this.simplePost(url, data);
    };
    return MdmDataElementResource;
}(MdmResource));
export { MdmDataElementResource };
//# sourceMappingURL=mdm-data-element.resource.js.map