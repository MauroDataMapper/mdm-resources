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

    // getClassifiers(catalogueItemDomainType, catalogueItemId, options = {}) {
    //     return this.simpleGet(`${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers`, options);
    // }

    // getMetadata(catalogueItemDomainType, catalogueItemId, options = {}) {
    //     return this.simpleGet(`${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata`, options);
    // }

    // getSummaryMetadata(catalogueItemDomainType, catalogueItemId, options = {}) {
    //     return this.simpleGet(`${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/summaryMetadata`, options);
    // }

    // getAnnotations(catalogueItemDomainType, catalogueItemId, options = {}) {
    //     return this.simpleGet(`${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations`, options);
    // }

    // getSemanticLinks(catalogueItemDomainType, catalogueItemId, options = {}) {
    //     return this.simpleGet(`${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks`, options);
    // }

    // getReferenceFiles(catalogueItemDomainType, catalogueItemId, options = {}) {
    //     return this.simpleGet(`${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles`, options);
    // }

    //Annotation

    saveAnnotations(catalogueItemDomainType, catalogueItemId, data, options?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations`;
        return this.simplePost(url, data, options);
    }

    saveAnnotationChildren(catalogueItemDomainType, catalogueItemId, annotationId, data, options?) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations`;
        return this.simplePost(url, data, options);
    }

    listAnnotations(catalogueItemDomainType, catalogueItemId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations`;
        return this.simpleGet(url, options);
    }

    listAnnotationChildren(catalogueItemDomainType, catalogueItemId, annotationId?, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations`;
        return this.simpleGet(url, options);
    }

    removeAnnotation(catalogueItemDomainType, catalogueItemId, annotationId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}`;
        return this.simpleDelete(url, options);
    }

    removeAnnotationChild(catalogueItemDomainType, catalogueItemId, annotationId, childId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${childId}`;
        return this.simpleDelete(url, options);
    }

    getAnnotation(catalogueItemDomainType, catalogueItemId, annotationId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}`;
        return this.simpleGet(url, options);
    }

    getAnnotationChild(catalogueItemDomainType, catalogueItemId, annotationId, childId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/annotations/${annotationId}/annotations/${childId}`;
        return this.simpleGet(url, options);
    }

    // Classifier
    saveClassifiers(catalogueItemDomainType, catalogueItemId, data, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers`;
        return this.simplePost(url, data, options);
    }

    listClassifiers(catalogueItemDomainType, catalogueItemId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers`;
        return this.simpleGet(url, options);
    }

    removeClassifier(catalogueItemDomainType, catalogueItemId, classifierId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${classifierId}`;
        return this.simpleDelete(url, options);
    }

    getClassifier(catalogueItemDomainType, catalogueItemId, classifierId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/classifiers/${classifierId}`;
        return this.simpleGet(url, options);
    }

    // Metadata
    saveMetadata(catalogueItemDomainType, catalogueItemId, data, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata`;
        return this.simplePost(url, data, options);
    }

    listMetadata(catalogueItemDomainType, catalogueItemId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata`;
        return this.simpleGet(url, options);
    }

    removeMetadata(catalogueItemDomainType, catalogueItemId, metadataId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
        return this.simpleDelete(url, options);
    }

    updateMetadata(catalogueItemDomainType, catalogueItemId, metadataId, data, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
        return this.simplePut(url, data, options);
    }

    getMetadata(catalogueItemDomainType, catalogueItemId, metadataId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
        return this.simpleGet(url, options);
    }

    // Reference Files
    saveReferenceFiles(catalogueItemDomainType, catalogueItemId, data, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles`;
        return this.simplePost(url, data, options);
    }

    listReferenceFiles(catalogueItemDomainType, catalogueItemId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles`;
        return this.simpleGet(url, options);
    }

    removeReferenceFile(catalogueItemDomainType, catalogueItemId, referenceFileId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${referenceFileId}`;
        return this.simpleDelete(url, options);
    }

    updateReferenceFile(catalogueItemDomainType, catalogueItemId, referenceFileId, data, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${referenceFileId}`;
        return this.simplePut(url, data, options);
    }

    getReferenceFile(catalogueItemDomainType, catalogueItemId, referenceFileId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/referenceFiles/${referenceFileId}`;
        return this.simpleGet(url, options);
    }

    // Semantic Links
    saveSemanticLinks(catalogueItemDomainType, catalogueItemId, data, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks`;
        return this.simplePost(url, data, options);
    }

    listSemanticLinks(catalogueItemDomainType, catalogueItemId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks`;
        return this.simpleGet(url, options);
    }

    removeSemanticLink(catalogueItemDomainType, catalogueItemId, semanticLinkId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${semanticLinkId}`;
        return this.simpleDelete(url, options);
    }

    updateSemanticLink(catalogueItemDomainType, catalogueItemId, semanticLinkId, data, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${semanticLinkId}`;
        return this.simplePut(url, data, options);
    }

    getSemanticLink(catalogueItemDomainType, catalogueItemId, semanticLinkId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/semanticLinks/${semanticLinkId}`;
        return this.simpleGet(url, options);
    }
}
