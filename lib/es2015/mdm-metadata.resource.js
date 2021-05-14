import { MdmResource } from './mdm-resource';
/**
 * Controller: metadata
 |   GET    | /api/metadata/namespaces/${id}?                                                                       | Action: namespaces
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: delete
 |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: update
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: show
 */
export class MdmMetadataResource extends MdmResource {
    namespaces(metadataId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/metadata/namespaces${metadataId ? `/${metadataId}` : ''}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    save(catalogueItemDomainType, catalogueItemId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    list(catalogueItemDomainType, catalogueItemId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    remove(catalogueItemDomainType, catalogueItemId, metadataId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(catalogueItemDomainType, catalogueItemId, metadataId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    get(catalogueItemDomainType, catalogueItemId, metadataId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-metadata.resource.js.map