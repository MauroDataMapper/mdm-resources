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

 */
export class MdmReferenceDataModelResource extends MdmResource {
    defaultDataTypes(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/providers/defaultDataTypeProviders`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    importers(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/providers/importers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    exporters(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/providers/exporters`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    importModels(importerNamespace, importerName, importerVersion, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/import/${importerNamespace}/${importerName}/${importerVersion}`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    exportModels(exporterNamespace, exporterName, exporterVersion, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    removeReadByAuthenticated(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByAuthenticated`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByAuthenticated(referenceDataModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByAuthenticated`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    removeReadByEveryone(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByEveryone`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByEveryone(referenceDataModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/readByEveryone`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    search(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/search`;
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    }
    exportModel(referenceDataModelId, exporterNamespace, exporterName, exporterVersion, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    list(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    remove(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(referenceDataModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    get(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-reference-data-model.resource.js.map