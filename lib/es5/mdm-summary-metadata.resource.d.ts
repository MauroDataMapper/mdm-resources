import { MdmRequestOptions, QueryParameters, ModelDomainType } from './mdm-common.model';
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
    save(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    list(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    remove(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    update(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    get(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    saveReport(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    listReports(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeReport(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, summaryMetadataReportId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateReport(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, summaryMetadataReportId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    getReport(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, summaryMetadataReportId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
}
