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
import { QueryParameters } from 'mdm-common.model';
import { MdmResource } from './mdm-resource';
import { IMdmRestHandlerOptions } from './mdm-rest-handler';

/**
 * Controller: codeSet
 |   GET    | /api/codeSets/providers/importers                                                                          | Action: importerProviders                       |
 |   GET    | /api/codeSets/providers/exporters                                                                          | Action: exporterProviders                       |
 |   POST   | /api/codeSets/import/${importerNamespace}/${importerName}/${importerVersion}                               | Action: importModels                            |
 |   POST   | /api/codeSets/export/${exporterNamespace}/${exporterName}/${exporterVersion}                               | Action: exportModels                            |
 |  DELETE  | /api/codeSets/${codeSetId}/readByAuthenticated                                                             | Action: readByAuthenticated                     |
 |   PUT    | /api/codeSets/${codeSetId}/readByAuthenticated                                                             | Action: readByAuthenticated                     |
 |  DELETE  | /api/codeSets/${codeSetId}/readByEveryone                                                                  | Action: readByEveryone                          |
 |   PUT    | /api/codeSets/${codeSetId}/readByEveryone                                                                  | Action: readByEveryone                          |
 |   PUT    | /api/codeSets/${codeSetId}/newModelVersion                                                                 | Action: newModelVersion                         |
 |   PUT    | /api/codeSets/${codeSetId}/newDocumentationVersion                                                         | Action: newDocumentationVersion                 |
 |   PUT    | /api/codeSets/${codeSetId}/finalise                                                                        | Action: finalise                                |
 |   POST   | /api/folders/${folderId}/codeSets                                                                          | Action: save                                    |
 |   GET    | /api/folders/${folderId}/codeSets                                                                          | Action: index                                   |
 |  DELETE  | /api/codeSets/${codeSetId}/terms/${termId}                                                                 | Action: alterTerms                              |
 |   PUT    | /api/codeSets/${codeSetId}/terms/${termId}                                                                 | Action: alterTerms                              |
 |   PUT    | /api/codeSets/${codeSetId}/folder/${folderId}                                                              | Action: changeFolder                            |
 |   GET    | /api/codeSets/${codeSetId}/diff/${otherModelId}                                                            | Action: diff                                    |
 |   PUT    | /api/folders/${folderId}/codeSets/${codeSetId}                                                             | Action: changeFolder                            |
 |   GET    | /api/codeSets/${codeSetId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                  | Action: exportModel                             |
 |   GET    | /api/codeSets                                                                                              | Action: index                                   |
 |  DELETE  | /api/codeSets                                                                                              | Action: deleteAll                               |
 |  DELETE  | /api/codeSets/${id}                                                                                        | Action: delete                                  |
 |   PUT    | /api/codeSets/${id}                                                                                        | Action: update                                  |
 |   GET    | /api/codeSets/${id}                                                                                        | Action: show                                    |
 |   PUT    | /api/codeSets/${codeSetId}/newBranchModelVersion                                                           | Action: newBranchModelVersion                   |
 |   PUT    | /api/codeSets/${codeSetId}/newForkModel                                                                    | Action: newForkModel                            |
 |   GET    | /api/codeSets/${codeSetId}/latestModelVersion                                                              | Action: latestModelVersion                      |
 |   GET    | /api/codeSets/${codeSetId}/latestFinalisedModel                                                            | Action: latestFinalisedModel                    |
 |   GET    | /api/codeSets/${codeSetId}/modelVersionTree                                                                | Action: modelVersionTree                        |
 */

export class MdmCodeSetResource extends MdmResource {

    importers(queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/providers/importers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    exporters(queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/providers/exporters`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    importModels(namespace, name, version, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/import/${namespace}/${name}/${version}`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    exportModels(namespace, name, version, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/export/${namespace}/${name}/${version}`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    newModelVersion(codeSetId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/newModelVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    newDocumentationVersion(codeSetId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/newDocumentationVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    finalise(codeSetId: string, data?, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/finalise`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    newBranchModelVersion(codeSetId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/newBranchModelVersion`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    newForkModel(codeSetId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/newForkModel`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    addCodeSetsToFolder(folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/codeSets`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    listCodeSetsInFolder(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/codeSets`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeTerm(codeSetId: string, termId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/terms/${termId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    alterTerm(codeSetId: string, termId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/terms/${termId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    moveCodeSetToFolder(codeSetId: string, folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/folder/${folderId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    diff(codeSetId: string, otherModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/diff/${otherModelId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    // changeFolder(codeSetId: string, folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
    //     const url = `${this.apiEndpoint}/folders/${folderId}/codeSets/${codeSetId}`;
    //     return this.simplePut(url, data, restHandlerOptions);
    // }

    exportModel(codeSetId: string, exporterNamespace, exporterName, exporterVersion, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    list(queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeAll(queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    remove(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    update(codeSetId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    /// <summary>
    /// Get Code Set by Id or path
    /// </summary>
    /// <param name="codeSetId">code Set Id or a path in the format typePrefix:label|typePrefix:label</param>
    /// <param name="queryStringParams">Query String Params</param>
    /// <param name="restHandlerOptions">restHandler Options</param>
    get(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        let url = '';
        if (this.isGuid(codeSetId)) {
            url = `${this.apiEndpoint}/codeSets/${codeSetId}`;
        }
        else {
            url = `${this.apiEndpoint}/codeSets/path/${codeSetId}`;
        }
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    terms(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/terms`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeReadByAuthenticated(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByAuthenticated`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByAuthenticated(codeSetId: string, data?, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByAuthenticated`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    removeReadByEveryone(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByEveryone`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByEveryone(codeSetId: string, data?, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/readByEveryone`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    latestModelVersion(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/latestModelVersion`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    latestFinalisedModel(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/latestFinalisedModel`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    modelVersionTree(codeSetId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/codeSets/${codeSetId}/modelVersionTree`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    undoSoftDelete(codeSetId: string, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/codeSets/${codeSetId}/undoSoftDelete`;
        return this.simplePut(url, {}, restHandlerOptions);
    }
}
