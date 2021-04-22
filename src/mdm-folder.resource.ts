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
 * Controller: folder
 |   POST   | /api/folders/${folderId}/folders                                                                      | Action: save
 |   GET    | /api/folders/${folderId}/folders                                                                      | Action: index
 |   GET    | /api/folders/${folderId}/search                                                                       | Action: search
 |   POST   | /api/folders/${folderId}/search                                                                       | Action: search
 |  DELETE  | /api/folders/${folderId}/readByAuthenticated                                                          | Action: readByAuthenticated
 |   PUT    | /api/folders/${folderId}/readByAuthenticated                                                          | Action: readByAuthenticated
 |  DELETE  | /api/folders/${folderId}/readByEveryone                                                               | Action: readByEveryone
 |   PUT    | /api/folders/${folderId}/readByEveryone                                                               | Action: readByEveryone
 |  DELETE  | /api/folders/${folderId}/folders/${id}                                                                | Action: delete
 |   PUT    | /api/folders/${folderId}/folders/${id}                                                                | Action: update
 |   GET    | /api/folders/${folderId}/folders/${id}                                                                | Action: show
 |   POST   | /api/folders                                                                                          | Action: save
 |   GET    | /api/folders                                                                                          | Action: index
 |  DELETE  | /api/folders/${id}                                                                                    | Action: delete
 |   PUT    | /api/folders/${id}                                                                                    | Action: update
 |   GET    | /api/folders/${id}                                                                                    | Action: show
 */
export class MdmFolderResource extends MdmResource {

    search(folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/search`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    searchByGet(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/search`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    save(data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    saveChildrenOf(folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/folders`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    list(queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    listChildrenOf(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/folders`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    remove(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    removeChildOf(folderId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/folders/${childId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    update(folderId: string, data, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    updateChildOf(folderId: string, childId: string, data, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/folders/${childId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    get(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    getChildOf(folderId: string, childId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/folders/${childId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    addCondeSets(folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/codeSets`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    codeSets(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/codeSets`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    alterCodeSetFolder(codeSetId: string, folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/codeSets/${codeSetId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    addTerminologies(folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/terminologies`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    terminologies(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/terminologies`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    alterTerminologyFolder(terminologyId: string, folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/terminologies/${terminologyId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    removeReadByAuthenticated(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/readByAuthenticated`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByAuthenticated(folderId: string, data?, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/readByAuthenticated`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    removeReadByEveryone(folderId: string, queryStringParams?: QueryParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/readByEveryone`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateReadByEveryone(folderId: string, data?, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/folders/${folderId}/readByEveryone`;
        return this.simplePut(url, data, restHandlerOptions);
    }

}
