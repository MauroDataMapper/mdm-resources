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
import { MdmRequestOptions, QueryParameters } from './mdm-common.model';
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
export class MdmTermResource extends MdmResource {

    search(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/search`;
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    }

    tree(terminologyId: string, termId?: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/tree${termId ? `/${termId}` : ''}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    save(terminologyId: string, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    list(terminologyId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    remove(terminologyId: string, termId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    update(terminologyId: string, termId: string, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    /// <summary>
    /// Get term by Terminology Id, term Id or a path
    /// </summary>
    /// <param name="terminologyId">Terminology Id</param>
    /// <param name="termId">Terminology Id or a path in the format typePrefix:label|typePrefix:label</param>
    /// <param name="queryStringParams">Query String Params</param>
    /// <param name="restHandlerOptions">restHandler Options</param>
    get(terminologyId: string, termId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        let url = '';
        if (this.isGuid(terminologyId)) {
            url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}`;
        }
        else {
            url = `${this.apiEndpoint}/terminologies/path/${termId}`;
        }

        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    addTermRelationships(terminologyId: string, termId: string, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    termRelationships(terminologyId: string, termId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeTermRelationship(terminologyId: string, termId: string, termRelationshipId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships/${termRelationshipId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateTermRelationship(terminologyId: string, termId: string, termRelationshipId: string, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships/${termRelationshipId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    getTermRelationship(terminologyId: string, termId: string, termRelationshipId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/terms/${termId}/termRelationships/${termRelationshipId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
