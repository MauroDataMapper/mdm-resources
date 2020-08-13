import { ContainerDomainType, MdmResource } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
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
    listInApplicationGroupRole(applicationGroupRoleId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeFromApplicationGroupRole(applicationGroupRoleId: string, userGroupId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateInApplicationGroupRole(applicationGroupRoleId: string, userGroupId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeUserFromUserGroup(userGroupId: string, catalogueUserId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateUserInUserGroup(userGroupId: string, catalogueUserId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    save(data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    list(queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    remove(userGroupId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    update(userGroupId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    get(userGroupId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    listInSecurableResourceUserGroupRole(securableResourceDomainType: any, securableResourceId: string, groupRoleId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeUserFromContainerUserGroup(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, catalogueUserId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateUserFromContainerUserGroup(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, catalogueUserId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    addToContainer(containerDomainType: string | ContainerDomainType, containerId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    listInContainer(containerDomainType: string | ContainerDomainType, containerId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeFromContainer(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateInContainer(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    getFromContainer(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    addSecurableResourceGroupRole(userGroupId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    securableResourceGroupRoles(userGroupId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeSecurableResourceGroupRole(userGroupId: string, securableResourceGroupRoleId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateSecurableResourceGroupRole(userGroupId: string, securableResourceGroupRoleId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    getSecurableResourceGroupRole(userGroupId: string, securableResourceGroupRoleId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
