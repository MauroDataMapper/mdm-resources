import { RequestSettings, QueryParameters, ModelDomainType } from './mdm-common.model';
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
    search(data: any, restHandlerOptions?: RequestSettings): any;
    searchByGet(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    saveAnnotations(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings): any;
    saveAnnotationChildren(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, data: any, restHandlerOptions?: RequestSettings): any;
    listAnnotations(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    listAnnotationChildren(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId?: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeAnnotation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeAnnotationChild(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    getAnnotation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    getAnnotationChild(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    saveClassifiers(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings): any;
    listClassifiers(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeClassifier(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    getClassifier(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    saveMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings): any;
    listMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, data: any, restHandlerOptions?: RequestSettings): any;
    getMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    saveReferenceFiles(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings): any;
    listReferenceFiles(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeReferenceFile(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, referenceFileId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateReferenceFile(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, referenceFileId: string, data: any, restHandlerOptions?: RequestSettings): any;
    getReferenceFile(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, referenceFileId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    saveSemanticLinks(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings): any;
    listSemanticLinks(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeSemanticLink(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, semanticLinkId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateSemanticLink(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, semanticLinkId: string, data: any, restHandlerOptions?: RequestSettings): any;
    getSemanticLink(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, semanticLinkId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    listRules(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    saveRule(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings): any;
    updateRule(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, data: any, restHandlerOptions?: RequestSettings): any;
    listRuleRepresentations(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    saveRulesRepresentation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, ruleId: string, restHandlerOptions?: RequestSettings): any;
    updateRulesRepresentation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, ruleId: string, representationId: string, restHandlerOptions?: RequestSettings): any;
    removeRule(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeRulesRepresentation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, representationId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
}
