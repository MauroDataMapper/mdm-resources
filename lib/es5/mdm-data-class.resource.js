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
 * Controller: dataClass
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses                                                                | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses                                                                | Action: index
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/search                                                                     | Action: search
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/search                                                                     | Action: search
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/content                                                                    | Action: content
 |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${id}                                                          | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${id}                                                          | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${id}                                                          | Action: show
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${dataClassId}/dataClasses/${otherDataModelId}/${otherDataClassId}                        | Action: copyDataClass
 |   POST   | /api/dataModels/${dataModelId}/dataClasses                                                                                           | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataClasses                                                                                           | Action: index
 |   GET    | /api/dataModels/${dataModelId}/allDataClasses                                                                                        | Action: all
 |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/${id}                                                                                     | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataClasses/${id}                                                                                     | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataClasses/${id}                                                                                     | Action: show
 |   POST   | /api/dataModels/${dataModelId}/dataClasses/${otherDataModelId}/${otherDataClassId}                                                   | Action: copyDataClass

 */
var MdmDataClassResource = /** @class */ (function (_super) {
    __extends(MdmDataClassResource, _super);
    function MdmDataClassResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //   private catalogueItem: MdmCatalogueItemResource;
    //   constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler) {
    //     super(resourcesConfig, restHandler);
    //     this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
    //   }
    //   get(dataModel, parentDataClass, id, action, options) {
    //     if (!options) {
    //       options = {};
    //     }
    //     // if (
    //     //   ['metadata', 'annotations', 'classifiers', 'semanticLinks'].indexOf(action) !== -1
    //     // ) {
    //     //   return this.catalogueItem.get(id, action, options.contentType);
    //     // }
    //     switch(action) {
    //         case 'metadata': return this.catalogueItem.listMetadata('dataClasses', id, options);
    //         case 'annotations': return this.catalogueItem.listAnnotations('dataClasses', id, options);
    //         case 'classifiers': return this.catalogueItem.listClassifiers('dataClasses', id, options);
    //         case 'semanticLinks': return this.catalogueItem.listSemanticLinks('dataClasses', id, options);
    //     }
    //     if (parentDataClass) {
    //       return this.getResource(`dataModels/${dataModel}/dataClasses/${parentDataClass}/dataClasses/`, id, action, options);
    //     } else {
    //       return this.getResource(`dataModels/${dataModel}/dataClasses/`, id, action, options);
    //     }
    //   }
    //   post(dataModelId, id, action, options) {
    //     return this.postResource(`dataModels/${dataModelId}/dataClasses/`, id, action, options);
    //   }
    //   put(dataModelId, parentDataClassId, id, action, options) {
    //     if (parentDataClassId) {
    //       return this.putResource(`dataModels/${dataModelId}/dataClasses/${parentDataClassId}/dataClasses/`, id, action, options);
    //     } else {
    //       return this.putResource(`dataModels/${dataModelId}/dataClasses/`, id, action, options);
    //     }
    //   }
    //   delete(dataModelId, parentDataClassId, id) {
    //     if (parentDataClassId) {
    //       return this.deleteResource(`dataModels/${dataModelId}/dataClasses/${parentDataClassId}/dataClasses/`, id);
    //     } else {
    //       return this.deleteResource(`dataModels/${dataModelId}/dataClasses/`, id);
    //     }
    //   }
    MdmDataClassResource.prototype.addChildDataClass = function (dataModelId, dataClassId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataClasses";
        return this.simplePost(url, data);
    };
    MdmDataClassResource.prototype.listChildDataClasses = function (dataModelId, dataClassId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataClasses";
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataClassResource.prototype.search = function (dataModelId, dataClassId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/search";
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataClassResource.prototype.content = function (dataModelId, dataClassId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/content";
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataClassResource.prototype.removeChildDataClass = function (dataModelId, dataClassId, childDataClassId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataClasses/" + childDataClassId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmDataClassResource.prototype.updateChildDataClass = function (dataModelId, dataClassId, childDataClassId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataClasses/" + childDataClassId;
        return this.simplePut(url, data);
    };
    MdmDataClassResource.prototype.getChildDataClass = function (dataModelId, dataClassId, childDataClassId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataClasses/" + childDataClassId;
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataClassResource.prototype.copyChildDataClass = function (dataModelId, dataClassId, otherDataModelId, otherDataClassId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataClasses/" + otherDataModelId + "/" + otherDataClassId;
        return this.simplePost(url, data);
    };
    MdmDataClassResource.prototype.save = function (dataModelId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses";
        return this.simplePost(url, data);
    };
    MdmDataClassResource.prototype.list = function (dataModelId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses";
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataClassResource.prototype.all = function (dataModelId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/allDataClasses";
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataClassResource.prototype.remove = function (dataModelId, dataClassId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmDataClassResource.prototype.update = function (dataModelId, dataClassId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId;
        return this.simplePut(url, data);
    };
    MdmDataClassResource.prototype.get = function (dataModelId, dataClassId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + dataClassId;
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataClassResource.prototype.copyDataClass = function (dataModelId, otherDataModelId, otherDataClassId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/" + otherDataModelId + "/" + otherDataClassId;
        return this.simplePost(url, data);
    };
    return MdmDataClassResource;
}(MdmResource));
export { MdmDataClassResource };
//# sourceMappingURL=mdm-data-class.resource.js.map