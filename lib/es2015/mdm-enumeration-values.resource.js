import { MdmResource } from './mdm-resource';
/**
 * Controller: enumerationValue
 |   POST   | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues                                               | Action: save
 |   GET    | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues                                               | Action: index
 |   POST   | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues                                                             | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues                                                             | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${id}                                         | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${id}                                         | Action: update
 |   GET    | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${id}                                         | Action: show
 |  DELETE  | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${id}                                                       | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${id}                                                       | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${id}                                                       | Action: show
 */
export class MdmEnumerationValuesResource extends MdmResource {
    saveToEnumeratedType(dataModelId, enumerationTypeId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    listForEnumeratedType(dataModelId, enumerationTypeId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    saveToDataType(dataModelId, dataTypeId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    listForDataType(dataModelId, dataTypeId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeFromEnumeratedType(dataModelId, enumerationTypeId, enumerationValueId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateInEnumeratedType(dataModelId, enumerationTypeId, enumerationValueId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    getFromEnumeratedType(dataModelId, enumerationTypeId, enumerationValueId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeFromDataType(dataModelId, dataTypeId, enumerationValueId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateInDataType(dataModelId, dataTypeId, enumerationValueId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    getFromDataType(dataModelId, dataTypeId, enumerationValueId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-enumeration-values.resource.js.map