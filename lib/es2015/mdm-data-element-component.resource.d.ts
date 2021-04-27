import { MdmRequestOptions, QueryParameters } from './mdm-common.model';
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
    save(dataModelId: string, dataFlowId: string, dataClassComponentId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    list(dataModelId: string, dataFlowId: string, dataClassComponentId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    remove(dataModelId: string, dataFlowId: string, dataClassComponentId: string, dataElementComponentId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    update(dataModelId: string, dataFlowId: string, dataClassComponentId: string, dataElementComponentId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
    get(dataModelId: string, dataFlowId: string, dataClassComponentId: string, dataElementComponentId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    removeDataElement(dataModelId: string, dataFlowId: string, dataClassComponentId: string, dataElementComponentId: string, type: any, dataElementId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions): any;
    updateDataElement(dataModelId: string, dataFlowId: string, dataClassComponentId: string, dataElementComponentId: string, type: any, dataElementId: string, data: any, restHandlerOptions?: MdmRequestOptions): any;
}
