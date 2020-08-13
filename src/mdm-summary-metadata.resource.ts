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
import { IMdmRestHandlerOptions, IMdmQueryStringParams } from './mdm-rest-handler';

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
    save(catalogueItemDomainType, catalogueItemId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    list(catalogueItemDomainType, catalogueItemId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    remove(catalogueItemDomainType, catalogueItemId, summaryMetadataId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    update(catalogueItemDomainType, catalogueItemId, summaryMetadataId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    get(catalogueItemDomainType, catalogueItemId, summaryMetadataId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    saveReport(catalogueItemDomainType, catalogueItemId, summaryMetadataId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    listReports(catalogueItemDomainType, catalogueItemId, summaryMetadataId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeReport(catalogueItemDomainType, catalogueItemId, summaryMetadataId, summaryMetadataReportId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports/${summaryMetadataReportId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateReport(catalogueItemDomainType, catalogueItemId, summaryMetadataId, summaryMetadataReportId, data, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports/${summaryMetadataReportId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    getReport(catalogueItemDomainType, catalogueItemId, summaryMetadataId, summaryMetadataReportId, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports/${summaryMetadataReportId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
