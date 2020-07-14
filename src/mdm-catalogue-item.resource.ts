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
export class MdmCatalogueItemResource extends MdmResource {
    // tree(id, includeSupersededModels) {
    //     id = id ? '?id=' + id : '';
    //     includeSupersededModels = includeSupersededModels ? '?includeSupersededModels=true' : '';
    // }

    // get(id, action, options) {
    //     return this.getResource('catalogueItems', id, action, options);
    // }

    // post(id, action, options) {
    //     return this.postResource('catalogueItems', id, action, options);
    // }

    // put(id, action, childId, options) {
    //     if (!options) {
    //         options = {};
    //     }
    //     id = !id ? '' : id;
    //     action = !action ? '' : action + '/';
    //     childId = !childId ? '' : childId;
    //     return this.putResource('catalogueItems', id, action + childId, options);
    // }

    // remove(id, action, childId) {
    //     id = !id ? '' : id;
    //     action = !action ? '' : action + '/';
    //     childId = !childId ? '' : childId;
    //     return this.removeResource('catalogueItems', id, action + childId, null, null);
    // }

    //Annotation

    saveAnnotations(catalogueItemDomainType, catalogueItemId, data) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations`;
        return this.simplePost(url, data);
    }

    saveAnnotationChildren(catalogueItemDomainType, catalogueItemId, annotationId, data) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations`;
        return this.simplePost(url, data);
    }

    listAnnotations(catalogueItemDomainType, catalogueItemId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations`;
        return this.simpleGet(url, queryStringParams);
    }

    listAnnotationChildren(catalogueItemDomainType, catalogueItemId, annotationId?, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations`;
        return this.simpleGet(url, queryStringParams);
    }

    removeAnnotation(catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    removeAnnotationChild(catalogueItemDomainType, catalogueItemId, annotationId, childId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${childId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    getAnnotation(catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}`;
        return this.simpleGet(url, queryStringParams);
    }

    getAnnotationChild(catalogueItemDomainType, catalogueItemId, annotationId, childId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${childId}`;
        return this.simpleGet(url, queryStringParams);
    }

    // Classifier
    saveClassifiers(catalogueItemDomainType, catalogueItemId, data) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers`;
        return this.simplePost(url, data);
    }

    listClassifiers(catalogueItemDomainType, catalogueItemId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers`;
        return this.simpleGet(url, queryStringParams);
    }

    removeClassifier(catalogueItemDomainType, catalogueItemId, classifierId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${classifierId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    getClassifier(catalogueItemDomainType, catalogueItemId, classifierId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${classifierId}`;
        return this.simpleGet(url, queryStringParams);
    }

    // Metadata
    saveMetadata(catalogueItemDomainType, catalogueItemId, data) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata`;
        return this.simplePost(url, data);
    }

    listMetadata(catalogueItemDomainType, catalogueItemId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata`;
        return this.simpleGet(url, queryStringParams);
    }

    removeMetadata(catalogueItemDomainType, catalogueItemId, metadataId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    updateMetadata(catalogueItemDomainType, catalogueItemId, metadataId, data) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
        return this.simplePut(url, data);
    }

    getMetadata(catalogueItemDomainType, catalogueItemId, metadataId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
        return this.simpleGet(url, queryStringParams);
    }

    // Reference Files
    saveReferenceFiles(catalogueItemDomainType, catalogueItemId, data) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles`;
        return this.simplePost(url, data);
    }

    listReferenceFiles(catalogueItemDomainType, catalogueItemId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles`;
        return this.simpleGet(url, queryStringParams);
    }

    removeReferenceFile(catalogueItemDomainType, catalogueItemId, referenceFileId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${referenceFileId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    updateReferenceFile(catalogueItemDomainType, catalogueItemId, referenceFileId, data) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${referenceFileId}`;
        return this.simplePut(url, data);
    }

    getReferenceFile(catalogueItemDomainType, catalogueItemId, referenceFileId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${referenceFileId}`;
        return this.simpleGet(url, queryStringParams);
    }

    // Semantic Links
    saveSemanticLinks(catalogueItemDomainType, catalogueItemId, data) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks`;
        return this.simplePost(url, data);
    }

    listSemanticLinks(catalogueItemDomainType, catalogueItemId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks`;
        return this.simpleGet(url, queryStringParams);
    }

    removeSemanticLink(catalogueItemDomainType, catalogueItemId, semanticLinkId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${semanticLinkId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    updateSemanticLink(catalogueItemDomainType, catalogueItemId, semanticLinkId, data) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${semanticLinkId}`;
        return this.simplePut(url, data);
    }

    getSemanticLink(catalogueItemDomainType, catalogueItemId, semanticLinkId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${semanticLinkId}`;
        return this.simpleGet(url, queryStringParams);
    }
}
