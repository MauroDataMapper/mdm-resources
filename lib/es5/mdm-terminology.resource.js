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
var MdmTerminologyResource = /** @class */ (function (_super) {
    __extends(MdmTerminologyResource, _super);
    function MdmTerminologyResource(resourcesConfig, restHandler) {
        var _this = _super.call(this, resourcesConfig, restHandler) || this;
        _this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
        return _this;
    }
    MdmTerminologyResource.prototype.get = function (id, action, options) {
        if (options === void 0) { options = {}; }
        if (!options) {
            options = {};
        }
        // if (['metadata', 'annotations', 'classifiers', 'semanticLinks'].indexOf(action) !== -1) {
        //   return this.catalogueItem.get(id, action, options.contentType);
        // }
        switch (action) {
            case 'metadata': return this.catalogueItem.listMetadata('terminologies', id, options);
            case 'annotations': return this.catalogueItem.listAnnotations('terminologies', id, options);
            case 'classifiers': return this.catalogueItem.listClassifiers('terminologies', id, options);
            case 'semanticLinks': return this.catalogueItem.listSemanticLinks('terminologies', id, options);
        }
        return this.getResource('terminologies', id, action, options);
    };
    MdmTerminologyResource.prototype.post = function (id, action, options) {
        return this.postResource('terminologies', id, action, options);
    };
    MdmTerminologyResource.prototype.put = function (id, action, options) {
        return this.putResource('terminologies', id, action, options);
    };
    MdmTerminologyResource.prototype.delete = function (id, action, queryString) {
        return this.deleteResource('terminologies', id, action, queryString);
    };
    MdmTerminologyResource.prototype.folder = function (id, options) {
        if (options === void 0) { options = {}; }
        return this.simpleGet(this.apiEndpoint + "/terminologies/" + id + "/terms", options);
    };
    return MdmTerminologyResource;
}(MdmResource));
export { MdmTerminologyResource };
//# sourceMappingURL=mdm-terminology.resource.js.map