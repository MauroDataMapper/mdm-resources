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
 * Controller: termRelationshipType
 |   POST   | /api/terminologies/${terminologyId}/termRelationshipTypes                                                  | Action: save                                    |
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes                                                  | Action: index                                   |
 |  DELETE  | /api/terminologies/${terminologyId}/termRelationshipTypes/${id}                                            | Action: delete                                  |
 |   PUT    | /api/terminologies/${terminologyId}/termRelationshipTypes/${id}                                            | Action: update                                  |
 |   GET    | /api/terminologies/${terminologyId}/termRelationshipTypes/${id}
 */
export class MdmTermRelationshipTypeResource extends MdmResource {
    save(terminologyId, data) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes`;
        return this.simplePost(url, data);
    }
    list(terminologyId, queryStringParams) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes`;
        return this.simpleGet(url, queryStringParams);
    }
    remove(terminologyId, termRelationshipTypeId, queryStringParams) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}`;
        return this.simpleDelete(url, queryStringParams);
    }
    update(terminologyId, termRelationshipTypeId, data) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}`;
        return this.simplePut(url, data);
    }
    get(terminologyId, termRelationshipTypeId, queryStringParams) {
        const url = `${this.apiEndpoint}/terminologies/${terminologyId}/termRelationshipTypes/${termRelationshipTypeId}`;
        return this.simpleGet(url, queryStringParams);
    }
}
//# sourceMappingURL=mdm-term-replationship-type.resource.js.map