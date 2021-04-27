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
import { MdmRequestOptions, QueryParameters, ContainerDomainType } from './mdm-common.model';
import { MdmResource } from './mdm-resource';

/**
 * Controller: catalogueUser
 |   POST   | /api/admin/catalogueUsers/adminRegister                                                                             | Action: adminRegister
 |   GET    | /api/admin/catalogueUsers/pendingCount                                                                              | Action: pendingCount
 |   GET    | /api/admin/catalogueUsers/pending                                                                                   | Action: pending
 |   GET    | /api/admin/catalogueUsers/userExists/${emailAddress}                                                                | Action: userExists
 |   PUT    | /api/admin/catalogueUsers/${catalogueUserId}/rejectRegistration                                                     | Action: rejectRegistration
 |   PUT    | /api/admin/catalogueUsers/${catalogueUserId}/approveRegistration                                                    | Action: approveRegistration
 |   PUT    | /api/admin/catalogueUsers/${catalogueUserId}/adminPasswordReset                                                     | Action: adminPasswordReset
 |   GET    | /api/catalogueUsers/search                                                                                          | Action: search
 |   POST   | /api/catalogueUsers/search                                                                                          | Action: search
 |   GET    | /api/catalogueUsers/resetPasswordLink/${emailAddress}                                                               | Action: sendPasswordResetLink
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/resetPassword                                                                | Action: resetPassword
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/changePassword                                                               | Action: changePassword
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/userPreferences                                                              | Action: updateUserPreferences
 |   GET    | /api/catalogueUsers/${catalogueUserId}/userPreferences                                                              | Action: userPreferences
 |   GET    | /api/userGroups/${userGroupId}/catalogueUsers                                                                       | Action: index
 |   POST   | /api/catalogueUsers                                                                                                 | Action: save
 |   GET    | /api/catalogueUsers                                                                                                 | Action: index
 |  DELETE  | /api/catalogueUsers/${id}                                                                                           | Action: delete
 |   PUT    | /api/catalogueUsers/${id}                                                                                           | Action: update
 |   GET    | /api/catalogueUsers/${id}                                                                                           | Action: show
 |   GET    | /api/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers                                 | Action: index
 |   GET    | /api/catalogueUsers/${catalogueUserId}/apiKeys                                                                      | Action: List all API Keys
 |   POST   | /api/catalogueUsers/${catalogueUserId}/apiKeys                                                                      | Action: Add an API Key
 |   DELETE | /api/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}                                                            | Action: Delete an API Key
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}/enable                                                     | Action: Enable an API Key
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}/disable                                                    | Action: Disable an API Key
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}/refresh/${noOfDays}                                        | Action: Refresh an API Key
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}/refresh/${expiresInDays}                                  | Action: Change expiry day
 */
export class MdmCatalogueUserResource extends MdmResource {

    adminRegister(data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/adminRegister`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    pendingCount(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/pendingCount`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    pending(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/pending`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    exists(emailAddress, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/userExists/${emailAddress}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    reject(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/${catalogueUserId}/rejectRegistration`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    approve(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/${catalogueUserId}/approveRegistration`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    adminPasswordReset(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/${catalogueUserId}/adminPasswordReset`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    search(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/search`;
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    }

    resetPasswordLink(emailAddress, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/resetPasswordLink/${emailAddress}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    resetPassword(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/resetPassword`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    changePassword(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/changePassword`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    updateUserPreferences(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/userPreferences`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    userPreferences(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/userPreferences`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    listInUserGroup(userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/catalogueUsers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    save(data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    list(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    remove(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    update(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    get(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    listInContainerUserGroup(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    listApiKeys(catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/apiKeys`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    saveApiKey(catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/apiKeys`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    removeApiKey(catalogueUserId: string, apiKey: string, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}`;
        return this.simpleDelete(url, restHandlerOptions);
    }

    enableApiKey(catalogueUserId: string, apiKey: string, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}/enable`;
        return this.simplePut(url, restHandlerOptions);
    }

    disableApiKey(catalogueUserId: string, apiKey: string, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}/disable`;
        return this.simplePut(url, restHandlerOptions);
    }

    refreshApiKey(catalogueUserId: string, apiKey: string, noOfDays: number, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/apiKeys/${apiKey}/refresh/${noOfDays}`;
        return this.simplePut(url, restHandlerOptions);
    }
}
