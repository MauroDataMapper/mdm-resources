import { MdmResource } from './mdm-resource';
/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements                                                                        | Action: index
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: get
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements                                                                        | Action: save
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: update
 |   DELETE | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: delete
 */
export class MdmReferenceDataElementResource extends MdmResource {
    list(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataElements`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    get(referenceDataModelId, referenceDataElementId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    save(referenceDataModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataElements`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    update(referenceDataModelId, referenceDataElementId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    remove(referenceDataModelId, referenceDataElementId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-reference-data-element.resource.js.map