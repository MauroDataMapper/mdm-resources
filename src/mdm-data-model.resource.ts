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
import { RequestOptions, QueryParameters } from 'mdm-common.model';
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
 |   PUT    | /api/dataModels/${dataModelId}/newBranchModelVersion                                                                                 | Action: newBranchModelVersion
 |   PUT    | /api/dataModels/${dataModelId}/newForkModel                                                                                          | Action: newForkModel
 |   GET    | /api/dataModels/${dataModelId}/latestModelVersion                                                                                    | Action: latestModelVersion
 |   GET    | /api/dataModels/${dataModelId}/latestFinalisedModel                                                                                  | Action: latestFinalisedModel
 |   GET    | /api/dataModels/${dataModelId}/modelVersionTree                                                                                      | Action: modelVersionTree
 */
export class MdmDataModelResource extends MdmResource {

    defaultDataTypes(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/providers/defaultDataTypeProviders`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    importers(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/providers/importers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    exporters(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/providers/exporters`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    types(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/types`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    importModels(importerNamespace, importerName, importerVersion, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/import/${importerNamespace}/${importerName}/${importerVersion}`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    exportModels(exporterNamespace, exporterName, exporterVersion, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    removeAllUnusedDataClasses(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataClasses/clean`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    removeAllUnusedDataTypes(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/clean`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    listInFolder(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/dataModels`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeReadByAuthenticated(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByAuthenticated`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateReadByAuthenticated(dataModelId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByAuthenticated`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    removeReadByEveryone(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByEveryone`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateReadByEveryone(dataModelId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/readByEveryone`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    search(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/search`;
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    }

    hierarchy(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/hierarchy`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    newModelVersion(dataModelId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/newModelVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    newDocumentationVersion(dataModelId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/newDocumentationVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    finalise(dataModelId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/finalise`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    newBranchModelVersion(dataModelId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/newBranchModelVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    newForkModel(dataModelId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/newForkModel`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    addToFolder(folderId: string, data: any, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const queryString = this.generateQueryString(queryStringParams);
        const url = `${this.apiEndpoint}/folders/${folderId}/dataModels${queryString}`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    updateDataModelInFolder(folderId: string, dataModelId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/dataModels/${dataModelId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    moveDataModelToFolder(dataModelId: string, folderId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/folder/${folderId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    suggestLinks(dataModelId: string, otherModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/suggestLinks/${otherModelId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    diff(dataModelId: string, otherModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/diff/${otherModelId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    exportModel(dataModelId: string, exporterNamespace, exporterName, exporterVersion, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    list(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeAll(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    remove(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    update(dataModelId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    /// <summary>
    /// Get data model by Id or a path
    /// </summary>
    /// <param name="dataModelId">Date Model Id or a path in the format typePrefix:label|typePrefix:label</param>
    /// <param name="queryStringParams">Query String Params</param>
    /// <param name="restHandlerOptions">restHandler Options</param>
    get(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        let url = '';
        if (this.isGuid(dataModelId)) {
            url = `${this.apiEndpoint}/dataModels/${dataModelId}`;
        }
        else {
            url = `${this.apiEndpoint}/dataModels/path/${dataModelId}`;
        }
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    latestModelVersion(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/latestModelVersion`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    latestFinalisedModel(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/latestFinalisedModel`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    modelVersionTree(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/modelVersionTree`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    undoSoftDelete(dataModelId: string, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/admin/dataModels/${dataModelId}/undoSoftDelete`;
        return this.simplePut(url, {}, restHandlerOptions);
    }
}
