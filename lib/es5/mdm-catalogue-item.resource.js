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
var MdmCatalogueItemResource = /** @class */ (function (_super) {
    __extends(MdmCatalogueItemResource, _super);
    function MdmCatalogueItemResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmCatalogueItemResource.prototype.tree = function (id, includeSupersededModels) {
        id = id ? '?id=' + id : '';
        includeSupersededModels = includeSupersededModels ? '?includeSupersededModels=true' : '';
    };
    MdmCatalogueItemResource.prototype.get = function (id, action, options) {
        return this.getResource('catalogueItems', id, action, options);
    };
    MdmCatalogueItemResource.prototype.post = function (id, action, options) {
        return this.postResource('catalogueItems', id, action, options);
    };
    MdmCatalogueItemResource.prototype.put = function (id, action, childId, options) {
        if (!options) {
            options = {};
        }
        id = !id ? '' : id;
        action = !action ? '' : action + '/';
        childId = !childId ? '' : childId;
        return this.putResource('catalogueItems', id, action + childId, options);
    };
    MdmCatalogueItemResource.prototype.delete = function (id, action, childId) {
        id = !id ? '' : id;
        action = !action ? '' : action + '/';
        childId = !childId ? '' : childId;
        return this.deleteResource('catalogueItems', id, action + childId, null, null);
    };
    return MdmCatalogueItemResource;
}(MdmResource));
export { MdmCatalogueItemResource };
//# sourceMappingURL=mdm-catalogue-item.resource.js.map