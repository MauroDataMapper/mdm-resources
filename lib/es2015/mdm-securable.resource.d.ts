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
export declare class MdmSecurableResource extends MdmResource {
    removeUserGroupFromSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: any, groupRoleId: any, userGroupId: any, queryStringParams?: any): any;
    addUserGroupToSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: any, groupRoleId: any, userGroupId: any, data: any): any;
    addsScurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: any, data: any): any;
    listSecurableResourceGroupRoles(securableResourceDomainType: any, securableResourceId: any, queryStringParams?: any): any;
    removeSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: any, securableResourceGroupRoleId: any, queryStringParams?: any): any;
    updateSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: any, securableResourceGroupRoleId: any, data: any): any;
    getSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: any, securableResourceGroupRoleId: any, queryStringParams?: any): any;
    getGroupRoles(securableResourceDomainType: any, securableResourceId: any, groupRoleId: any, queryStringParams?: any): any;
}
