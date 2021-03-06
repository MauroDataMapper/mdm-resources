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
export class MdmUserGroupsResource extends MdmResource {
    listInApplicationGroupRole(applicationGroupRoleId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/applicationGroupRoles/${applicationGroupRoleId}/userGroups`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeFromApplicationGroupRole(applicationGroupRoleId, userGroupId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/applicationGroupRoles/${applicationGroupRoleId}/userGroups/${userGroupId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateInApplicationGroupRole(applicationGroupRoleId, userGroupId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/applicationGroupRoles/${applicationGroupRoleId}/userGroups/${userGroupId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    removeUserFromUserGroup(userGroupId, catalogueUserId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateUserInUserGroup(userGroupId, catalogueUserId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    save(data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    list(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    remove(userGroupId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(userGroupId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    get(userGroupId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    listInSecurableResourceUserGroupRole(securableResourceDomainType, securableResourceId, groupRoleId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/groupRoles/${groupRoleId}/userGroups`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeUserFromContainerUserGroup(containerDomainType, containerId, userGroupId, catalogueUserId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateUserFromContainerUserGroup(containerDomainType, containerId, userGroupId, catalogueUserId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}/catalogueUsers/${catalogueUserId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    addToContainer(containerDomainType, containerId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    listInContainer(containerDomainType, containerId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeFromContainer(containerDomainType, containerId, userGroupId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateInContainer(containerDomainType, containerId, userGroupId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    getFromContainer(containerDomainType, containerId, userGroupId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${containerDomainType}/${containerId}/userGroups/${userGroupId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    addSecurableResourceGroupRole(userGroupId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/securableResourceGroupRoles`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    securableResourceGroupRoles(userGroupId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/securableResourceGroupRoles`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeSecurableResourceGroupRole(userGroupId, securableResourceGroupRoleId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateSecurableResourceGroupRole(userGroupId, securableResourceGroupRoleId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    getSecurableResourceGroupRole(userGroupId, securableResourceGroupRoleId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/userGroups/${userGroupId}/securableResourceGroupRoles/${securableResourceGroupRoleId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-user-groups.resource.js.map