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
 * Controller: summaryMetadata
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata                                                                   | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata                                                                   | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${id}                                                             | Action: delete
 |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${id}                                                             | Action: update
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${id}                                                             | Action: show
 *
 * Controller: summaryMetadataReport
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports                       | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports                       | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports/${id}                 | Action: delete
 |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports/${id}                 | Action: update
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports/${id}                 | Action: show
 */
var MdmSummaryMetadataResource = /** @class */ (function (_super) {
    __extends(MdmSummaryMetadataResource, _super);
    function MdmSummaryMetadataResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmSummaryMetadataResource.prototype.save = function (catalogueItemDomainType, catalogueItemId, data) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/summaryMetadata";
        return this.simplePost(url, data);
    };
    MdmSummaryMetadataResource.prototype.list = function (catalogueItemDomainType, catalogueItemId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/summaryMetadata";
        return this.simpleGet(url, queryStringParams);
    };
    MdmSummaryMetadataResource.prototype.remove = function (catalogueItemDomainType, catalogueItemId, summaryMetadataId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/summaryMetadata/" + summaryMetadataId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmSummaryMetadataResource.prototype.update = function (catalogueItemDomainType, catalogueItemId, summaryMetadataId, data) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/summaryMetadata/" + summaryMetadataId;
        return this.simplePut(url, data);
    };
    MdmSummaryMetadataResource.prototype.get = function (catalogueItemDomainType, catalogueItemId, summaryMetadataId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/summaryMetadata/" + summaryMetadataId;
        return this.simpleGet(url, queryStringParams);
    };
    MdmSummaryMetadataResource.prototype.saveReport = function (catalogueItemDomainType, catalogueItemId, summaryMetadataId, data) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/summaryMetadata/" + summaryMetadataId + "/summaryMetadataReports";
        return this.simplePost(url, data);
    };
    MdmSummaryMetadataResource.prototype.listReports = function (catalogueItemDomainType, catalogueItemId, summaryMetadataId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/summaryMetadata/" + summaryMetadataId + "/summaryMetadataReports";
        return this.simpleGet(url, queryStringParams);
    };
    MdmSummaryMetadataResource.prototype.removeReport = function (catalogueItemDomainType, catalogueItemId, summaryMetadataId, summaryMetadataReportId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/summaryMetadata/" + summaryMetadataId + "/summaryMetadataReports/" + summaryMetadataReportId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmSummaryMetadataResource.prototype.updateReport = function (catalogueItemDomainType, catalogueItemId, summaryMetadataId, summaryMetadataReportId, data) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/summaryMetadata/" + summaryMetadataId + "/summaryMetadataReports/" + summaryMetadataReportId;
        return this.simplePut(url, data);
    };
    MdmSummaryMetadataResource.prototype.getReport = function (catalogueItemDomainType, catalogueItemId, summaryMetadataId, summaryMetadataReportId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/summaryMetadata/" + summaryMetadataId + "/summaryMetadataReports/" + summaryMetadataReportId;
        return this.simpleGet(url, queryStringParams);
    };
    return MdmSummaryMetadataResource;
}(MdmResource));
export { MdmSummaryMetadataResource };
//# sourceMappingURL=mdm-summary-metadata.resource.js.map