import { RequestSettings, QueryParameters, ModelDomainType } from './mdm-common.model';
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
    save(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings): any;
    list(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    remove(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    update(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, data: any, restHandlerOptions?: RequestSettings): any;
    get(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    saveReport(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, data: any, restHandlerOptions?: RequestSettings): any;
    listReports(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeReport(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, summaryMetadataReportId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateReport(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, summaryMetadataReportId: string, data: any, restHandlerOptions?: RequestSettings): any;
    getReport(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, summaryMetadataId: string, summaryMetadataReportId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
}
