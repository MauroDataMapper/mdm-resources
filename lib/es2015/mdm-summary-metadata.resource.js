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
export class MdmSummaryMetadataResource extends MdmResource {
    save(catalogueItemDomainType, catalogueItemId, data) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata`;
        return this.simplePost(url, data);
    }
    list(catalogueItemDomainType, catalogueItemId, queryStringParams) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata`;
        return this.simpleGet(url, queryStringParams);
    }
    remove(catalogueItemDomainType, catalogueItemId, summaryMetadataId, queryStringParams) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}`;
        return this.simpleDelete(url, queryStringParams);
    }
    update(catalogueItemDomainType, catalogueItemId, summaryMetadataId, data) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}`;
        return this.simplePut(url, data);
    }
    get(catalogueItemDomainType, catalogueItemId, summaryMetadataId, queryStringParams) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}`;
        return this.simpleGet(url, queryStringParams);
    }
    saveReport(catalogueItemDomainType, catalogueItemId, summaryMetadataId, data) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports`;
        return this.simplePost(url, data);
    }
    listReports(catalogueItemDomainType, catalogueItemId, summaryMetadataId, queryStringParams) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports`;
        return this.simpleGet(url, queryStringParams);
    }
    removeReport(catalogueItemDomainType, catalogueItemId, summaryMetadataId, summaryMetadataReportId, queryStringParams) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports/${summaryMetadataReportId}`;
        return this.simpleDelete(url, queryStringParams);
    }
    updateReport(catalogueItemDomainType, catalogueItemId, summaryMetadataId, summaryMetadataReportId, data) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports/${summaryMetadataReportId}`;
        return this.simplePut(url, data);
    }
    getReport(catalogueItemDomainType, catalogueItemId, summaryMetadataId, summaryMetadataReportId, queryStringParams) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports/${summaryMetadataReportId}`;
        return this.simpleGet(url, queryStringParams);
    }
}
//# sourceMappingURL=mdm-summary-metadata.resource.js.map