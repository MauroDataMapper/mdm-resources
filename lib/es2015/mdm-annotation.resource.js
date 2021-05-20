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
export class MdmAnnotationResource extends MdmResource {
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.saveAnnotations} instead.
     */
    save(catalogueItemDomainType, catalogueItemId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.saveAnnotationChildren} instead.
     */
    saveChildren(catalogueItemDomainType, catalogueItemId, annotationId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.listAnnotations} instead.
     */
    list(catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.listAnnotationChildren} instead.
     */
    listChildren(catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.removeAnnotation} instead.
     */
    remove(catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.removeAnnotationChild} instead.
     */
    removeChild(catalogueItemDomainType, catalogueItemId, annotationId, childId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${childId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.getAnnotation} instead.
     */
    get(catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    /**
     * @deprecated Use {@link MdmCatalogueItemResource.getAnnotationChild} instead.
     */
    getChild(catalogueItemDomainType, catalogueItemId, annotationId, childId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${childId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-annotation.resource.js.map