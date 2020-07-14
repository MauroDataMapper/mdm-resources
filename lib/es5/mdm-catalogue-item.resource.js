var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var MdmCatalogueItemResource = /** @class */ (function (_super) {
    __extends(MdmCatalogueItemResource, _super);
    function MdmCatalogueItemResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    MdmCatalogueItemResource.prototype.saveAnnotations = function (catalogueItemDomainType, catalogueItemId, data) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations";
        return this.simplePost(url, data);
    };
    MdmCatalogueItemResource.prototype.saveAnnotationChildren = function (catalogueItemDomainType, catalogueItemId, annotationId, data) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations";
        return this.simplePost(url, data);
    };
    MdmCatalogueItemResource.prototype.listAnnotations = function (catalogueItemDomainType, catalogueItemId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueItemResource.prototype.listAnnotationChildren = function (catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueItemResource.prototype.removeAnnotation = function (catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmCatalogueItemResource.prototype.removeAnnotationChild = function (catalogueItemDomainType, catalogueItemId, annotationId, childId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations/" + childId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmCatalogueItemResource.prototype.getAnnotation = function (catalogueItemDomainType, catalogueItemId, annotationId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId;
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueItemResource.prototype.getAnnotationChild = function (catalogueItemDomainType, catalogueItemId, annotationId, childId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/annotations/" + annotationId + "/annotations/" + childId;
        return this.simpleGet(url, queryStringParams);
    };
    // Classifier
    MdmCatalogueItemResource.prototype.saveClassifiers = function (catalogueItemDomainType, catalogueItemId, data) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers";
        return this.simplePost(url, data);
    };
    MdmCatalogueItemResource.prototype.listClassifiers = function (catalogueItemDomainType, catalogueItemId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueItemResource.prototype.removeClassifier = function (catalogueItemDomainType, catalogueItemId, classifierId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers/" + classifierId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmCatalogueItemResource.prototype.getClassifier = function (catalogueItemDomainType, catalogueItemId, classifierId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/classifiers/" + classifierId;
        return this.simpleGet(url, queryStringParams);
    };
    // Metadata
    MdmCatalogueItemResource.prototype.saveMetadata = function (catalogueItemDomainType, catalogueItemId, data) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata";
        return this.simplePost(url, data);
    };
    MdmCatalogueItemResource.prototype.listMetadata = function (catalogueItemDomainType, catalogueItemId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueItemResource.prototype.removeMetadata = function (catalogueItemDomainType, catalogueItemId, metadataId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata/" + metadataId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmCatalogueItemResource.prototype.updateMetadata = function (catalogueItemDomainType, catalogueItemId, metadataId, data) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata/" + metadataId;
        return this.simplePut(url, data);
    };
    MdmCatalogueItemResource.prototype.getMetadata = function (catalogueItemDomainType, catalogueItemId, metadataId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/metadata/" + metadataId;
        return this.simpleGet(url, queryStringParams);
    };
    // Reference Files
    MdmCatalogueItemResource.prototype.saveReferenceFiles = function (catalogueItemDomainType, catalogueItemId, data) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/referenceFiles";
        return this.simplePost(url, data);
    };
    MdmCatalogueItemResource.prototype.listReferenceFiles = function (catalogueItemDomainType, catalogueItemId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/referenceFiles";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueItemResource.prototype.removeReferenceFile = function (catalogueItemDomainType, catalogueItemId, referenceFileId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/referenceFiles/" + referenceFileId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmCatalogueItemResource.prototype.updateReferenceFile = function (catalogueItemDomainType, catalogueItemId, referenceFileId, data) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/referenceFiles/" + referenceFileId;
        return this.simplePut(url, data);
    };
    MdmCatalogueItemResource.prototype.getReferenceFile = function (catalogueItemDomainType, catalogueItemId, referenceFileId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/referenceFiles/" + referenceFileId;
        return this.simpleGet(url, queryStringParams);
    };
    // Semantic Links
    MdmCatalogueItemResource.prototype.saveSemanticLinks = function (catalogueItemDomainType, catalogueItemId, data) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/semanticLinks";
        return this.simplePost(url, data);
    };
    MdmCatalogueItemResource.prototype.listSemanticLinks = function (catalogueItemDomainType, catalogueItemId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/semanticLinks";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueItemResource.prototype.removeSemanticLink = function (catalogueItemDomainType, catalogueItemId, semanticLinkId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/semanticLinks/" + semanticLinkId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmCatalogueItemResource.prototype.updateSemanticLink = function (catalogueItemDomainType, catalogueItemId, semanticLinkId, data) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/semanticLinks/" + semanticLinkId;
        return this.simplePut(url, data);
    };
    MdmCatalogueItemResource.prototype.getSemanticLink = function (catalogueItemDomainType, catalogueItemId, semanticLinkId, queryStringParams) {
        var url = this.apiEndpoint + "/" + catalogueItemDomainType + "/" + catalogueItemId + "/semanticLinks/" + semanticLinkId;
        return this.simpleGet(url, queryStringParams);
    };
    return MdmCatalogueItemResource;
}(MdmResource));
export { MdmCatalogueItemResource };
//# sourceMappingURL=mdm-catalogue-item.resource.js.map