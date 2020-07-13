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
import { MdmCatalogueItemResource } from './mdm-catalogue-item.resource';
var MdmDataElementResource = /** @class */ (function (_super) {
    __extends(MdmDataElementResource, _super);
    function MdmDataElementResource(resourcesConfig, restHandler) {
        var _this = _super.call(this, resourcesConfig, restHandler) || this;
        _this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
        return _this;
    }
    MdmDataElementResource.prototype.get = function (dataModelId, dataClassId, id, action, options) {
        if (!options) {
            options = {};
        }
        // if (['metadata', 'annotations', 'classifiers', 'semanticLinks'].indexOf(action) !== -1) {
        //   return this.catalogueItem.get(id, action, options.contentType);
        // }
        switch (action) {
            case 'metadata': return this.catalogueItem.listMetadata('dataElements', id, options);
            case 'annotations': return this.catalogueItem.listAnnotations('dataElements', id, options);
            case 'classifiers': return this.catalogueItem.listClassifiers('dataElements', id, options);
            case 'semanticLinks': return this.catalogueItem.listSemanticLinks('dataElements', id, options);
        }
        return this.getResource("dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements/", id, action, options);
    };
    MdmDataElementResource.prototype.put = function (dataModelId, dataClassId, id, action, options) {
        return this.putResource("dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements/", id, action, options);
    };
    MdmDataElementResource.prototype.delete = function (dataModelId, dataClassId, id) {
        return this.deleteResource("dataModels/" + dataModelId + "/dataClasses/" + dataClassId + "/dataElements/", id);
    };
    return MdmDataElementResource;
}(MdmResource));
export { MdmDataElementResource };
//# sourceMappingURL=mdm-data-element.resource.js.map