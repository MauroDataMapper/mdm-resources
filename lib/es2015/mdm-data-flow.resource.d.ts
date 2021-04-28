import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { MdmDataClassComponentResource } from './mdm-data-class-component.resource';
import { MdmRestHandler } from './mdm-rest-handler';
import { MdmDataElementComponentResource } from './mdm-data-element-component.resource';
import { RequestSettings, QueryParameters } from './mdm-common.model';
/**
 * Controller: dataFlow
 |   GET    | /api/dataFlows/providers/importers                                                                                                                                               | Action: importerProviders
 |   GET    | /api/dataFlows/providers/exporters                                                                                                                                               | Action: exporterProviders
 |   POST   | /api/dataFlows/import/${importerNamespace}/${importerName}/${importerVersion}                                                                                                    | Action: importDataFlows
 |   POST   | /api/dataFlows/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                                                                    | Action: exportDataFlows
 |   PUT    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/diagramLayout                                                                                                             | Action: updateDiagramLayout
 |   POST   | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/import/${importerNamespace}/${importerName}/${importerVersion}                                                            | Action: importDataFlow
 |   GET    | /api/dataModels/${dataModelId}/dataFlows/${dataFlowId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                                                            | Action: exportDataFlow
 |   POST   | /api/dataModels/${dataModelId}/dataFlows                                                                                                                                         | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataFlows                                                                                                                                         | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/dataFlows/${id}                                                                                                                                   | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataFlows/${id}                                                                                                                                   | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataFlows/${id}                                                                                                                                   | Action: show
 */
export declare class MdmDataFlowResource extends MdmResource {
    dataClassComponents: MdmDataClassComponentResource;
    dataElementComponents: MdmDataElementComponentResource;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: MdmRestHandler);
    importers(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    exporters(queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    importDataFlows(importerNamespace: any, importerName: any, importerVersion: any, data: any, restHandlerOptions?: RequestSettings): any;
    exportDataFlows(exporterNamespace: any, exporterName: any, exporterVersion: any, data: any, restHandlerOptions?: RequestSettings): any;
    updateDiagramLayout(dataModelId: string, dataFlowId: string, data: any, restHandlerOptions?: RequestSettings): any;
    importDataFlow(dataModelId: string, dataFlowId: string, importerNamespace: any, importerName: any, importerVersion: any, data: any, restHandlerOptions?: RequestSettings): any;
    exportDataFlow(dataModelId: string, dataFlowId: string, importerNamespace: any, importerName: any, importerVersion: any, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    save(dataModelId: string, data: any, restHandlerOptions?: RequestSettings): any;
    list(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    remove(dataModelId: string, dataFlowId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
    update(dataModelId: string, dataFlowId: string, data: any, restHandlerOptions?: RequestSettings): any;
    get(dataModelId: string, dataFlowId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings): any;
}
