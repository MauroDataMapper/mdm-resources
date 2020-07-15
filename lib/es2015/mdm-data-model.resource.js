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
export class MdmDataModelResource extends MdmResource {
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
    defaultDataTypes(queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels/providers/defaultDataTypeProviders`;
        return this.simpleGet(url, queryStringParams);
    }
    importers(queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels/providers/importers`;
        return this.simpleGet(url, queryStringParams);
    }
    exporters(queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels/providers/exporters`;
        return this.simpleGet(url, queryStringParams);
    }
    types(queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels/types`;
        return this.simpleGet(url, queryStringParams);
    }
    importModels(importerNamespace, importerName, importerVersion, data) {
        const url = `${this.apiEndpoint}/dataModels/import/${importerNamespace}/${importerName}/${importerVersion}`;
        return this.simplePost(url, data);
    }
    exportModels(exporterNamespace, exporterName, exporterVersion, data) {
        const url = `${this.apiEndpoint}/dataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simplePost(url, data);
    }
    removeAllUnusedDataClasses(dataModelId, queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/clean`;
        return this.simpleDelete(url, queryStringParams);
    }
    removeAllUnusedDataTypes(dataModelId, queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/clean`;
        return this.simpleDelete(url, queryStringParams);
    }
    listInFolder(folderId, queryStringParams) {
        const url = `${this.apiEndpoint}/folders/${folderId}/dataModels`;
        return this.simpleGet(url, queryStringParams);
    }
    removeReadByAuthenticated(dataModelId, queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByAuthenticated`;
        return this.simpleDelete(url, queryStringParams);
    }
    updateReadByAuthenticated(dataModelId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByAuthenticated`;
        return this.simplePut(url, data);
    }
    removeReadByEveryone(dataModelId, queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByEveryone`;
        return this.simpleDelete(url, queryStringParams);
    }
    updateReadByEveryone(dataModelId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByEveryone`;
        return this.simplePut(url, data);
    }
    search(dataModelId, queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/search`;
        return this.simpleGet(url, queryStringParams);
    }
    hierarchy(dataModelId, queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/hierarchy`;
        return this.simpleGet(url, queryStringParams);
    }
    newModelVersion(dataModelId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/newModelVersion`;
        return this.simplePut(url, data);
    }
    newDocumentationVersion(dataModelId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/newDocumentationVersion`;
        return this.simplePut(url, data);
    }
    finalise(dataModelId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/finalise`;
        return this.simplePut(url, data);
    }
    addToFolder(folderId, data) {
        const url = `${this.apiEndpoint}/folders/${folderId}/dataModels`;
        return this.simplePost(url, data);
    }
    updateDataModelInFolder(folderId, dataModelId, data) {
        const url = `${this.apiEndpoint}/folders/${folderId}/dataModels/${dataModelId}`;
        return this.simplePut(url, data);
    }
    updateFolderWithDataModel(dataModelId, folderId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/folder/${folderId}`;
        return this.simplePut(url, data);
    }
    suggestLinks(dataModelId, otherModelId, queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/suggestLinks/${otherModelId}`;
        return this.simpleGet(url, queryStringParams);
    }
    diff(dataModelId, otherModelId, queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/diff/${otherModelId}`;
        return this.simpleGet(url, queryStringParams);
    }
    exportModel(dataModelId, exporterNamespace, exporterName, exporterVersion, queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simpleGet(url, queryStringParams);
    }
    list(queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels`;
        return this.simpleGet(url, queryStringParams);
    }
    removeAll(queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels`;
        return this.simpleDelete(url, queryStringParams);
    }
    remove(dataModelId, queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}`;
        return this.simpleDelete(url, queryStringParams);
    }
    update(dataModelId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}`;
        return this.simplePut(url, data);
    }
    get(dataModelId, queryStringParams) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}`;
        return this.simpleGet(url, queryStringParams);
    }
}
//# sourceMappingURL=mdm-data-model.resource.js.map