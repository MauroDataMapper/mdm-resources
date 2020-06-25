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
var MdmFolderResource = /** @class */ (function (_super) {
    __extends(MdmFolderResource, _super);
    function MdmFolderResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmFolderResource.prototype.get = function (id, action, options) {
        if (!options) {
            options = {};
        }
        return this.getResource('folders', id, action, options);
    };
    MdmFolderResource.prototype.post = function (id, action, options) {
        return this.postResource('folders', id, action, options);
    };
    MdmFolderResource.prototype.put = function (id, action, options) {
        return this.putResource('folders', id, action, options);
    };
    MdmFolderResource.prototype.delete = function (id, action, queryString) {
        return this.deleteResource('folders', id, action, queryString, null);
    };
    return MdmFolderResource;
}(MdmResource));
export { MdmFolderResource };
//# sourceMappingURL=mdm-folder.resource.js.map