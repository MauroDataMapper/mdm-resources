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
export declare class MdmDataClassComponentResource extends MdmResource {
    save(dataModelId: any, dataFlowId: any, data: any, restHandlerOptions?: any): any;
    list(dataModelId: any, dataFlowId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    remove(dataModelId: any, dataFlowId: any, dataClassComponentId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    update(dataModelId: any, dataFlowId: any, dataClassComponentId: any, data: any, restHandlerOptions?: any): any;
    get(dataModelId: any, dataFlowId: any, dataClassComponentId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    removeDataClass(dataModelId: any, dataFlowId: any, dataClassComponentId: any, type: any, dataClassId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    updateDataClass(dataModelId: any, dataFlowId: any, dataClassComponentId: any, type: any, dataClassId: any, data: any, restHandlerOptions?: any): any;
}
