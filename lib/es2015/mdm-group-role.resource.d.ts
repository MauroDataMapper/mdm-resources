import { MdmResource } from './mdm-resource';
/**
 * Controller: groupRole
 |   POST   | /api/admin/groupRoles                                                                                               | Action: save
 |   GET    | /api/admin/groupRoles                                                                                               | Action: index
 |   GET    | /api/admin/applicationGroupRoles                                                                                    | Action: listApplicationGroupRoles
 |  DELETE  | /api/admin/groupRoles/${id}                                                                                         | Action: delete
 |   PUT    | /api/admin/groupRoles/${id}                                                                                         | Action: update
 |   GET    | /api/admin/groupRoles/${id}                                                                                         | Action: show
 |   GET    | /api/${securableResourceDomainType}/${securableResourceId}/groupRoles                                               | Action: listGroupRolesAvailableToSecurableResource
 */
export declare class MdmGroupRoleResource extends MdmResource {
    save(data: any): any;
    list(queryStringParams?: any): any;
    applicationGroupRoles(queryStringParams?: any): any;
    remove(groupRoleId: any, queryStringParams?: any): any;
    update(groupRoleId: any, data: any): any;
    get(groupRoleId: any, queryStringParams?: any): any;
    listForSecurableResource(securableResourceDomainType: any, securableResourceId: any, queryStringParams?: any): any;
}
