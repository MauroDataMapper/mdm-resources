import { RequestOptions, QueryParameters } from 'mdm-common.model';
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
    save(dataModelId: string, dataFlowId: string, data: any, restHandlerOptions?: RequestOptions): any;
    list(dataModelId: string, dataFlowId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    remove(dataModelId: string, dataFlowId: string, dataClassComponentId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    update(dataModelId: string, dataFlowId: string, dataClassComponentId: string, data: any, restHandlerOptions?: RequestOptions): any;
    get(dataModelId: string, dataFlowId: string, dataClassComponentId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    removeDataClass(dataModelId: string, dataFlowId: string, dataClassComponentId: string, type: any, dataClassId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestOptions): any;
    updateDataClass(dataModelId: string, dataFlowId: string, dataClassComponentId: string, type: any, dataClassId: string, data: any, restHandlerOptions?: RequestOptions): any;
}
