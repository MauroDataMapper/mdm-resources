import { RequestSettings, QueryParameters } from './mdm-common.model';
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
    removeUserGroupFromSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: string, groupRoleId: string, userGroupId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    addUserGroupToSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: string, groupRoleId: string, userGroupId: string, data: any, restHandlerOptions?: RequestSettings): any;
    addSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: string, data: any, restHandlerOptions?: RequestSettings): any;
    listSecurableResourceGroupRoles(securableResourceDomainType: any, securableResourceId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    removeSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: string, securableResourceGroupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    updateSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: string, securableResourceGroupRoleId: string, data: any, restHandlerOptions?: RequestSettings): any;
    getSecurableResourceGroupRole(securableResourceDomainType: any, securableResourceId: string, securableResourceGroupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    getGroupRoles(securableResourceDomainType: any, securableResourceId: string, groupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
}
