/*
Copyright 2020 University of Oxford

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
*/
import { MdmResource } from './mdm-resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { MdmDataClassComponentResource } from './mdm-data-class-component.resource';
import { IMdmRestHandler, DefaultMdmRestHandler } from './mdm-rest-handler';
import { MdmDataElementComponentResource } from './mdm-data-element-component.resource';
import { MdmRequestOptions, QueryParameters } from './mdm-common.model';

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
export class MdmDataFlowResource extends MdmResource {
    dataClassComponents: MdmDataClassComponentResource;
    dataElementComponents: MdmDataElementComponentResource;

    constructor(resourcesConfig = new MdmResourcesConfiguration(), restHandler: IMdmRestHandler = new DefaultMdmRestHandler()) {
        super(resourcesConfig, restHandler);
        this.dataClassComponents = new MdmDataClassComponentResource(resourcesConfig, restHandler);
        this.dataElementComponents = new MdmDataElementComponentResource(resourcesConfig, restHandler);
    }

    importers(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/dataFlows/providers/importers`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    exporters(queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/dataFlows/providers/exporters`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    importDataFlows(importerNamespace, importerName, importerVersion, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/dataFlows/import/${importerNamespace}/${importerName}/${importerVersion}`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    exportDataFlows(exporterNamespace, exporterName, exporterVersion, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/dataFlows/export/${exporterNamespace}/${exporterName}/${exporterVersion}`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    updateDiagramLayout(dataModelId: string, dataFlowId: string, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/diagramLayout`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    importDataFlow(dataModelId: string, dataFlowId: string, importerNamespace, importerName, importerVersion, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/import/${importerNamespace}/${importerName}/${importerVersion}`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    exportDataFlow(dataModelId: string, dataFlowId: string, importerNamespace, importerName, importerVersion, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/import/${importerNamespace}/${importerName}/${importerVersion}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    save(dataModelId: string, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    list(dataModelId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    remove(dataModelId: string, dataFlowId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    update(dataModelId: string, dataFlowId: string, data: any, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    get(dataModelId: string, dataFlowId: string, queryStringParams?: QueryParameters, restHandlerOptions?: MdmRequestOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
