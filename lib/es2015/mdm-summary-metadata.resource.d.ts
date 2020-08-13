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
export declare class MdmSummaryMetadataResource extends MdmResource {
    save(catalogueItemDomainType: any, catalogueItemId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    list(catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    remove(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    update(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    get(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    saveReport(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    listReports(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeReport(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, summaryMetadataReportId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateReport(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, summaryMetadataReportId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    getReport(catalogueItemDomainType: any, catalogueItemId: any, summaryMetadataId: any, summaryMetadataReportId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
