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
    namespaces(metadataId?: any, queryStringParams?: any): any;
    save(catalogueItemDomainType: any, catalogueItemId: any, data: any): any;
    list(catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: any): any;
    remove(catalogueItemDomainType: any, catalogueItemId: any, metadataId: any, queryStringParams?: any): any;
    update(catalogueItemDomainType: any, catalogueItemId: any, metadataId: any, data: any): any;
    get(catalogueItemDomainType: any, catalogueItemId: any, metadataId: any, queryStringParams?: any): any;
}
