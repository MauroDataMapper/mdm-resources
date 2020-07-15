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
export declare class MdmSummaryMetadataResource extends MdmResource {
    save(catalogueItemDomainType: any, catalogueItemId: any, data: any): any;
    list(catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: any): any;
    remove(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, queryStringParams?: any): any;
    update(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, data: any): any;
    get(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, queryStringParams?: any): any;
    saveReport(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, data: any): any;
    listReports(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, queryStringParams?: any): any;
    removeReport(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, summaryMetadataReportId: any, queryStringParams?: any): any;
    updateReport(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, summaryMetadataReportId: any, data: any): any;
    getReport(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, summaryMetadataReportId: any, queryStringParams?: any): any;
}
