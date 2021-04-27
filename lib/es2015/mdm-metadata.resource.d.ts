import { MdmRequestOptions, QueryParameters, ModelDomainType } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: metadata
 |   GET    | /api/metadata/namespaces/${id}?                                                                       | Action: namespaces
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: delete
 |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: update
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: show
 */
export declare class MdmMetadataResource extends MdmResource {
    namespaces(metadataId?: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    save(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    list(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    remove(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    update(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    get(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
}
