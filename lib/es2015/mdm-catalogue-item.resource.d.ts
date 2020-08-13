import { MdmResource } from './mdm-resource';
import { IMdmRestHandlerOptions, IMdmQueryStringParams } from './mdm-rest-handler';
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
    search(data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    searchByGet(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    saveAnnotations(catalogueItemDomainType: any, catalogueItemId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    saveAnnotationChildren(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    listAnnotations(catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    listAnnotationChildren(catalogueItemDomainType: any, catalogueItemId: any, annotationId?: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeAnnotation(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeAnnotationChild(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, childId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    getAnnotation(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    getAnnotationChild(catalogueItemDomainType: any, catalogueItemId: any, annotationId: any, childId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    saveClassifiers(catalogueItemDomainType: any, catalogueItemId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    listClassifiers(catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeClassifier(catalogueItemDomainType: any, catalogueItemId: any, classifierId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    getClassifier(catalogueItemDomainType: any, catalogueItemId: any, classifierId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    saveMetadata(catalogueItemDomainType: any, catalogueItemId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    listMetadata(catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeMetadata(catalogueItemDomainType: any, catalogueItemId: any, metadataId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateMetadata(catalogueItemDomainType: any, catalogueItemId: any, metadataId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    getMetadata(catalogueItemDomainType: any, catalogueItemId: any, metadataId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    saveReferenceFiles(catalogueItemDomainType: any, catalogueItemId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    listReferenceFiles(catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeReferenceFile(catalogueItemDomainType: any, catalogueItemId: any, referenceFileId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateReferenceFile(catalogueItemDomainType: any, catalogueItemId: any, referenceFileId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    getReferenceFile(catalogueItemDomainType: any, catalogueItemId: any, referenceFileId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    saveSemanticLinks(catalogueItemDomainType: any, catalogueItemId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    listSemanticLinks(catalogueItemDomainType: any, catalogueItemId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeSemanticLink(catalogueItemDomainType: any, catalogueItemId: any, semanticLinkId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateSemanticLink(catalogueItemDomainType: any, catalogueItemId: any, semanticLinkId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    getSemanticLink(catalogueItemDomainType: any, catalogueItemId: any, semanticLinkId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
