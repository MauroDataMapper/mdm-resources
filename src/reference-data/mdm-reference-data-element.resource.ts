/*
Copyright 2020-2023 University of Oxford and NHS England

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
import { RequestSettings, QueryParameters } from '../mdm-common.model';
import { MdmResource } from '../mdm-resource';

/**
 * Controller: referenceDataModel
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements                                                                        | Action: index
 |   GET    | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: get
 |   POST   | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements                                                                        | Action: save
 |   PUT    | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: update
 |   DELETE | /api/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}                                                 | Action: delete
 */
export class MdmReferenceDataElementResource extends MdmResource {
  list(
    referenceDataModelId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataElements`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  get(
    referenceDataModelId: string,
    referenceDataElementId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}`;
    return this.simpleGet(url, queryStringParams, restHandlerOptions);
  }

  save(
    referenceDataModelId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataElements`;
    return this.simplePost(url, data, restHandlerOptions);
  }

  update(
    referenceDataModelId: string,
    referenceDataElementId: string,
    data: any,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}`;
    return this.simplePut(url, data, restHandlerOptions);
  }

  remove(
    referenceDataModelId: string,
    referenceDataElementId: string,
    queryStringParams?: QueryParameters,
    restHandlerOptions?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/referenceDataModels/${referenceDataModelId}/referenceDataElements/${referenceDataElementId}`;
    return this.simpleDelete(url, queryStringParams, restHandlerOptions);
  }
}
