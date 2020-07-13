import { MdmResource } from './mdm-resource';
/**
 * Controller: annotation
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: remove
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: show
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: remove
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: show
 *
 * Controller: classifier
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers                                        | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers                                        | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${id}                                  | Action: remove
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${id}                                  | Action: show
 *
 * Controller: metadata
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: remove
 |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: update
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: show
 *
 * Controller: referenceFiles
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles                                     | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles                                     | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${id}                               | Action: delete
 |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${id}                               | Action: update
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${id}                               | Action: show
 *
 * Controller: semanticLink
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks                                      | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks                                      | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${id}                                | Action: delete
 |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${id}                                | Action: update
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${id}                                | Action: show
 */
export declare class MdmCatalogueItemResource extends MdmResource {
    saveAnnotations(catalogueItemDomainType: any, catalogueItemId: any, data: any, options?: any): any;
    saveAnnotationChildren(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, data: any, options?: any): any;
    listAnnotations(catalogueItemDomainType: any, catalogueItemId: any, options?: {}): any;
    listAnnotationChildren(catalogueItemDomainType: any, catalogueItemId: any, annotationId?: any, options?: {}): any;
    removeAnnotation(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, options?: {}): any;
    removeAnnotationChild(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, childId: any, options?: {}): any;
    getAnnotation(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, options?: {}): any;
    getAnnotationChild(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, childId: any, options?: {}): any;
    saveClassifiers(catalogueItemDomainType: any, catalogueItemId: any, data: any, options?: {}): any;
    listClassifiers(catalogueItemDomainType: any, catalogueItemId: any, options?: {}): any;
    removeClassifier(catalogueItemDomainType: any, catalogueItemId: any, classifierId: any, options?: {}): any;
    getClassifier(catalogueItemDomainType: any, catalogueItemId: any, classifierId: any, options?: {}): any;
    saveMetadata(catalogueItemDomainType: any, catalogueItemId: any, data: any, options?: {}): any;
    listMetadata(catalogueItemDomainType: any, catalogueItemId: any, options?: {}): any;
    removeMetadata(catalogueItemDomainType: any, catalogueItemId: any, metadataId: any, options?: {}): any;
    updateMetadata(catalogueItemDomainType: any, catalogueItemId: any, metadataId: any, data: any, options?: {}): any;
    getMetadata(catalogueItemDomainType: any, catalogueItemId: any, metadataId: any, options?: {}): any;
    saveReferenceFiles(catalogueItemDomainType: any, catalogueItemId: any, data: any, options?: {}): any;
    listReferenceFiles(catalogueItemDomainType: any, catalogueItemId: any, options?: {}): any;
    removeReferenceFile(catalogueItemDomainType: any, catalogueItemId: any, referenceFileId: any, options?: {}): any;
    updateReferenceFile(catalogueItemDomainType: any, catalogueItemId: any, referenceFileId: any, data: any, options?: {}): any;
    getReferenceFile(catalogueItemDomainType: any, catalogueItemId: any, referenceFileId: any, options?: {}): any;
    saveSemanticLinks(catalogueItemDomainType: any, catalogueItemId: any, data: any, options?: {}): any;
    listSemanticLinks(catalogueItemDomainType: any, catalogueItemId: any, options?: {}): any;
    removeSemanticLink(catalogueItemDomainType: any, catalogueItemId: any, semanticLinkId: any, options?: {}): any;
    updateSemanticLink(catalogueItemDomainType: any, catalogueItemId: any, semanticLinkId: any, data: any, options?: {}): any;
    getSemanticLink(catalogueItemDomainType: any, catalogueItemId: any, semanticLinkId: any, options?: {}): any;
}
