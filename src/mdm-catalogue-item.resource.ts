/*
Copyright 2020 University of Oxford

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
*/
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
export class MdmCatalogueItemResource extends MdmResource {
  // Search

  search(data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/catalogueItems/search`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  searchByGet(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/catalogueItems/search`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  // Annotation

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
  saveAnnotations(domainType: ModelDomainType, id: Uuid, data: AnnotationCreatePayload, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${domainType}/${id}/annotations`;
    return this.simplePost(url, data, options);
  }

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
  saveAnnotationChildren(domainType: ModelDomainType, catalogueItemId: Uuid, annotationId: Uuid, data: AnnotationChildCreatePayload, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${domainType}/${catalogueItemId}/annotations/${annotationId}/annotations`;
    return this.simplePost(url, data, options);
  }

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
  listAnnotations(domainType: ModelDomainType, id: Uuid, query?: FilterQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${domainType}/${id}/annotations`;
    return this.simpleGet(url, query, options);
  }

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
  listAnnotationChildren(domainType: ModelDomainType, catalogueItemId: Uuid, annotationId: Uuid, query?: FilterQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${domainType}/${catalogueItemId}/annotations/${annotationId}/annotations`;
    return this.simpleGet(url, query, options);
  }

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
  removeAnnotation(domainType: ModelDomainType, catalogueItemId: Uuid, annotationId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${domainType}/${catalogueItemId}/annotations/${annotationId}`;
    return this.simpleDelete(url, query, options);
  }

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
  removeAnnotationChild(domainType: ModelDomainType, catalogueItemId: Uuid, annotationId: Uuid, childId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${domainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${childId}`;
    return this.simpleDelete(url, query, options);
  }

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
  getAnnotation(domainType: ModelDomainType, catalogueItemId: Uuid, annotationId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${domainType}/${catalogueItemId}/annotations/${annotationId}`;
    return this.simpleGet(url, query, options);
  }

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
  getAnnotationChild(domainType: ModelDomainType, catalogueItemId: Uuid, annotationId: Uuid, childId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${domainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${childId}`;
    return this.simpleGet(url, query, options);
  }

  // Classifier
  saveClassifiers(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  listClassifiers(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  removeClassifier(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${classifierId}`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  getClassifier(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${classifierId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  // Metadata
  saveMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  listMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  removeMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  updateMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  getMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  // Reference Files

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
  saveReferenceFiles(domainType: ModelDomainType, id: Uuid, data: ReferenceFileCreatePayload, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${domainType}/${id}/referenceFiles`;
    return this.simplePost(url, data, options);
  }

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
  listReferenceFiles(domainType: ModelDomainType, id: Uuid, query?: FilterQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${domainType}/${id}/referenceFiles`;
    return this.simpleGet(url, query, options);
  }

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
  removeReferenceFile(domainType: ModelDomainType, catalogueItemId: Uuid, referenceFileId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${domainType}/${catalogueItemId}/referenceFiles/${referenceFileId}`;
    return this.simpleDelete(url, query, options);
  }

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
  updateReferenceFile(domainType: ModelDomainType, catalogueItemId: Uuid, referenceFileId: Uuid, data: ReferenceFile, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${domainType}/${catalogueItemId}/referenceFiles/${referenceFileId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

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
  getReferenceFile(domainType: ModelDomainType, catalogueItemId: Uuid, referenceFileId: Uuid, query?: QueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${domainType}/${catalogueItemId}/referenceFiles/${referenceFileId}`;
    return this.simpleGet(url, query, options);
  }

  // Semantic Links
  saveSemanticLinks(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  listSemanticLinks(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  removeSemanticLink(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, semanticLinkId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${semanticLinkId}`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  updateSemanticLink(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, semanticLinkId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${semanticLinkId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  getSemanticLink(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, semanticLinkId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${semanticLinkId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  listRules(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  saveRule(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  updateRule(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, data: any, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules/${ruleId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  listRuleRepresentations(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules/${ruleId}/representations`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  saveRulesRepresentation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, ruleId: string, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules/${ruleId}/representations`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  updateRulesRepresentation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, ruleId: string, representationId: string, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules/${ruleId}/representations/${representationId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  removeRule(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules/${ruleId}`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

  removeRulesRepresentation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, representationId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
    const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules/${ruleId}/representations/${representationId}`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }

}
