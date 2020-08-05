import { MdmResource } from './mdm-resource';
/**
 * Controller: dataElementComponent
 |   POST   | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents                                                         | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents                                                         | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents/${id}                                                   | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents/${id}                                                   | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents/${id}                                                   | Action: show
 |  DELETE  | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents/${dataElementComponentId}/${type}/${dataElementId}      | Action: alterDataElements
 |   PUT    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents/${dataElementComponentId}/${type}/${dataElementId}      | Action: alterDataElements
 */
export declare class MdmDataElementComponentResource extends MdmResource {
    save(dataModelId: any, dataFlowId: any, dataClassComponentId: any, data: any, restHandlerOptions?: any): any;
    list(dataModelId: any, dataFlowId: any, dataClassComponentId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    remove(dataModelId: any, dataFlowId: any, dataClassComponentId: any, dataElementComponentId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    update(dataModelId: any, dataFlowId: any, dataClassComponentId: any, dataElementComponentId: any, data: any, restHandlerOptions?: any): any;
    get(dataModelId: any, dataFlowId: any, dataClassComponentId: any, dataElementComponentId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeDataElement(dataModelId: any, dataFlowId: any, dataClassComponentId: any, dataElementComponentId: any, type: any, dataElementId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    updateDataElement(dataModelId: any, dataFlowId: any, dataClassComponentId: any, dataElementComponentId: any, type: any, dataElementId: any, data: any, restHandlerOptions?: any): any;
}
