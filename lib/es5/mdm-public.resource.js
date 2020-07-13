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
var MdmPublicResource = /** @class */ (function (_super) {
    __extends(MdmPublicResource, _super);
    function MdmPublicResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmPublicResource.prototype.get = function (name) {
        return this.getResource('public', name, null);
    };
    MdmPublicResource.prototype.dataFlowExporterPlugins = function () {
        return this.getResource('public', null, 'plugins/dataFlowExporters');
    };
    MdmPublicResource.prototype.dataFlowImportPlugins = function () {
        return this.getResource('public', null, 'plugins/dataFlowImporters');
    };
    MdmPublicResource.prototype.dataModelExporterPlugins = function (multiple) {
        if (multiple === void 0) { multiple = false; }
        var options = {};
        if (multiple === true) {
            options.filters = 'multipleDataModels=true';
        }
        // return this.getResource('public', null, 'plugins/dataModelExporters', options);
        return this.getResource('dataModels', null, 'providers/exporters', options);
    };
    MdmPublicResource.prototype.dataModelImporterPlugins = function (multiple) {
        var options = {};
        if (multiple === true) {
            options.filters = 'multipleDataModels=true';
        }
        // return this.getResource('public', null, 'plugins/dataModelImporters', options);
        return this.getResource('dataModels', null, 'providers/importers', options);
    };
    return MdmPublicResource;
}(MdmResource));
export { MdmPublicResource };
//# sourceMappingURL=mdm-public.resource.js.map