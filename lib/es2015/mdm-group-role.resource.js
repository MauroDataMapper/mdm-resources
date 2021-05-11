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
export class MdmGroupRoleResource extends MdmResource {
    save(data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/groupRoles`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    list(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/groupRoles`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    applicationGroupRoles(queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/applicationGroupRoles`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    remove(groupRoleId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/groupRoles/${groupRoleId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(groupRoleId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/groupRoles/${groupRoleId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    get(groupRoleId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/admin/groupRoles/${groupRoleId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    listForSecurableResource(securableResourceDomainType, securableResourceId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${securableResourceDomainType}/${securableResourceId}/groupRoles `;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-group-role.resource.js.map