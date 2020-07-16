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
export declare class MdmUserGroupsResource extends MdmResource {
    listInApplicationGroupRole(applicationGroupRoleId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeFromApplicationGroupRole(applicationGroupRoleId: any, userGroupId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    updateInApplicationGroupRole(applicationGroupRoleId: any, userGroupId: any, data: any, restHandlerOptions?: any): any;
    removeUserFromUserGroup(userGroupId: any, catalogueUserId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    updateUserInUserGroup(userGroupId: any, catalogueUserId: any, data: any, restHandlerOptions?: any): any;
    save(data: any, restHandlerOptions?: any): any;
    list(queryStringParams?: any, restHandlerOptions?: any): any;
    remove(userGroupId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    update(userGroupId: any, data: any, restHandlerOptions?: any): any;
    get(userGroupId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    listInSecurableResourceUserGroupRole(securableResourceDomainType: any, securableResourceId: any, groupRoleId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeUserFromContainerUserGroup(containerDomainType: any, containerId: any, userGroupId: any, catalogueUserId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    updateUserFromContainerUserGroup(containerDomainType: any, containerId: any, userGroupId: any, catalogueUserId: any, data: any, restHandlerOptions?: any): any;
    addToContainer(containerDomainType: any, containerId: any, data: any, restHandlerOptions?: any): any;
    listInContainer(containerDomainType: any, containerId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeFromContainer(containerDomainType: any, containerId: any, userGroupId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    updateInContainer(containerDomainType: any, containerId: any, userGroupId: any, data: any, restHandlerOptions?: any): any;
    getFromContainer(containerDomainType: any, containerId: any, userGroupId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    addSecurableResourceGroupRole(userGroupId: any, data: any, restHandlerOptions?: any): any;
    securableResourceGroupRoles(userGroupId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeSecurableResourceGroupRole(userGroupId: any, securableResourceGroupRoleId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    updateSecurableResourceGroupRole(userGroupId: any, securableResourceGroupRoleId: any, data: any, restHandlerOptions?: any): any;
    getSecurableResourceGroupRole(userGroupId: any, securableResourceGroupRoleId: any, queryStringParams?: any, restHandlerOptions?: any): any;
}
