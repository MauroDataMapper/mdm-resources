import { MdmResource } from './mdm-resource';
/**
 * Controller: edit
 |   GET    | /api/${resourceDomainType}/${resourceId}/edits                                                        | Action: index
 */
export class MdmEditResource extends MdmResource {
    status(resourceDomainType, resourceId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${resourceDomainType}/${resourceId}/edits`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-edit.resource.js.map