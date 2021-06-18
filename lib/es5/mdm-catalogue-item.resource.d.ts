import { AnnotationChildCreatePayload, AnnotationCreatePayload, ReferenceFile, ReferenceFileCreatePayload } from './mdm-catalogue-item.model';
import { RequestSettings, QueryParameters, ModelDomainType, Uuid, FilterQueryParameters } from './mdm-common.model';
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
/**
 * MDM resources for the management of catalogue items. These endpoints are generally applied to any catalogue item.
 */
export declare class MdmCatalogueItemResource extends MdmResource {
    search(data: any, restHandlerOptions?: RequestSettings): any;
    searchByGet(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP POST` - Creates a new annotation under a chosen catalogue item.
     *
     * @param domainType The domain type of the parent catalogue item.
     * @param id The unique identifier of the parent catalogue item.
     * @param data The payload of the request containing all the details for the annotation to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link AnnotationDetailResponse} containing a {@link Annotation} object.
     */
    saveAnnotations(domainType: ModelDomainType, id: Uuid, data: AnnotationCreatePayload, options?: RequestSettings): any;
    /**
     * `HTTP POST` - Creates a new child annotation under a chosen annotation.
     *
     * @param domainType The domain type of the parent catalogue item.
     * @param catalogueItemId The unique identifier of the parent catalogue item.
     * @param annotationId The unique identifier of the parent annotation to add to.
     * @param data The payload of the request containing all the details for the child annotation to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link AnnotationDetailResponse} containing a {@link Annotation} object.
     */
    saveAnnotationChildren(domainType: ModelDomainType, catalogueItemId: Uuid, annotationId: Uuid, data: AnnotationChildCreatePayload, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Request the list of annotations for a catalogue item.
     *
     * @param domainType The domain type of the parent catalogue item.
     * @param id The unique identifier of the parent catalogue item.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link AnnotationIndexResponse} containing a list of {@link Annotation} items.
     *
     * @see {@link MdmCatalogueItemResource.getAnnotation}
     */
    listAnnotations(domainType: ModelDomainType, id: Uuid, query?: FilterQueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Request the list of child annotations for a parent annotation.
     *
     * @param domainType The domain type of the parent catalogue item.
     * @param catalogueItemId The unique identifier of the parent catalogue item.
     * @param annotationId The unique identifier of the parent annotation.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link AnnotationIndexResponse} containing a list of {@link Annotation} items.
     *
     * @see {@link MdmCatalogueItemResource.getAnnotation}
     */
    listAnnotationChildren(domainType: ModelDomainType, catalogueItemId: Uuid, annotationId: Uuid, query?: FilterQueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes an existing annotation.
     *
     * @param domainType The domain type of the parent catalogue item.
     * @param catalogueItemId The unique indentifier of the parent catalogue item.
     * @param annotationId The unique identifier of the annotation to remove.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    removeAnnotation(domainType: ModelDomainType, catalogueItemId: Uuid, annotationId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes an existing child annotation.
     *
     * @param domainType The domain type of the parent catalogue item.
     * @param catalogueItemId The unique indentifier of the parent catalogue item.
     * @param annotationId The unique identifier of the parent annotation.
     * @param childId The unique identifier of the child annotation to remove.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    removeAnnotationChild(domainType: ModelDomainType, catalogueItemId: Uuid, annotationId: Uuid, childId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Request an annotation from a chosen catalogue item.
     *
     * @param domainType The domain type of the parent catalogue item.
     * @param catalogueItemId The unique indentifier of the parent catalogue item.
     * @param annotationId The unique identifier of the annotation to get.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link AnnotationDetailResponse} containing a {@link Annotation} object.
     */
    getAnnotation(domainType: ModelDomainType, catalogueItemId: Uuid, annotationId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Request a child annotation from a chosen parent annotation.
     *
     * @param domainType The domain type of the parent catalogue item.
     * @param catalogueItemId The unique indentifier of the parent catalogue item.
     * @param annotationId The unique identifier of the parent annotation.
     * @param childId The unique identifier of the child annotation to get.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link AnnotationDetailResponse} containing a {@link Annotation} object.
     */
    getAnnotationChild(domainType: ModelDomainType, catalogueItemId: Uuid, annotationId: Uuid, childId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    saveClassifiers(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings): any;
    listClassifiers(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeClassifier(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    getClassifier(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    saveMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings): any;
    listMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, data: any, restHandlerOptions?: RequestSettings): any;
    getMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP POST` - Creates a new reference file under a chosen catalogue item.
     *
     * @param domainType The domain type of the parent catalogue item.
     * @param id The unique identifier of the parent catalogue item.
     * @param data The payload of the request containing all the details for the reference file to create.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link ReferenceFileDetailResponse} containing a {@link ReferenceFile} object.
     */
    saveReferenceFiles(domainType: ModelDomainType, id: Uuid, data: ReferenceFileCreatePayload, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Request the list of reference files for a catalogue item.
     *
     * @param domainType The domain type of the parent catalogue item.
     * @param id The unique identifier of the parent catalogue item.
     * @param query Optional query string parameters to filter the returned list, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ReferenceFileIndexResponse} containing a list of {@link ReferenceFile} items.
     *
     * @see {@link MdmCatalogueItemResource.getReferenceFile}
     */
    listReferenceFiles(domainType: ModelDomainType, id: Uuid, query?: FilterQueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes an existing reference file.
     *
     * @param domainType The domain type of the parent catalogue item.
     * @param catalogueItemId The unique indentifier of the parent catalogue item.
     * @param referenceFileId The unique identifier of the reference file to remove.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    removeReferenceFile(domainType: ModelDomainType, catalogueItemId: Uuid, referenceFileId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Updates an existing reference file.
     *
     * @param domainType The domain type of the parent catalogue item.
     * @param catalogueItemId The unique indentifier of the parent catalogue item.
     * @param referenceFileId The unique identifier of the reference file to update.
     * @param data The payload of the request containing all the details for the reference file to update.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link CodeSetDetailResponse} containing a {@link CodeSetDetail} object.
     */
    updateReferenceFile(domainType: ModelDomainType, catalogueItemId: Uuid, referenceFileId: Uuid, data: ReferenceFile, restHandlerOptions?: RequestSettings): any;
    /**
     * `HTTP GET` - Request a reference file from a chosen catalogue item.
     *
     * @param domainType The domain type of the parent catalogue item.
     * @param catalogueItemId The unique indentifier of the parent catalogue item.
     * @param referenceFileId The unique identifier of the reference file to get.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link ReferenceFileDetailResponse} containing a {@link ReferenceFile} object.
     */
    getReferenceFile(domainType: ModelDomainType, catalogueItemId: Uuid, referenceFileId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
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
