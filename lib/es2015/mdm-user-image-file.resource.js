import { MdmResource } from './mdm-resource';
/**
 * Controller: userImageFile
 |  DELETE  | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: delete
 |   PUT    | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: update
 |   GET    | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: show
 |   POST   | /api/catalogueUsers/${catalogueUserId}/image                                                                                                                                     | Action: save
 |   GET    | /api/userImageFiles/${id}
 */
export class MdmUserImageFileResource extends MdmResource {
    remove(catalogueUserId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/image`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(catalogueUserId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/image`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    get(catalogueUserId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/image`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    save(catalogueUserId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/catalogueUsers/${catalogueUserId}/image`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    getUserImageFile(userId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/userImageFiles/${userId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-user-image-file.resource.js.map