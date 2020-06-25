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
import { MdmCatalogueItemResource } from './mdm-catalogue-item.resource';
export class MdmTerminologyResource extends MdmResource {
    constructor(resourcesConfig, restHandler) {
        super(resourcesConfig, restHandler);
        this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
    }
    get(id, action, options = {}) {
        if (!options) {
            options = {};
        }
        if (['metadata', 'annotations', 'classifiers', 'semanticLinks'].indexOf(action) !== -1) {
            return this.catalogueItem.get(id, action, options.contentType);
        }
        return this.getResource('terminologies', id, action, options);
    }
    post(id, action, options) {
        return this.postResource('terminologies', id, action, options);
    }
    put(id, action, options) {
        return this.putResource('terminologies', id, action, options);
    }
    delete(id, action, queryString) {
        return this.deleteResource('terminologies', id, action, queryString);
    }
}
//# sourceMappingURL=mdm-terminology.resource.js.map