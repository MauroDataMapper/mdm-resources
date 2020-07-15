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
    //   delete(dataModelId, dataTypeId, id) {
    //     return this.deleteResource(this.makeUrl(dataModelId, dataTypeId), id);
    //   }

    //   put(dataModelId, dataTypeId, id, action, options) {
    //     return this.putResource(this.makeUrl(dataModelId, dataTypeId), id, action, options);
    //   }

    //   post(dataModelId, dataTypeId, options) {
    //     return this.postResource(this.makeUrl(dataModelId, dataTypeId), null, null, options);
    //   }

    //   makeUrl(dataModelId, dataTypeId) {
    //     return `dataModels/${dataModelId}/enumerationTypes/${dataTypeId}/enumerationValues/`;
    //   }

    saveToEnumeratedType(dataModelId, enumerationTypeId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues`;
        return this.simplePost(url, data);
    }

    listForEnumeratedType(dataModelId, enumerationTypeId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues`;
        return this.simpleGet(url, queryStringParams);
    }

    saveToDataType(dataModelId, dataTypeId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues`;
        return this.simplePost(url, data);
    }

    listForDataType(dataModelId, dataTypeId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues`;
        return this.simpleGet(url, queryStringParams);
    }

    removeFromEnumeratedType(dataModelId, enumerationTypeId, enumerationValueId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    updateInEnumeratedType(dataModelId, enumerationTypeId, enumerationValueId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simplePut(url, data);
    }

    getFromEnumeratedType(dataModelId, enumerationTypeId, enumerationValueId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/enumerationTypes/${enumerationTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simpleGet(url, queryStringParams);
    }

    removeFromDataType(dataModelId, dataTypeId, enumerationValueId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simpleDelete(url, queryStringParams);
    }

    updateInDataType(dataModelId, dataTypeId, enumerationValueId, data) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simplePut(url, data);
    }

    getFromDataType(dataModelId, dataTypeId, enumerationValueId, queryStringParams?) {
        const url = `${this.apiEndpoint}/dataModels/${dataModelId}/dataTypes/${dataTypeId}/enumerationValues/${enumerationValueId}`;
        return this.simpleGet(url, queryStringParams);
    }
}
