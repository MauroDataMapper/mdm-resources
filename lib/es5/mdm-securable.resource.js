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
 * Controller: securableResourceGroupRole
 |  DELETE  | /api/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}/userGroups/${userGroupId}      | Action: delete
 |   POST   | /api/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}/userGroups/${userGroupId}      | Action: save
 |   POST   | /api/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles                              | Action: save
 |   GET    | /api/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles                              | Action: index
 |  DELETE  | /api/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles/${id}                        | Action: delete
 |   PUT    | /api/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles/${id}                        | Action: update
 |   GET    | /api/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles/${id}                        | Action: show
 |   GET    | /api/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}                                | Action: index
 */
var MdmSecurableResource = /** @class */ (function (_super) {
    __extends(MdmSecurableResource, _super);
    function MdmSecurableResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmSecurableResource.prototype.removeUserGroupFromSecurableResourceGroupRole = function (securableResourceDomainType, securableResourceId, groupRoleId, userGroupId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/groupRoles/" + groupRoleId + "/userGroups/" + userGroupId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmSecurableResource.prototype.addUserGroupToSecurableResourceGroupRole = function (securableResourceDomainType, securableResourceId, groupRoleId, userGroupId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/groupRoles/" + groupRoleId + "/userGroups/" + userGroupId;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmSecurableResource.prototype.addSecurableResourceGroupRole = function (securableResourceDomainType, securableResourceId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/securableResourceGroupRoles";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmSecurableResource.prototype.listSecurableResourceGroupRoles = function (securableResourceDomainType, securableResourceId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/securableResourceGroupRoles";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmSecurableResource.prototype.removeSecurableResourceGroupRole = function (securableResourceDomainType, securableResourceId, securableResourceGroupRoleId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/securableResourceGroupRoles/" + securableResourceGroupRoleId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmSecurableResource.prototype.updateSecurableResourceGroupRole = function (securableResourceDomainType, securableResourceId, securableResourceGroupRoleId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/securableResourceGroupRoles/" + securableResourceGroupRoleId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmSecurableResource.prototype.getSecurableResourceGroupRole = function (securableResourceDomainType, securableResourceId, securableResourceGroupRoleId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/securableResourceGroupRoles/" + securableResourceGroupRoleId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmSecurableResource.prototype.getGroupRoles = function (securableResourceDomainType, securableResourceId, groupRoleId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + securableResourceDomainType + "/" + securableResourceId + "/groupRoles/" + groupRoleId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmSecurableResource;
}(MdmResource));
export { MdmSecurableResource };
//# sourceMappingURL=mdm-securable.resource.js.map