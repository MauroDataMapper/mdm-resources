import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { MdmDataClassComponentResource } from './mdm-data-class-component.resource';
import { IMdmRestHandler } from './mdm-rest-handler';
import { MdmDataElementComponentResource } from './mdm-data-element-component.resource';
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
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
    importers(queryStringParams?: any, restHandlerOptions?: any): any;
    exporters(queryStringParams?: any, restHandlerOptions?: any): any;
    importDataFlows(importerNamespace: any, importerName: any, importerVersion: any, data: any, restHandlerOptions?: any): any;
    exportDataFlows(exporterNamespace: any, exporterName: any, exporterVersion: any, data: any, restHandlerOptions?: any): any;
    updateDiagramLayout(dataModelId: any, dataFlowId: any, data: any, restHandlerOptions?: any): any;
    importDataFlow(dataModelId: any, dataFlowId: any, importerNamespace: any, importerName: any, importerVersion: any, data: any, restHandlerOptions?: any): any;
    exportDataFlow(dataModelId: any, dataFlowId: any, importerNamespace: any, importerName: any, importerVersion: any, queryStringParams?: any, restHandlerOptions?: any): any;
    save(dataModelId: any, data: any, restHandlerOptions?: any): any;
    list(dataModelId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    remove(dataModelId: any, dataFlowId: any, queryStringParams?: any, restHandlerOptions?: any): any;
    update(dataModelId: any, dataFlowId: any, data: any, restHandlerOptions?: any): any;
    get(dataModelId: any, dataFlowId: any, queryStringParams?: any, restHandlerOptions?: any): any;
}
