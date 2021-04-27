import { MdmRequestOptions, QueryParameters, ContainerDomainType } from './mdm-common.model';
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
    listInApplicationGroupRole(applicationGroupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeFromApplicationGroupRole(applicationGroupRoleId: string, userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateInApplicationGroupRole(applicationGroupRoleId: string, userGroupId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    removeUserFromUserGroup(userGroupId: string, catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateUserInUserGroup(userGroupId: string, catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    save(data: any, restHandlerOptions?: MdmRequestOptions): any;
    list(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    remove(userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    update(userGroupId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    get(userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    listInSecurableResourceUserGroupRole(securableResourceDomainType: any, securableResourceId: string, groupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeUserFromContainerUserGroup(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateUserFromContainerUserGroup(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, catalogueUserId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    addToContainer(containerDomainType: string | ContainerDomainType, containerId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    listInContainer(containerDomainType: string | ContainerDomainType, containerId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeFromContainer(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateInContainer(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    getFromContainer(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    addSecurableResourceGroupRole(userGroupId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    securableResourceGroupRoles(userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeSecurableResourceGroupRole(userGroupId: string, securableResourceGroupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateSecurableResourceGroupRole(userGroupId: string, securableResourceGroupRoleId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    getSecurableResourceGroupRole(userGroupId: string, securableResourceGroupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
}
