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
import { RequestSettings, QueryParameters } from './mdm-common.model';
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
export class MdmDataClassComponentResource extends MdmResource {

    save(dataModelId: string, dataFlowId: string, data: any, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    list(dataModelId: string, dataFlowId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    remove(dataModelId: string, dataFlowId: string, dataClassComponentId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    update(dataModelId: string, dataFlowId: string, dataClassComponentId: string, data: any, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    get(dataModelId: string, dataFlowId: string, dataClassComponentId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeDataClass(dataModelId: string, dataFlowId: string, dataClassComponentId: string, type, dataClassId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/${type}/${dataClassId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateDataClass(dataModelId: string, dataFlowId: string, dataClassComponentId: string, type, dataClassId: string, data: any, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataFlows/${dataFlowId}/dataClassComponents/${dataClassComponentId}/${type}/${dataClassId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }
}
