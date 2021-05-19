import { RequestSettings, QueryParameters, ModelDomainType } from './mdm-common.model';
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
/**
 * @deprecated Use {@link MdmCatalogueItemResource} and the annotation endpoints there instead.
 */
export declare class MdmAnnotationResource extends MdmResource {
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.saveAnnotations} instead.
     */
    save(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings): any;
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.saveAnnotationChildren} instead.
     */
    saveChildren(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, data: any, restHandlerOptions?: RequestSettings): any;
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.listAnnotations} instead.
     */
    list(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.listAnnotationChildren} instead.
     */
    listChildren(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId?: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.removeAnnotation} instead.
     */
    remove(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.removeAnnotationChild} instead.
     */
    removeChild(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.getAnnotation} instead.
     */
    get(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.getAnnotationChild} instead.
     */
    getChild(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
}
