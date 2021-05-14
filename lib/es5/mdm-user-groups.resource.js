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
 * Controller: userGroup
 |   GET    | /api/admin/applicationGroupRoles/${applicationGroupRoleId}/userGroups                                               | Action: index
 |  DELETE  | /api/admin/applicationGroupRoles/${applicationGroupRoleId}/userGroups/${userGroupId}                                | Action: updateApplicationGroupRole
 |   PUT    | /api/admin/applicationGroupRoles/${applicationGroupRoleId}/userGroups/${userGroupId}                                | Action: updateApplicationGroupRole
 |  DELETE  | /api/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}                                                    | Action: alterMembers
 |   PUT    | /api/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}                                                    | Action: alterMembers
 |   POST   | /api/userGroups                                                                                                     | Action: save
 |   GET    | /api/userGroups                                                                                                     | Action: index
 |  DELETE  | /api/userGroups/${id}                                                                                               | Action: delete
 |   PUT    | /api/userGroups/${id}                                                                                               | Action: update
 |   GET    | /api/userGroups/${id}                                                                                               | Action: show
 |   GET    | /api/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}/userGroups                     | Action: index
 |  DELETE  | /api/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}              | Action: alterMembers
 |   PUT    | /api/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}              | Action: alterMembers
 |   POST   | /api/${containerDomainType}/${containerId}/userGroups                                                               | Action: save
 |   GET    | /api/${containerDomainType}/${containerId}/userGroups                                                               | Action: index
 |  DELETE  | /api/${containerDomainType}/${containerId}/userGroups/${id}                                                         | Action: delete
 |   PUT    | /api/${containerDomainType}/${containerId}/userGroups/${id}                                                         | Action: update
 |   GET    | /api/${containerDomainType}/${containerId}/userGroups/${id}                                                         | Action: show
 *
 * Controller: securableResourceGroupRole
 |   POST   | /api/userGroups/${userGroupId}/securableResourceGroupRoles                                                          | Action: save
 |   GET    | /api/userGroups/${userGroupId}/securableResourceGroupRoles                                                          | Action: index
 |  DELETE  | /api/userGroups/${userGroupId}/securableResourceGroupRoles/${id}                                                    | Action: delete
 |   PUT    | /api/userGroups/${userGroupId}/securableResourceGroupRoles/${id}                                                    | Action: update
 |   GET    | /api/userGroups/${userGroupId}/securableResourceGroupRoles/${id}                                                    | Action: show
 */
var MdmUserGroupsResource = /** @class */ (function (_super) {
    __extends(MdmUserGroupsResource, _super);
    function MdmUserGroupsResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmUserGroupsResource.prototype.listInApplicationGroupRole = function (applicationGroupRoleId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/applicationGroupRoles/" + applicationGroupRoleId + "/userGroups";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.removeFromApplicationGroupRole = function (applicationGroupRoleId, userGroupId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/applicationGroupRoles/" + applicationGroupRoleId + "/userGroups/" + userGroupId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.updateInApplicationGroupRole = function (applicationGroupRoleId, userGroupId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/applicationGroupRoles/" + applicationGroupRoleId + "/userGroups/" + userGroupId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.removeUserFromUserGroup = function (userGroupId, catalogueUserId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/catalogueUsers/" + catalogueUserId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.updateUserInUserGroup = function (userGroupId, catalogueUserId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/catalogueUsers/" + catalogueUserId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.save = function (data, restHandlerOptions) {
        var url = this.apiEndpoint + "/userGroups";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.list = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/userGroups";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.remove = function (userGroupId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.update = function (userGroupId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.get = function (userGroupId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.listInSecurableResourceUserGroupRole = function (securableResourceDomainType, securableResourceId, groupRoleId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/groupRoles/" + groupRoleId + "/userGroups";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.removeUserFromContainerUserGroup = function (containerDomainType, containerId, userGroupId, catalogueUserId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups/" + userGroupId + "/catalogueUsers/" + catalogueUserId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.updateUserFromContainerUserGroup = function (containerDomainType, containerId, userGroupId, catalogueUserId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups/" + userGroupId + "/catalogueUsers/" + catalogueUserId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.addToContainer = function (containerDomainType, containerId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.listInContainer = function (containerDomainType, containerId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.removeFromContainer = function (containerDomainType, containerId, userGroupId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups/" + userGroupId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.updateInContainer = function (containerDomainType, containerId, userGroupId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups/" + userGroupId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.getFromContainer = function (containerDomainType, containerId, userGroupId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + containerDomainType + "/" + containerId + "/userGroups/" + userGroupId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.addSecurableResourceGroupRole = function (userGroupId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/securableResourceGroupRoles";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.securableResourceGroupRoles = function (userGroupId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/securableResourceGroupRoles";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.removeSecurableResourceGroupRole = function (userGroupId, securableResourceGroupRoleId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/securableResourceGroupRoles/" + securableResourceGroupRoleId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.updateSecurableResourceGroupRole = function (userGroupId, securableResourceGroupRoleId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/securableResourceGroupRoles/" + securableResourceGroupRoleId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmUserGroupsResource.prototype.getSecurableResourceGroupRole = function (userGroupId, securableResourceGroupRoleId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/userGroups/" + userGroupId + "/securableResourceGroupRoles/" + securableResourceGroupRoleId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmUserGroupsResource;
}(MdmResource));
export { MdmUserGroupsResource };
//# sourceMappingURL=mdm-user-groups.resource.js.map