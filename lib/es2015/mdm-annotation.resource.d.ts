import { MdmRequestOptions, QueryParameters, ModelDomainType } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: annotation
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: delete
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: show
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: delete
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: show
 *
 */
export declare class MdmAnnotationResource extends MdmResource {
    save(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    saveChildren(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    list(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    listChildren(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId?: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    remove(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeChild(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    get(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    getChild(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
}
