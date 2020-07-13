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
 * Controller: admin
 |   GET    | /api/admin/status                                                                                     | Action: status
 |   POST   | /api/admin/editProperties                                                                             | Action: editApiProperties
 |   POST   | /api/admin/rebuildLuceneIndexes                                                                       | Action: rebuildLuceneIndexes
 |   GET    | /api/admin/properties                                                                                 | Action: apiProperties
 * 
 * Controller: mauroDataMapperProvider
 |   GET    | /api/admin/modules                                                                                    | Action: modules
 * 
 * Controller: treeItem
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/deleted                                     | Action: deletedModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/modelSuperseded                             | Action: modelSupersededModels
 |   GET    | /api/admin/tree/${containerDomainType}/${modelDomainType}/documentationSuperseded                     | Action: documentationSupersededModels
 * 
 * Controller: email
 |   GET    | /api/admin/emails                                                                                     | Action: index
 */
export class MdmAdminResource extends MdmResource {
    // get(name, options) {
    //     return this.getResource('admin', name, null, options);
    // }

    // post(action, options) {
    //     return this.postResource('admin', null, action, options);
    // }

    status(options = {}) {
        const url = `${this.apiEndpoint}/admin/status`;
        return this.simpleGet(url, options);
    }

    editProperties(data, options = {}) {
        const url = `${this.apiEndpoint}/admin/editProperties`;
        return this.simplePost(url, data, options);
    }

    rebuildLuceneIndexes(data, options = {}) {
        const url = `${this.apiEndpoint}/admin/rebuildLuceneIndexes`;
        return this.simplePost(url, data, options);
    }

    properties(options = {}) {
        const url = `${this.apiEndpoint}/admin/properties`;
        return this.simpleGet(url, options);
    }

    modules(options = {}) {
        const url = `${this.apiEndpoint}/admin/modules`;
        return this.simpleGet(url, options);
    }

    deletedModels(containerDomainType, modelDomainType, options = {}) {
        const url = `${this.apiEndpoint}/admin/tree/${containerDomainType}/${modelDomainType}/deleted`;
        return this.simpleGet(url, options);
    }

    modelSupersededModels(containerDomainType, modelDomainType, options = {}) {
        const url = `${this.apiEndpoint}/admin/tree/${containerDomainType}/${modelDomainType}/modelSuperseded`;
        return this.simpleGet(url, options);
    }

    documentationSupersededModels(containerDomainType, modelDomainType, options = {}) {
        const url = `${this.apiEndpoint}/admin/tree/${containerDomainType}/${modelDomainType}/documentationSuperseded`;
        return this.simpleGet(url, options);
    }

    emails(options = {}) {
        const url = `${this.apiEndpoint}/admin/emails`;
        return this.simpleGet(url, options);
    }
}
