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
var MdmCatalogueUserResource = /** @class */ (function (_super) {
    __extends(MdmCatalogueUserResource, _super);
    function MdmCatalogueUserResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmCatalogueUserResource.prototype.adminRegister = function (data, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/catalogueUsers/adminRegister";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.pendingCount = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/catalogueUsers/pendingCount";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.pending = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/catalogueUsers/pending";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.exists = function (emailAddress, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/catalogueUsers/userExists/" + emailAddress;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.reject = function (catalogueUserId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/catalogueUsers/" + catalogueUserId + "/rejectRegistration";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.approve = function (catalogueUserId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/catalogueUsers/" + catalogueUserId + "/approveRegistration";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.adminPasswordReset = function (catalogueUserId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/catalogueUsers/" + catalogueUserId + "/adminPasswordReset";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.search = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers/search";
        return this.simplePost(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.resetPasswordLink = function (emailAddress, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers/resetPasswordLink/" + emailAddress;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.resetPassword = function (catalogueUserId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId + "/resetPassword";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.changePassword = function (catalogueUserId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId + "/changePassword";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.updateUserPreferences = function (catalogueUserId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId + "/userPreferences";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.userPreferences = function (catalogueUserId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId + "/userPreferences";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.listInUserGroup = function (userGroupId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/catalogueUsers";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.save = function (data, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.list = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.remove = function (catalogueUserId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.update = function (catalogueUserId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.get = function (catalogueUserId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.listInContainerUserGroup = function (containerDomainType, containerId, userGroupId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups/" + userGroupId + "/catalogueUsers";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.listApiKeys = function (catalogueUserId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId + "/apiKeys";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.saveApiKey = function (catalogueUserId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId + "/apiKeys";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.removeApiKey = function (catalogueUserId, apiKey, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId + "/apiKeys/" + apiKey;
        return this.simpleDelete(url, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.enableApiKey = function (catalogueUserId, apiKey, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId + "/apiKeys/" + apiKey + "/enable";
        return this.simplePut(url, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.disableApiKey = function (catalogueUserId, apiKey, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId + "/apiKeys/" + apiKey + "/disable";
        return this.simplePut(url, restHandlerOptions);
    };
    MdmCatalogueUserResource.prototype.refreshApiKey = function (catalogueUserId, apiKey, noOfDays, restHandlerOptions) {
        var url = this.apiEndpoint + "/catalogueUsers/" + catalogueUserId + "/apiKeys/" + apiKey + "/refresh/" + noOfDays;
        return this.simplePut(url, restHandlerOptions);
    };
    return MdmCatalogueUserResource;
}(MdmResource));
export { MdmCatalogueUserResource };
//# sourceMappingURL=mdm-catalogue-user.resource.js.map