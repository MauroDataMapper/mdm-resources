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
export class MdmDataElementComponentResource extends MdmResource {
    save(dataModelId, dataFlowId, dataClassComponentId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents`;
        return this.simplePost(url, data, restHandlerOptions);
    }
    list(dataModelId, dataFlowId, dataClassComponentId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    remove(dataModelId, dataFlowId, dataClassComponentId, dataElementComponentId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents/${dataElementComponentId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    update(dataModelId, dataFlowId, dataClassComponentId, dataElementComponentId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents/${dataElementComponentId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
    get(dataModelId, dataFlowId, dataClassComponentId, dataElementComponentId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents/${dataElementComponentId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
    removeDataElement(dataModelId, dataFlowId, dataClassComponentId, dataElementComponentId, type, dataElementId, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents/${dataElementComponentId}/${type}/${dataElementId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }
    updateDataElement(dataModelId, dataFlowId, dataClassComponentId, dataElementComponentId, type, dataElementId, data, restHandlerOptions) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/dataElementComponents/${dataElementComponentId}/${type}/${dataElementId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-data-element-component.resource.js.map