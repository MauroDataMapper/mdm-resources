import { MdmResource } from './mdm-resource';
import { IMdmRestHandlerOptions, IMdmQueryStringParams } from './mdm-rest-handler';
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
    save(dataModelId: string, dataFlowId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    list(dataModelId: string, dataFlowId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    remove(dataModelId: string, dataFlowId: string, dataClassComponentId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    update(dataModelId: string, dataFlowId: string, dataClassComponentId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    get(dataModelId: string, dataFlowId: string, dataClassComponentId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeDataClass(dataModelId: string, dataFlowId: string, dataClassComponentId: string, type: any, dataClassId: string, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateDataClass(dataModelId: string, dataFlowId: string, dataClassComponentId: string, type: any, dataClassId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
