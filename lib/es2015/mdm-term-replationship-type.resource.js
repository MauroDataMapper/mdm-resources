import { MdmResource } from './mdm-resource';
/**
 * Controller: termRelationshipType
 |   POST   | /api/terminologies/${terminologyId}/termRelationshipTypes                                                  | Action: save                                    |
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes                                                  | Action: index                                   |
 |  DELETE  | /api/terminologies/${terminologyId}/termRelationshipTypes/${id}                                            | Action: delete                                  |
 |   PUT    | /api/terminologies/${terminologyId}/termRelationshipTypes/${id}                                            | Action: update                                  |
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes/${id}
 */
export class MdmTermRelationshipTypeResource extends MdmResource {
    save(terminologyId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    list(terminologyId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    remove(terminologyId, termRelationshipTypeId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(terminologyId, termRelationshipTypeId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    get(terminologyId, termRelationshipTypeId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-term-replationship-type.resource.js.map