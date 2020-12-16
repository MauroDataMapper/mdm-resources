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
import { MdmResource, ModelDomainType } from './mdm-resource';
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
export class MdmCatalogueItemResource extends MdmResource {
    //Search

    search(data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueItems/search`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    searchByGet(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueItems/search`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    //Annotation

    saveAnnotations(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    saveAnnotationChildren(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    listAnnotations(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    listAnnotationChildren(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId?: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeAnnotation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    removeAnnotationChild(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, childId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${childId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    getAnnotation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    getAnnotationChild(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, annotationId: string, childId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${childId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    // Classifier
    saveClassifiers(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    listClassifiers(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeClassifier(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${classifierId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    getClassifier(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, classifierId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${classifierId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    // Metadata
    saveMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    listMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    getMetadata(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, metadataId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    // Reference Files
    saveReferenceFiles(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    listReferenceFiles(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeReferenceFile(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, referenceFileId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${referenceFileId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateReferenceFile(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, referenceFileId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${referenceFileId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    getReferenceFile(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, referenceFileId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${referenceFileId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    // Semantic Links
    saveSemanticLinks(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    listSemanticLinks(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeSemanticLink(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, semanticLinkId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${semanticLinkId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateSemanticLink(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, semanticLinkId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${semanticLinkId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    getSemanticLink(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, semanticLinkId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${semanticLinkId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    listRules(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    saveRule(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    updateRule(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules/${ruleId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    listRuleRepresentations(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules/${ruleId}/representations`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    saveRulesRepresentation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any,ruleId: string,restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules/${ruleId}/representations`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    updateRulesRepresentation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, data: any,ruleId: string, representationId:string, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules/${ruleId}/representations/${representationId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    removeRule(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules/${ruleId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    removeRulesRepresentation(catalogueItemDomainType: string | ModelDomainType, catalogueItemId: string, ruleId: string, representationId:string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/rules/${ruleId}/representations/${representationId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

}
