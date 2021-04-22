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
 * Controller: referenceDataModel
 |   GET    | /api/referenceDataModels/providers/defaultDataTypeProviders                                                                                   | Action: defaultDataTypeProviders
 |   GET    | /api/referenceDataModels/providers/importers                                                                                                  | Action: importerProviders
 |   GET    | /api/referenceDataModels/providers/exporters                                                                                                  | Action: exporterProviders
 |   POST   | /api/referenceDataModels/import/${importerNamespace}/${importerName}/${importerVersion}                                                       | Action: importModels
 |   POST   | /api/referenceDataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                       | Action: exportModels
 |  DELETE  | /api/referenceDataModels/${referenceDataModelId}/readByAuthenticated                                                                          | Action: readByAuthenticated
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/readByAuthenticated                                                                          | Action: readByAuthenticated
 |  DELETE  | /api/referenceDataModels/${referenceDataModelId}/readByEveryone                                                                               | Action: readByEveryone
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/readByEveryone                                                                               | Action: readByEveryone
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/search                                                                                       | Action: search
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/search                                                                                       | Action: search
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                               | Action: exportModel
 |   GET    | /api/referenceDataModels                                                                                                                      | Action: index
 |  DELETE  | /api/referenceDataModels/${id}                                                                                                                | Action: delete
 |   PUT    | /api/referenceDataModels/${id}                                                                                                                | Action: update
 |   GET    | /api/referenceDataModels/${id}                                                                                                                | Action: show
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/folder/${folderId}                                                                           | Action: changeFolder
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newModelVersion                                                                              | Action: newModelVersion
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newDocumentationVersion                                                                      | Action: newDocumentationVersion
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/finalise                                                                                     | Action: finalise
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newBranchModelVersion                                                                        | Action: newBranchModelVersion
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/newForkModel                                                                                 | Action: newForkModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/latestModelVersion                                                                           | Action: latestModelVersion
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/latestFinalisedModel                                                                         | Action: latestFinalisedModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/modelVersionTree                                                                             | Action: modelVersionTree

 */
export class MdmReferenceDataModelResource extends MdmResource {

    defaultDataTypes(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/providers/defaultDataTypeProviders`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    importers(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/providers/importers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    exporters(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/providers/exporters`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    importModels(importerNamespace, importerName, importerVersion, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/import/${importerNamespace}/${importerName}/${importerVersion}`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    exportModels(exporterNamespace, exporterName, exporterVersion, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    removeReadByAuthenticated(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByAuthenticated`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateReadByAuthenticated(referenceDataModelId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByAuthenticated`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    removeReadByEveryone(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByEveryone`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateReadByEveryone(referenceDataModelId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByEveryone`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    search(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/search`;
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    }

    exportModel(referenceDataModelId: string, exporterNamespace, exporterName, exporterVersion, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    list(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    remove(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    update(referenceDataModelId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    get(referenceDataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    moveReferenceDataModelToFolder(referenceDataModelId: string, folderId: string, data: any, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/folder/${folderId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    undoSoftDelete(referenceDataModelId: string, restHandlerOptions?: RequestOptions) {
        const url = `${this.apiEndpoint}/admin/referenceDataModels/${referenceDataModelId}/undoSoftDelete`;
        return this.simplePut(url, {}, restHandlerOptions);
    }

    finalise(referenceDataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/finalise`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    newBranchModelVersion(referenceDataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/newBranchModelVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    newForkModel(referenceDataModelId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/newForkModel`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    latestModelVersion(referenceDataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/latestModelVersion`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    latestFinalisedModel(referenceDataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/latestFinalisedModel`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    modelVersionTree(referenceDataModelId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/modelVersionTree`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

}
