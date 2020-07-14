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
 * Controller: term
 |   GET    | /api/terminologies/${terminologyId}/terms/search                                                           | Action: search                                  |
 |   POST   | /api/terminologies/${terminologyId}/terms/search                                                           | Action: search                                  |
 |   GET    | /api/terminologies/${terminologyId}/terms/tree/${termId}?                                                  | Action: tree                                    |
 |   POST   | /api/terminologies/${terminologyId}/terms                                                                  | Action: save                                    |
 |   GET    | /api/terminologies/${terminologyId}/terms                                                                  | Action: index                                   |
 |   GET    | /api/codeSets/${codeSetId}/terms                                                                           | Action: index                                   |
 |  DELETE  | /api/terminologies/${terminologyId}/terms/${id}                                                            | Action: delete                                  |
 |   PUT    | /api/terminologies/${terminologyId}/terms/${id}                                                            | Action: update                                  |
 |   GET    | /api/terminologies/${terminologyId}/terms/${id}                                                            | Action: show
 *
 * Controller: termRelationship
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships            | Action: index                                   |
 |   POST   | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships                                            | Action: save                                    |
 |   GET    | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships                                            | Action: index                                   |
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}/termRelationships/${id}      | Action: show                                    |
 |  DELETE  | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships/${id}                                      | Action: delete                                  |
 |   PUT    | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships/${id}                                      | Action: update                                  |
 |   GET    | /api/terminologies/${terminologyId}/terms/${termId}/termRelationships/${id}                                      | Action: show
 */
var MdmTermResource = /** @class */ (function (_super) {
    __extends(MdmTermResource, _super);
    function MdmTermResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //   private catalogueItem: MdmCatalogueItemResource;
    //   constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler) {
    //     super(resourcesConfig, restHandler);
    //     this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
    //   }
    //   get(terminologyId, id, action: any = {}) {
    //     // if (['metadata', 'annotations', 'classifiers'].includes(action)) {
    //     //   return this.catalogueItem.get(id, action.contentType);
    //     // }
    //     switch(action) {
    //         case 'metadata': return this.catalogueItem.listMetadata('terms', id);
    //         case 'annotations': return this.catalogueItem.listAnnotations('terms', id);
    //         case 'classifiers': return this.catalogueItem.listClassifiers('terms', id);
    //         case 'semanticLinks': return this.catalogueItem.listSemanticLinks('terms', id);
    //     }
    //     return this.getResource(this.makeUrl(terminologyId), id, action);
    //   }
    //   put(terminologyId, id, action) {
    //     return this.putResource(this.makeUrl(terminologyId), id, action);
    //   }
    //   post(terminologyId, id, action) {
    //     return this.postResource(this.makeUrl(terminologyId), id, action);
    //   }
    //   delete(terminologyId, id) {
    //     return this.deleteResource(this.makeUrl(terminologyId), id);
    //   }
    //   makeUrl(terminologyId: string) {
    //     return `terminologies/${terminologyId}/terms/`;
    //   }
    MdmTermResource.prototype.search = function (terminologyId, queryStringParams) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/search";
        return this.simpleGet(url, queryStringParams);
    };
    MdmTermResource.prototype.tree = function (terminologyId, termId, queryStringParams) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/tree" + (termId ? "/" + termId : '');
        return this.simpleGet(url, queryStringParams);
    };
    MdmTermResource.prototype.save = function (terminologyId, data) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms";
        return this.simplePost(url, data);
    };
    MdmTermResource.prototype.list = function (terminologyId, queryStringParams) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms";
        return this.simpleGet(url, queryStringParams);
    };
    MdmTermResource.prototype.remove = function (terminologyId, termId, queryStringParams) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmTermResource.prototype.update = function (terminologyId, termId, data) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId;
        return this.simplePut(url, data);
    };
    MdmTermResource.prototype.get = function (terminologyId, termId, queryStringParams) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId;
        return this.simpleGet(url, queryStringParams);
    };
    MdmTermResource.prototype.addTermRelationships = function (terminologyId, termId, data) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId + "/termRelationships";
        return this.simplePost(url, data);
    };
    MdmTermResource.prototype.termRelationships = function (terminologyId, termId, queryStringParams) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId + "/termRelationships";
        return this.simpleGet(url, queryStringParams);
    };
    MdmTermResource.prototype.removeTermRelationship = function (terminologyId, termId, termRelationshipId, queryStringParams) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId + "/termRelationships/" + termRelationshipId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmTermResource.prototype.updateTermRelationship = function (terminologyId, termId, termRelationshipId, data) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId + "/termRelationships/" + termRelationshipId;
        return this.simplePut(url, data);
    };
    MdmTermResource.prototype.getTermRelationship = function (terminologyId, termId, termRelationshipId, queryStringParams) {
        var url = this.apiEndpoint + "/terminologies/" + terminologyId + "/terms/" + termId + "/termRelationships/" + termRelationshipId;
        return this.simpleGet(url, queryStringParams);
    };
    return MdmTermResource;
}(MdmResource));
export { MdmTermResource };
//# sourceMappingURL=mdm-term.resource.js.map