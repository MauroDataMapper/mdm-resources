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
    namespaces(metadataId?: any, options?: {}): any;
    save(catalogueItemDomainType: any, catalogueItemId: any, data: any, options?: {}): any;
    list(catalogueItemDomainType: any, catalogueItemId: any, options?: {}): any;
    remove(catalogueItemDomainType: any, catalogueItemId: any, metadataId: any, options?: {}): any;
    update(catalogueItemDomainType: any, catalogueItemId: any, metadataId: any, data: any, options?: {}): any;
    get(catalogueItemDomainType: any, catalogueItemId: any, metadataId: any, options?: {}): any;
}
