var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var MdmCatalogueUserResource = /** @class */ (function (_super) {
    __extends(MdmCatalogueUserResource, _super);
    function MdmCatalogueUserResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    MdmCatalogueUserResource.prototype.adminRegister = function (data) {
        var url = this.apiEndpoint + "/admin/catalogueUsers/adminRegister";
        return this.simplePost(url, data);
    };
    MdmCatalogueUserResource.prototype.pendingCount = function (queryStringParams) {
        var url = this.apiEndpoint + "/admin/catalogueUsers/pendingCount";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueUserResource.prototype.pending = function (queryStringParams) {
        var url = this.apiEndpoint + "/admin/catalogueUsers/pending";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueUserResource.prototype.exists = function (emailAddress, queryStringParams) {
        var url = this.apiEndpoint + "/admin/catalogueUsers/userExists/" + emailAddress;
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueUserResource.prototype.reject = function (catalogueUserId, data) {
        var url = this.apiEndpoint + "/admin/catalogueUsers/" + catalogueUserId + "/rejectRegistration";
        return this.simplePut(url, data);
    };
    MdmCatalogueUserResource.prototype.approve = function (catalogueUserId, data) {
        var url = this.apiEndpoint + "/admin/catalogueUsers/" + catalogueUserId + "/approveRegistration";
        return this.simplePut(url, data);
    };
    MdmCatalogueUserResource.prototype.adminPasswordReset = function (catalogueUserId, data) {
        var url = this.apiEndpoint + "/admin/catalogueUsers/" + catalogueUserId + "/adminPasswordReset";
        return this.simplePut(url, data);
    };
    MdmCatalogueUserResource.prototype.search = function (queryStringParams) {
        var url = this.apiEndpoint + "/catalogueUsers/search";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueUserResource.prototype.resetPasswordLink = function (emailAddress, queryStringParams) {
        var url = this.apiEndpoint + "/catalogueUsers/resetPasswordLink/" + emailAddress;
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueUserResource.prototype.resetPassword = function (catalogueUserId, data) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId + "/resetPassword";
        return this.simplePut(url, data);
    };
    MdmCatalogueUserResource.prototype.changePassword = function (catalogueUserId, data) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId + "/changePassword";
        return this.simplePut(url, data);
    };
    MdmCatalogueUserResource.prototype.updateUserPreferences = function (catalogueUserId, data) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId + "/userPreferences";
        return this.simplePut(url, data);
    };
    MdmCatalogueUserResource.prototype.userPreferences = function (catalogueUserId, queryStringParams) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId + "/userPreferences";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueUserResource.prototype.listInUserGroup = function (userGroupId, queryStringParams) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/catalogueUsers";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueUserResource.prototype.save = function (data) {
        var url = this.apiEndpoint + "/catalogueUsers";
        return this.simplePut(url, data);
    };
    MdmCatalogueUserResource.prototype.list = function (queryStringParams) {
        var url = this.apiEndpoint + "/catalogueUsers";
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueUserResource.prototype.remove = function (catalogueUserId, queryStringParams) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId;
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueUserResource.prototype.update = function (catalogueUserId, data) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId;
        return this.simplePut(url, data);
    };
    MdmCatalogueUserResource.prototype.get = function (catalogueUserId, queryStringParams) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId;
        return this.simpleGet(url, queryStringParams);
    };
    MdmCatalogueUserResource.prototype.listInContainerUserGroup = function (containerDomainType, containerId, userGroupId, queryStringParams) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups/" + userGroupId + "/catalogueUsers";
        return this.simpleGet(url, queryStringParams);
    };
    return MdmCatalogueUserResource;
}(MdmResource));
export { MdmCatalogueUserResource };
//# sourceMappingURL=mdm-catalogue-user.resource.js.map