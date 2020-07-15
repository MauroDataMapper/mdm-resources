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
 */
export class MdmCatalogueUserResource extends MdmResource {
    //   get(id, action, options = {}) {
    //     if (!options) {
    //       options = {};
    //     }
    //     return this.getResource('catalogueUsers', id, action, options);
    //   }

    //   post(id, action, options) {
    //     return this.postResource('catalogueUsers', id, action, options);
    //   }

    //   put(id, action, options) {
    //     return this.putResource('catalogueUsers', id, action, options);
    //   }

    //   delete(id, action) {
    //     return this.deleteResource('catalogueUsers', id, action);
    //   }

    adminRegister(data) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/adminRegister`;
        return this.simplePost(url, data);
    }

    pendingCount(queryStringParams?) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/pendingCount`;
        return this.simpleGet(url, queryStringParams);
    }

    pending(queryStringParams?) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/pending`;
        return this.simpleGet(url, queryStringParams);
    }

    exists(emailAddress, queryStringParams?) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/userExists/${emailAddress}`;
        return this.simpleGet(url, queryStringParams);
    }

    reject(catalogueUserId, data) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/${catalogueUserId}/rejectRegistration`;
        return this.simplePut(url, data);
    }

    approve(catalogueUserId, data) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/${catalogueUserId}/approveRegistration`;
        return this.simplePut(url, data);
    }

    adminPasswordReset(catalogueUserId, data) {
        const url = `${this.apiEndpoint}/admin/catalogueUsers/${catalogueUserId}/adminPasswordReset`;
        return this.simplePut(url, data);
    }

    search(queryStringParams?) {
        const url = `${this.apiEndpoint}/catalogueUsers/search`;
        return this.simpleGet(url, queryStringParams);
    }

    resetPasswordLink(emailAddress, queryStringParams?) {
        const url = `${this.apiEndpoint}/catalogueUsers/resetPasswordLink/${emailAddress}`;
        return this.simpleGet(url, queryStringParams);
    }

    resetPassword(catalogueUserId, data) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/resetPassword`;
        return this.simplePut(url, data);
    }

    changePassword(catalogueUserId, data) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/changePassword`;
        return this.simplePut(url, data);
    }

    updateUserPreferences(catalogueUserId, data) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/userPreferences`;
        return this.simplePut(url, data);
    }
    
    userPreferences(catalogueUserId, queryStringParams?) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/userPreferences`;
        return this.simpleGet(url, queryStringParams);
    }

    listInUserGroup(userGroupId, queryStringParams?) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/catalogueUsers`;
        return this.simpleGet(url, queryStringParams);
    }

    save(data) {
        const url = `${this.apiEndpoint}/catalogueUsers`;
        return this.simplePut(url, data);
    }

    list(queryStringParams?) {
        const url = `${this.apiEndpoint}/catalogueUsers`;
        return this.simpleGet(url, queryStringParams);
    }

    remove(catalogueUserId, queryStringParams?) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}`;
        return this.simpleGet(url, queryStringParams);
    }

    update(catalogueUserId, data) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}`;
        return this.simplePut(url, data);
    }

    get(catalogueUserId, queryStringParams?) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}`;
        return this.simpleGet(url, queryStringParams);
    }

    listInContainerUserGroup(containerDomainType, containerId, userGroupId, queryStringParams?) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers`;
        return this.simpleGet(url, queryStringParams);
    }
}
