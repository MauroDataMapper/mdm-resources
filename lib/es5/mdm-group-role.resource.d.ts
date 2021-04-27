import { MdmRequestOptions, QueryParameters } from './mdm-common.model';
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
    save(data: any, restHandlerOptions?: MdmRequestOptions): any;
    list(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    applicationGroupRoles(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    remove(groupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    update(groupRoleId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    get(groupRoleId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    listForSecurableResource(securableResourceDomainType: any, securableResourceId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
}
