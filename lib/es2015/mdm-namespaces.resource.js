import { MdmResource } from './mdm-resource';
/**
 * Controller: metadata
 |   GET    | /api/metadata/namespaces/${id}?                                                                       | Action: namespaces
 */
export class MdmNamespacesResource extends MdmResource {
    get(metadataId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/metadata/namespaces${metadataId ? `/${metadataId}` : ''}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-namespaces.resource.js.map