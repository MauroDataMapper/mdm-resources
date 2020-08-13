import { MdmResource } from './mdm-resource';
import { IMdmQueryStringParams, IMdmRestHandlerOptions } from './mdm-rest-handler';
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
    removeUserGroupFromSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: any, groupRoleId: any, userGroupId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    addUserGroupToSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: any, groupRoleId: any, userGroupId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    addSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    listSecurableResourceGroupRoles(securableResourceDomainType: any, securableResourceId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: any, securableResourceGroupRoleId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: any, securableResourceGroupRoleId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    getSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: any, securableResourceGroupRoleId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    getGroupRoles(securableResourceDomainType: any, securableResourceId: any, groupRoleId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
