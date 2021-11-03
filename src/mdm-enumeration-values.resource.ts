/*
Copyright 2020-2021 University of Oxford
and Health and Social Care Information Centre, also known as NHS Digital

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
 * Controller: enumerationValue
 |   POST   | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues                                               | Action: save
 |   GET    | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues                                               | Action: index
 |   POST   | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues                                                             | Action: save
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues                                                             | Action: index
 |  DELETE  | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${id}                                         | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${id}                                         | Action: update
 |   GET    | /api/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${id}                                         | Action: show
 |  DELETE  | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${id}                                                       | Action: delete
 |   PUT    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${id}                                                       | Action: update
 |   GET    | /api/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${id}                                                       | Action: show
 */
export class MdmEnumerationValuesResource extends MdmResource {

    saveToEnumeratedType(dataModelId: string, enumerationTypeId: string, data: any, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    listForEnumeratedType(dataModelId: string, enumerationTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    saveToDataType(dataModelId: string, dataTypeId: string, data: any, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues`;
        return this.simplePost(url, data, restHandlerOptions);
    }

    listForDataType(dataModelId: string, dataTypeId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeFromEnumeratedType(dataModelId: string, enumerationTypeId: string, enumerationValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateInEnumeratedType(dataModelId: string, enumerationTypeId: string, enumerationValueId: string, data: any, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    getFromEnumeratedType(dataModelId: string, enumerationTypeId: string, enumerationValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }

    removeFromDataType(dataModelId: string, dataTypeId: string, enumerationValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    }

    updateInDataType(dataModelId: string, dataTypeId: string, enumerationValueId: string, data: any, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simplePut(url, data, restHandlerOptions);
    }

    getFromDataType(dataModelId: string, dataTypeId: string, enumerationValueId: string, queryStringParams?: QueryParameters, restHandlerOptions?: RequestSettings) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
