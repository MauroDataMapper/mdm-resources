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
import { IMdmRestHandlerOptions, IMdmQueryStringParams } from './mdm-rest-handler';

/**
 * Parameters for login to authenticate a user.
 * 
 * @see [[MdmSecurityResource]]
 */
export interface MdmSecurityLoginParameters {
    username: string;
    password: string;
}

export enum SecurableDomainType {
    Classifiers = 'classifiers',
    CodeSets = 'codeSets',
    DataModels = 'dataModels',
    Folders = 'folders',
    ReferenceDataModels = 'referenceDataModels'
}

/**
 * MDM resource for managing security and authentication.
 */
export class MdmSecurityResource extends MdmResource {
    /**
     * Login using a username and password to generate a new authenticated session.
     * @param data The username/password to use.
     * @param restHandlerOptions Optional REST handler options, if required.
     * @returns The result of the `POST` request.
     * 
     * On success, the response will be a `200 OK` and the response body will look similar to this:
     * 
     * ```ts
     * {
     *  body: {
     *      id: 'beb9b1e2-d716-4a38-96ba-a5eabf24399a',
     *      emailAddress: 'test@test.com',
     *      firstName: 'first',
     *      lastName: 'last',
     *      disabled: false,
     *      pending: false,
     *      createdBy: 'admin'
     *  }
     * }
     * ```
     */
    login(data: MdmSecurityLoginParameters, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/authentication/login`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    /**
     * Logout of an authenticated session.
     * @param queryStringParams Optional query string parameters, if required.
     * @param restHandlerOptions Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     * 
     * On success, the response will be a `204 No Content` and contain no body.
     */
    logout(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/authentication/logout`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    /**
     * Inspect the permissions for a particular Mauro resource.
     * @param securableResourceDomainType The domain type to get permissions for.
     * @param securableResourceId The UUID of the resource to inspect.
     * @param queryStringParams Optional query string parameters, if required.
     * @param restHandlerOptions Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     * 
     * On success, the response will be a `200 OK` and contain a response body similar to below:
     * 
     * ```ts
     * {
     *  readableByEveryone: false,
     *  readableByAuthenticated: false,
     *  readableByGroups: [
     *     {
     *         id: '51ff3b39-6643-45d6-a5dd-826f11812b12',
     *         name: 'editors'
     *     },
     *     {
     *         id: 'b150b351-873f-4f16-b9d0-5c0984774385',
     *         name: 'readers'
     *     }
     *  ],
     *  writeableByGroups: [
     *     {
     *         id: '51ff3b39-6643-45d6-a5dd-826f11812b12',
     *         name: 'editors'
     *     }
     *  ],
     *  readableByUsers: [],
     *  writeableByUsers: []
     *  }
     * ```
     */
    permissions(
        securableResourceDomainType: SecurableDomainType,
        securableResourceId: string,
        queryStringParams?: IMdmQueryStringParams,
        restHandlerOptions?: IMdmRestHandlerOptions) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/permissions`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
