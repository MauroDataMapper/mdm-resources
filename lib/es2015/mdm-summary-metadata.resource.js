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
    save(catalogueItemDomainType, catalogueItemId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    list(catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    remove(catalogueItemDomainType, catalogueItemId, summaryMetadataId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(catalogueItemDomainType, catalogueItemId, summaryMetadataId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    get(catalogueItemDomainType, catalogueItemId, summaryMetadataId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    saveReport(catalogueItemDomainType, catalogueItemId, summaryMetadataId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    listReports(catalogueItemDomainType, catalogueItemId, summaryMetadataId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeReport(catalogueItemDomainType, catalogueItemId, summaryMetadataId, summaryMetadataReportId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports/${summaryMetadataReportId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReport(catalogueItemDomainType, catalogueItemId, summaryMetadataId, summaryMetadataReportId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports/${summaryMetadataReportId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    getReport(catalogueItemDomainType, catalogueItemId, summaryMetadataId, summaryMetadataReportId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata/${summaryMetadataId}/summaryMetadataReports/${summaryMetadataReportId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-summary-metadata.resource.js.map