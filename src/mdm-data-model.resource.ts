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
import { MdmCatalogueItemResource } from './mdm-catalogue-item.resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler } from './mdm-rest-handler';
import { MdmDataClassResource, MdmDataElementResource, MdmDataTypeResource } from 'index';

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

    //   import(importPath, formdata, restHandlerOptions?) {
    //     const url = `${this.apiEndpoint}/dataModels/import/${importPath}`;
    //     return this.simplePost(url, {
    //       method: 'POST',
    //       withCredentials: true,
    //       data: formData
    //     });
    //   }

    defaultDataTypes(queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/providers/defaultDataTypeProviders`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    importers(queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/providers/importers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    exporters(queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/providers/exporters`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    types(queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/types`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    importModels(importerNamespace, importerName, importerVersion, data, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/import/${importerNamespace}/${importerName}/${importerVersion}`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    exportModels(exporterNamespace, exporterName, exporterVersion, data, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    removeAllUnusedDataClasses(dataModelId, queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/clean`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    removeAllUnusedDataTypes(dataModelId, queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/clean`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    listInFolder(folderId, queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/folders/${folderId}/dataModels`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeReadByAuthenticated(dataModelId, queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByAuthenticated`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateReadByAuthenticated(dataModelId, data, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByAuthenticated`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    removeReadByEveryone(dataModelId, queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByEveryone`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateReadByEveryone(dataModelId, data, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByEveryone`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    search(dataModelId, queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/search`;
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    }

    hierarchy(dataModelId, queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/hierarchy`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    newModelVersion(dataModelId, data, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/newModelVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    newDocumentationVersion(dataModelId, data, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/newDocumentationVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    finalise(dataModelId, data, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/finalise`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    addToFolder(folderId, data, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/folders/${folderId}/dataModels`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    updateDataModelInFolder(folderId, dataModelId, data, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/folders/${folderId}/dataModels/${dataModelId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    updateFolderWithDataModel(dataModelId, folderId, data, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/folder/${folderId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    suggestLinks(dataModelId, otherModelId, queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/suggestLinks/${otherModelId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    diff(dataModelId, otherModelId, queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/diff/${otherModelId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    exportModel(dataModelId, exporterNamespace, exporterName, exporterVersion, queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    list(queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeAll(queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    remove(dataModelId, queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    update(dataModelId, data, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    get(dataModelId, queryStringParams?, restHandlerOptions?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
