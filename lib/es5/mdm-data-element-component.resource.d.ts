import { MdmResource } from './mdm-resource';
import { IMdmRestHandlerOptions, IMdmQueryStringParams } from './mdm-rest-handler';
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
    save(dataModelId: any, dataFlowId: any, dataClassComponentId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    list(dataModelId: any, dataFlowId: any, dataClassComponentId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    remove(dataModelId: any, dataFlowId: any, dataClassComponentId: any, dataElementComponentId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    update(dataModelId: any, dataFlowId: any, dataClassComponentId: any, dataElementComponentId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    get(dataModelId: any, dataFlowId: any, dataClassComponentId: any, dataElementComponentId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    removeDataElement(dataModelId: any, dataFlowId: any, dataClassComponentId: any, dataElementComponentId: any, type: any, dataElementId: any, queryStringParams?: IMdmQueryStringParams, restHandlerOptions?: IMdmRestHandlerOptions): any;
    updateDataElement(dataModelId: any, dataFlowId: any, dataClassComponentId: any, dataElementComponentId: any, type: any, dataElementId: any, data: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
}
