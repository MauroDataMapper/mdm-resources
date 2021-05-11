import { MdmResource } from './mdm-resource';
/**
 * Controller: dataClassComponent
 |   POST   | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents                                                                                                       | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents                                                                                                       | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${id}                                                                                                 | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${id}                                                                                                 | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${id}                                                                                                 | Action: show
 |  DELETE  | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/${type}/${dataClassId}                                                        | Action: alterDataClasses
 |   PUT    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/${type}/${dataClassId}                                                        | Action: alterDataClasses
 */
export class MdmDataClassComponentResource extends MdmResource {
    save(dataModelId, dataFlowId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    list(dataModelId, dataFlowId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    remove(dataModelId, dataFlowId, dataClassComponentId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(dataModelId, dataFlowId, dataClassComponentId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    get(dataModelId, dataFlowId, dataClassComponentId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeDataClass(dataModelId, dataFlowId, dataClassComponentId, type, dataClassId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/${type}/${dataClassId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateDataClass(dataModelId, dataFlowId, dataClassComponentId, type, dataClassId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/${type}/${dataClassId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-data-class-component.resource.js.map