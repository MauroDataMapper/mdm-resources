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
 * Controller: referenceDataModel
 |   GET    | /api/referenceData/providers/defaultDataTypeProviders                                                                                   | Action: defaultDataTypeProviders
 |   GET    | /api/referenceData/providers/importers                                                                                                  | Action: importerProviders
 |   GET    | /api/referenceData/providers/exporters                                                                                                  | Action: exporterProviders
 |   POST   | /api/referenceData/import/${importerNamespace}/${importerName}/${importerVersion}                                                       | Action: importModels
 |   POST   | /api/referenceData/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                       | Action: exportModels
 |  DELETE  | /api/referenceData/${referenceDataModelId}/readByAuthenticated                                                                          | Action: readByAuthenticated
 |   PUT    | /api/referenceData/${referenceDataModelId}/readByAuthenticated                                                                          | Action: readByAuthenticated
 |  DELETE  | /api/referenceData/${referenceDataModelId}/readByEveryone                                                                               | Action: readByEveryone
 |   PUT    | /api/referenceData/${referenceDataModelId}/readByEveryone                                                                               | Action: readByEveryone
 |   GET    | /api/referenceData/${referenceDataModelId}/search                                                                                       | Action: search
 |   POST   | /api/referenceData/${referenceDataModelId}/search                                                                                       | Action: search
 |   GET    | /api/referenceData/${referenceDataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                               | Action: exportModel
 |   GET    | /api/referenceData                                                                                                                      | Action: index
 |  DELETE  | /api/referenceData/${id}                                                                                                                | Action: delete
 |   PUT    | /api/referenceData/${id}                                                                                                                | Action: update
 |   GET    | /api/referenceData/${id}                                                                                                                | Action: show
 |   PUT    | /api/referenceData/${referenceDataModelId}/folder/${folderId}                                                                           | Action: changeFolder

 */
export class MdmReferenceDataModelResource extends MdmResource {
    defaultDataTypes(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData/providers/defaultDataTypeProviders`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    importers(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData/providers/importers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    exporters(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData/providers/exporters`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    importModels(importerNamespace, importerName, importerVersion, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData/import/${importerNamespace}/${importerName}/${importerVersion}`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    exportModels(exporterNamespace, exporterName, exporterVersion, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    removeReadByAuthenticated(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData/${referenceDataModelId}/readByAuthenticated`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByAuthenticated(referenceDataModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData/${referenceDataModelId}/readByAuthenticated`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    removeReadByEveryone(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData/${referenceDataModelId}/readByEveryone`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByEveryone(referenceDataModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData/${referenceDataModelId}/readByEveryone`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    search(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData/${referenceDataModelId}/search`;
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    }
    exportModel(referenceDataModelId, exporterNamespace, exporterName, exporterVersion, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData/${referenceDataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    list(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    remove(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData/${referenceDataModelId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(referenceDataModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData/${referenceDataModelId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    get(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData/${referenceDataModelId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    moveReferenceDataModelToFolder(referenceDataModelId, folderId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceData/${referenceDataModelId}/folder/${folderId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-reference-data-model.resource.js.map