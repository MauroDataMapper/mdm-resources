import { RequestSettings, QueryParameters, ContainerDomainType } from './mdm-common.model';
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
    listInApplicationGroupRole(applicationGroupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeFromApplicationGroupRole(applicationGroupRoleId: string, userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateInApplicationGroupRole(applicationGroupRoleId: string, userGroupId: string, data: any, restHandlerOptions?: RequestSettings): any;
    removeUserFromUserGroup(userGroupId: string, catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateUserInUserGroup(userGroupId: string, catalogueUserId: string, data: any, restHandlerOptions?: RequestSettings): any;
    save(data: any, restHandlerOptions?: RequestSettings): any;
    list(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    remove(userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    update(userGroupId: string, data: any, restHandlerOptions?: RequestSettings): any;
    get(userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    listInSecurableResourceUserGroupRole(securableResourceDomainType: any, securableResourceId: string, groupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeUserFromContainerUserGroup(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateUserFromContainerUserGroup(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, catalogueUserId: string, data: any, restHandlerOptions?: RequestSettings): any;
    addToContainer(containerDomainType: string | ContainerDomainType, containerId: string, data: any, restHandlerOptions?: RequestSettings): any;
    listInContainer(containerDomainType: string | ContainerDomainType, containerId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeFromContainer(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateInContainer(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, data: any, restHandlerOptions?: RequestSettings): any;
    getFromContainer(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    addSecurableResourceGroupRole(userGroupId: string, data: any, restHandlerOptions?: RequestSettings): any;
    securableResourceGroupRoles(userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeSecurableResourceGroupRole(userGroupId: string, securableResourceGroupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateSecurableResourceGroupRole(userGroupId: string, securableResourceGroupRoleId: string, data: any, restHandlerOptions?: RequestSettings): any;
    getSecurableResourceGroupRole(userGroupId: string, securableResourceGroupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
}
