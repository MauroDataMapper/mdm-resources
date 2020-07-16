import { MdmResource } from './mdm-resource';
/**
 * Controller: annotation
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: delete
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: show
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: delete
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: show

 */
export declare class MdmAnnotationResource extends MdmResource {
    save(catalogueItemDomainType: any, catalogueItemId: any, data: any, restHandlerOptions?: any): any;
    saveChildren(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, data: any, restHandlerOptions?: any): any;
    list(catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    listChildren(catalogueItemDomainType: any, catalogueItemId: any, annotationId?: any, queryStringParams?: any, restHandlerOptions?: any): any;
    remove(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeChild(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, childId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    get(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    getChild(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, childId: any, queryStringParams?: any, restHandlerOptions?: any): any;
}
