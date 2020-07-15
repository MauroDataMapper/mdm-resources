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
 * Controller: dataModel
 |   GET    | /api/dataModels/providers/defaultDataTypeProviders                                                                                   | Action: defaultDataTypeProviders
 |   GET    | /api/dataModels/providers/importers                                                                                                  | Action: importerProviders
 |   GET    | /api/dataModels/providers/exporters                                                                                                  | Action: exporterProviders
 |   GET    | /api/dataModels/types                                                                                                                | Action: types
 |   POST   | /api/dataModels/import/${importerNamespace}/${importerName}/${importerVersion}                                                       | Action: importModels
 |   POST   | /api/dataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                       | Action: exportModels
 |  DELETE  | /api/dataModels/${dataModelId}/dataClasses/clean                                                                                     | Action: deleteAllUnusedDataClasses
 |  DELETE  | /api/dataModels/${dataModelId}/dataTypes/clean                                                                                       | Action: deleteAllUnusedDataTypes
 |   GET    | /api/folders/${folderId}/dataModels                                                                                                  | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/readByAuthenticated                                                                                   | Action: readByAuthenticated
 |   PUT    | /api/dataModels/${dataModelId}/readByAuthenticated                                                                                   | Action: readByAuthenticated
 |  DELETE  | /api/dataModels/${dataModelId}/readByEveryone                                                                                        | Action: readByEveryone
 |   PUT    | /api/dataModels/${dataModelId}/readByEveryone                                                                                        | Action: readByEveryone
 |   GET    | /api/dataModels/${dataModelId}/search                                                                                                | Action: search
 |   POST   | /api/dataModels/${dataModelId}/search                                                                                                | Action: search
 |   GET    | /api/dataModels/${dataModelId}/hierarchy                                                                                             | Action: hierarchy
 |   PUT    | /api/dataModels/${dataModelId}/newModelVersion                                                                                       | Action: newModelVersion
 |   PUT    | /api/dataModels/${dataModelId}/newDocumentationVersion                                                                               | Action: newDocumentationVersion
 |   PUT    | /api/dataModels/${dataModelId}/finalise                                                                                              | Action: finalise
 |   POST   | /api/folders/${folderId}/dataModels                                                                                                  | Action: save
 |   PUT    | /api/folders/${folderId}/dataModels/${dataModelId}                                                                                   | Action: changeFolder
 |   PUT    | /api/dataModels/${dataModelId}/folder/${folderId}                                                                                    | Action: changeFolder
 |   GET    | /api/dataModels/${dataModelId}/suggestLinks/${otherModelId}                                                                          | Action: suggestLinks
 |   GET    | /api/dataModels/${dataModelId}/diff/${otherModelId}                                                                                  | Action: diff
 |   GET    | /api/dataModels/${dataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                        | Action: exportModel
 |   GET    | /api/dataModels                                                                                                                      | Action: index
 |  DELETE  | /api/dataModels                                                                                                                      | Action: deleteAll
 |  DELETE  | /api/dataModels/${id}                                                                                                                | Action: delete
 |   PUT    | /api/dataModels/${id}                                                                                                                | Action: update
 |   GET    | /api/dataModels/${id}                                                                                                                | Action: show
 */
var MdmDataModelResource = /** @class */ (function (_super) {
    __extends(MdmDataModelResource, _super);
    function MdmDataModelResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //   private catalogueItem: MdmCatalogueItemResource;
    //   constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler) {
    //     super(resourcesConfig, restHandler);
    //     this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
    //   }
    //   get(id, action?, options?) {
    //     if (!options) {
    //       options = {};
    //     }
    //     // if (['metadata', 'annotations', 'classifiers', 'semanticLinks'].indexOf(action) !== -1) {
    //     //   return this.catalogueItem.get(id, action, options.contentType);
    //     // }
    //     switch(action) {
    //         case 'metadata': return this.catalogueItem.listMetadata('dataModels', id, options);
    //         case 'annotations': return this.catalogueItem.listAnnotations('dataModels', id, options);
    //         case 'classifiers': return this.catalogueItem.listClassifiers('dataModels', id, options);
    //         case 'semanticLinks': return this.catalogueItem.listSemanticLinks('dataModels', id, options);
    //     }
    //     return this.getResource('dataModels', id, action, options);
    //   }
    //   post(id, action, options) {
    //     return this.postResource('dataModels', id, action, options);
    //   }
    //   put(id, action, options) {
    //     return this.putResource('dataModels', id, action, options);
    //   }
    //   delete(id, action, queryString, resource) {
    //     return this.deleteResource('dataModels', id, action, queryString, resource);
    //   }
    //   export(dataModels, exporter, contentType) {
    //     if (dataModels && dataModels.length === 1) {
    //       const URL = `/dataModels/${dataModels[0].id}/export/${exporter.namespace}/${exporter.name}/${exporter.version}`;
    //       return this.exportGet(dataModels, exporter, contentType, URL);
    //       //
    //       //  var deferred;
    //       // // deferred = $q.defer();
    //       //  var url = this.backendURL + url ;
    //       //  this.restHandler.restHandler({
    //       //      url: url,
    //       //      method:"GET",
    //       //      withCredentials: true,
    //       //      responseType : 'arraybuffer'
    //       //  }).then(function(response){
    //       //      var file = new Blob([ response ], {type : contentType});
    //       //      deferred.resolve(file);
    //       //  },function(response){
    //       //      deferred.reject(response);
    //       //  });
    //       //  return deferred.promise;
    //     }
    //     const url = `/dataModels/export/${exporter.namespace}/${exporter.name}/${exporter.version}`;
    //     return this.exportPost(dataModels, exporter, contentType, url);
    //     //  var deferred;
    //     // // deferred = $q.defer();
    //     //  url = this.backendURL + url;
    //     //
    //     //  restHandler({
    //     //      url: url,
    //     //      method: "POST",
    //     //      withCredentials: true,
    //     //      responseType: 'arraybuffer',
    //     //      data: dataModels.map(function(dataModel){return dataModel.id;})
    //     //  }).then(function (response) {
    //     //      var file = new Blob([response], {type: contentType});
    //     //      deferred.resolve(file);
    //     //  }, function (response) {
    //     //      deferred.reject(response);
    //     //  });
    //     //
    //     //  return deferred.promise;
    //   }
    //   import(importPath, formData) {
    //     const url = `${this.apiEndpoint}/dataModels/import/${importPath}`;
    //     return this.simplePost(url, {
    //       method: 'POST',
    //       withCredentials: true,
    //       data: formData
    //     });
    //   }
    MdmDataModelResource.prototype.defaultDataTypes = function (queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/providers/defaultDataTypeProviders";
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataModelResource.prototype.importers = function (queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/providers/importers";
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataModelResource.prototype.exporters = function (queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/providers/exporters";
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataModelResource.prototype.types = function (queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/types";
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataModelResource.prototype.importModels = function (importerNamespace, importerName, importerVersion, data) {
        var url = this.apiEndpoint + "/dataModels/import/" + importerNamespace + "/" + importerName + "/" + importerVersion;
        return this.simplePost(url, data);
    };
    MdmDataModelResource.prototype.exportModels = function (exporterNamespace, exporterName, exporterVersion, data) {
        var url = this.apiEndpoint + "/dataModels/export/" + exporterNamespace + "/" + exporterName + "/" + exporterVersion;
        return this.simplePost(url, data);
    };
    MdmDataModelResource.prototype.removeAllUnusedDataClasses = function (dataModelId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataClasses/clean";
        return this.simpleDelete(url, queryStringParams);
    };
    MdmDataModelResource.prototype.removeAllUnusedDataTypes = function (dataModelId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/dataTypes/clean";
        return this.simpleDelete(url, queryStringParams);
    };
    MdmDataModelResource.prototype.listInFolder = function (folderId, queryStringParams) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/dataModels";
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataModelResource.prototype.removeReadByAuthenticated = function (dataModelId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/readByAuthenticated";
        return this.simpleDelete(url, queryStringParams);
    };
    MdmDataModelResource.prototype.updateReadByAuthenticated = function (dataModelId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/readByAuthenticated";
        return this.simplePut(url, data);
    };
    MdmDataModelResource.prototype.removeReadByEveryone = function (dataModelId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/readByEveryone";
        return this.simpleDelete(url, queryStringParams);
    };
    MdmDataModelResource.prototype.updateReadByEveryone = function (dataModelId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/readByEveryone";
        return this.simplePut(url, data);
    };
    MdmDataModelResource.prototype.search = function (dataModelId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/search";
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataModelResource.prototype.hierarchy = function (dataModelId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/hierarchy";
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataModelResource.prototype.newModelVersion = function (dataModelId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/newModelVersion";
        return this.simplePut(url, data);
    };
    MdmDataModelResource.prototype.newDocumentationVersion = function (dataModelId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/newDocumentationVersion";
        return this.simplePut(url, data);
    };
    MdmDataModelResource.prototype.finalise = function (dataModelId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/finalise";
        return this.simplePut(url, data);
    };
    MdmDataModelResource.prototype.addToFolder = function (folderId, data) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/dataModels";
        return this.simplePost(url, data);
    };
    MdmDataModelResource.prototype.updateDataModelInFolder = function (folderId, dataModelId, data) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/dataModels/" + dataModelId;
        return this.simplePut(url, data);
    };
    MdmDataModelResource.prototype.updateFolderWithDataModel = function (dataModelId, folderId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/folder/" + folderId;
        return this.simplePut(url, data);
    };
    MdmDataModelResource.prototype.suggestLinks = function (dataModelId, otherModelId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/suggestLinks/" + otherModelId;
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataModelResource.prototype.diff = function (dataModelId, otherModelId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/diff/" + otherModelId;
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataModelResource.prototype.exportModel = function (dataModelId, exporterNamespace, exporterName, exporterVersion, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId + "/export/" + exporterNamespace + "/" + exporterName + "/" + exporterVersion;
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataModelResource.prototype.list = function (queryStringParams) {
        var url = this.apiEndpoint + "/dataModels";
        return this.simpleGet(url, queryStringParams);
    };
    MdmDataModelResource.prototype.removeAll = function (queryStringParams) {
        var url = this.apiEndpoint + "/dataModels";
        return this.simpleDelete(url, queryStringParams);
    };
    MdmDataModelResource.prototype.remove = function (dataModelId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId;
        return this.simpleDelete(url, queryStringParams);
    };
    MdmDataModelResource.prototype.update = function (dataModelId, data) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId;
        return this.simplePut(url, data);
    };
    MdmDataModelResource.prototype.get = function (dataModelId, queryStringParams) {
        var url = this.apiEndpoint + "/dataModels/" + dataModelId;
        return this.simpleGet(url, queryStringParams);
    };
    return MdmDataModelResource;
}(MdmResource));
export { MdmDataModelResource };
//# sourceMappingURL=mdm-data-model.resource.js.map