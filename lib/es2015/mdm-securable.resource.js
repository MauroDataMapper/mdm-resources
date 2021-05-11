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
export class MdmSecurableResource extends MdmResource {
    removeUserGroupFromSecurableResourceGroupRole(securableResourceDomainType, securableResourceId, groupRoleId, userGroupId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}/userGroups/${userGroupId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    addUserGroupToSecurableResourceGroupRole(securableResourceDomainType, securableResourceId, groupRoleId, userGroupId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}/userGroups/${userGroupId}`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    addSecurableResourceGroupRole(securableResourceDomainType, securableResourceId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    listSecurableResourceGroupRoles(securableResourceDomainType, securableResourceId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeSecurableResourceGroupRole(securableResourceDomainType, securableResourceId, securableResourceGroupRoleId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateSecurableResourceGroupRole(securableResourceDomainType, securableResourceId, securableResourceGroupRoleId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    getSecurableResourceGroupRole(securableResourceDomainType, securableResourceId, securableResourceGroupRoleId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    getGroupRoles(securableResourceDomainType, securableResourceId, groupRoleId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-securable.resource.js.map