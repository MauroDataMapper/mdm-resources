import { RequestOptions, QueryParameters, ContainerDomainType } from 'mdm-common.model';
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
    listInApplicationGroupRole(applicationGroupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    removeFromApplicationGroupRole(applicationGroupRoleId: string, userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateInApplicationGroupRole(applicationGroupRoleId: string, userGroupId: string, data: any, restHandlerOptions?: RequestOptions): any;
    removeUserFromUserGroup(userGroupId: string, catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateUserInUserGroup(userGroupId: string, catalogueUserId: string, data: any, restHandlerOptions?: RequestOptions): any;
    save(data: any, restHandlerOptions?: RequestOptions): any;
    list(queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    remove(userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    update(userGroupId: string, data: any, restHandlerOptions?: RequestOptions): any;
    get(userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    listInSecurableResourceUserGroupRole(securableResourceDomainType: any, securableResourceId: string, groupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    removeUserFromContainerUserGroup(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, catalogueUserId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateUserFromContainerUserGroup(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, catalogueUserId: string, data: any, restHandlerOptions?: RequestOptions): any;
    addToContainer(containerDomainType: string | ContainerDomainType, containerId: string, data: any, restHandlerOptions?: RequestOptions): any;
    listInContainer(containerDomainType: string | ContainerDomainType, containerId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    removeFromContainer(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateInContainer(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, data: any, restHandlerOptions?: RequestOptions): any;
    getFromContainer(containerDomainType: string | ContainerDomainType, containerId: string, userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    addSecurableResourceGroupRole(userGroupId: string, data: any, restHandlerOptions?: RequestOptions): any;
    securableResourceGroupRoles(userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    removeSecurableResourceGroupRole(userGroupId: string, securableResourceGroupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateSecurableResourceGroupRole(userGroupId: string, securableResourceGroupRoleId: string, data: any, restHandlerOptions?: RequestOptions): any;
    getSecurableResourceGroupRole(userGroupId: string, securableResourceGroupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
}
