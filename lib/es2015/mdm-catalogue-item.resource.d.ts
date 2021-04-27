import { MdmRequestOptions, QueryParameters, ModelDomainType } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * Controller: annotation
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations            | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: remove
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${id}      | Action: show
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations                                        | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: remove
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/annotations/${id}                                  | Action: show
 *
 * Controller: classifier
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers                                        | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers                                        | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${id}                                  | Action: remove
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${id}                                  | Action: show
 *
 * Controller: metadata
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: remove
 * |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: update
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: show
 *
 * Controller: referenceFiles
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles                                     | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles                                     | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${id}                               | Action: delete
 * |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${id}                               | Action: update
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${id}                               | Action: show
 *
 * Controller: search
 * |   GET    | /api/catalogueItems/search                                                                            | Action: search
 * |   POST   | /api/catalogueItems/search                                                                            | Action: search
 *
 * Controller: semanticLink
 * |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks                                      | Action: save
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks                                      | Action: index
 * |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${id}                                | Action: delete
 * |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${id}                                | Action: update
 * |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${id}                                | Action: show
 *
 */
export declare class MdmCatalogueItemResource extends MdmResource {
    search(data: any, restHandlerOptions?: MdmRequestOptions): any;
    searchByGet(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    saveAnnotations(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    saveAnnotationChildren(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    listAnnotations(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    listAnnotationChildren(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId?: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeAnnotation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeAnnotationChild(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    getAnnotation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    getAnnotationChild(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    saveClassifiers(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    listClassifiers(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeClassifier(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    getClassifier(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    saveMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    listMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    getMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    saveReferenceFiles(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    listReferenceFiles(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeReferenceFile(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, referenceFileId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateReferenceFile(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, referenceFileId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    getReferenceFile(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, referenceFileId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    saveSemanticLinks(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    listSemanticLinks(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeSemanticLink(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, semanticLinkId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateSemanticLink(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, semanticLinkId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    getSemanticLink(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, semanticLinkId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    listRules(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    saveRule(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    updateRule(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    listRuleRepresentations(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    saveRulesRepresentation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, ruleId: string, restHandlerOptions?: MdmRequestOptions): any;
    updateRulesRepresentation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, ruleId: string, representationId: string, restHandlerOptions?: MdmRequestOptions): any;
    removeRule(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeRulesRepresentation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, representationId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
}
