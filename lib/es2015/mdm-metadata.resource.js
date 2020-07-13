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
 * Controller: metadata
 |   GET    | /api/metadata/namespaces/${id}?                                                                       | Action: namespaces
 |   POST   | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: save
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata                                           | Action: index
 |  DELETE  | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: delete
 |   PUT    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: update
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/metadata/${id}                                     | Action: show
 */
export class MdmMetadataResource extends MdmResource {
    namespaces(metadataId, options = {}) {
        const url = `${this.apiEndpoint}/metadata/namespaces${metadataId ? `/${metadataId}` : ''}`;
        return this.simpleGet(url, options);
    }
    save(catalogueItemDomainType, catalogueItemId, data, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata`;
        return this.simplePost(url, data, options);
    }
    list(catalogueItemDomainType, catalogueItemId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata`;
        return this.simpleGet(url, options);
    }
    remove(catalogueItemDomainType, catalogueItemId, metadataId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
        return this.simpleDelete(url, options);
    }
    update(catalogueItemDomainType, catalogueItemId, metadataId, data, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
        return this.simplePut(url, data, options);
    }
    get(catalogueItemDomainType, catalogueItemId, metadataId, options = {}) {
        const url = `${this.apiEndpoint}/${catalogueItemDomainType}/${catalogueItemId}/metadata/${metadataId}`;
        return this.simpleGet(url, options);
    }
}
//# sourceMappingURL=mdm-metadata.resource.js.map