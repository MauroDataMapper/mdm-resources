import { MdmResource } from './mdm-resource';
/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes                                                                        | Action: index
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}                                                 | Action: get
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes                                                                        | Action: save
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}                                                 | Action: update
 |   DELETE | /api/referenceDataModels/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}                                                 | Action: delete
 */
export class MdmReferenceDataTypeResource extends MdmResource {
    list(referenceDataModelId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataTypes`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    get(referenceDataModelId, referenceDataTypeId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    save(referenceDataModelId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataTypes`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    update(referenceDataModelId, referenceDataTypeId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    remove(referenceDataModelId, referenceDataTypeId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataTypes/${referenceDataTypeId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-reference-data-type.resource.js.map