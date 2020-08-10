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
 * Controller: search
 |   GET    | /api/catalogueItems/search                                                                            | Action: search
 |   POST   | /api/catalogueItems/search                                                                            | Action: search
 *
 * Controller: semanticLink
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks                                      | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks                                      | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${id}                                | Action: delete
 |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${id}                                | Action: update
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${id}                                | Action: show

 */
export declare class MdmCatalogueItemResource extends MdmResource {
    search(data: any, restHandlerOptions?: any): any;
    searchByGet(queryStringParams?: any, restHandlerOptions?: any): any;
    saveAnnotations(catalogueItemDomainType: any, catalogueItemId: any, data: any, restHandlerOptions?: any): any;
    saveAnnotationChildren(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, data: any, restHandlerOptions?: any): any;
    listAnnotations(catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    listAnnotationChildren(catalogueItemDomainType: any, catalogueItemId: any, annotationId?: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeAnnotation(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeAnnotationChild(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, childId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    getAnnotation(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    getAnnotationChild(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, childId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    saveClassifiers(catalogueItemDomainType: any, catalogueItemId: any, data: any, restHandlerOptions?: any): any;
    listClassifiers(catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeClassifier(catalogueItemDomainType: any, catalogueItemId: any, classifierId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    getClassifier(catalogueItemDomainType: any, catalogueItemId: any, classifierId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    saveMetadata(catalogueItemDomainType: any, catalogueItemId: any, data: any, restHandlerOptions?: any): any;
    listMetadata(catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeMetadata(catalogueItemDomainType: any, catalogueItemId: any, metadataId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    updateMetadata(catalogueItemDomainType: any, catalogueItemId: any, metadataId: any, data: any, restHandlerOptions?: any): any;
    getMetadata(catalogueItemDomainType: any, catalogueItemId: any, metadataId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    saveReferenceFiles(catalogueItemDomainType: any, catalogueItemId: any, data: any, restHandlerOptions?: any): any;
    listReferenceFiles(catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeReferenceFile(catalogueItemDomainType: any, catalogueItemId: any, referenceFileId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    updateReferenceFile(catalogueItemDomainType: any, catalogueItemId: any, referenceFileId: any, data: any, restHandlerOptions?: any): any;
    getReferenceFile(catalogueItemDomainType: any, catalogueItemId: any, referenceFileId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    saveSemanticLinks(catalogueItemDomainType: any, catalogueItemId: any, data: any, restHandlerOptions?: any): any;
    listSemanticLinks(catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeSemanticLink(catalogueItemDomainType: any, catalogueItemId: any, semanticLinkId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    updateSemanticLink(catalogueItemDomainType: any, catalogueItemId: any, semanticLinkId: any, data: any, restHandlerOptions?: any): any;
    getSemanticLink(catalogueItemDomainType: any, catalogueItemId: any, semanticLinkId: any, queryStringParams?: any, restHandlerOptions?: any): any;
}
