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
export class MdmDataTypeResource extends MdmResource {
    constructor(resourcesConfig, restHandler) {
        super(resourcesConfig, restHandler);
        this.catalogueItem = new MdmCatalogueItemResource(resourcesConfig, restHandler);
    }
    get(dataModelId, id, action, options) {
        if (!options) {
            options = {};
        }
        if (['metadata', 'annotations', 'classifiers', 'semanticLinks'].includes(action)) {
            return this.catalogueItem.get(id, action, options.contentType);
        }
        return this.getResource(this.makeUrl(dataModelId), id, action, options);
    }
    post(dataModelId, id, action, options) {
        return this.postResource(this.makeUrl(dataModelId), id, action, options);
    }
    put(dataModelId, id, action, options) {
        return this.putResource(this.makeUrl(dataModelId), id, action, options);
    }
    delete(dataModelId, id) {
        return this.deleteResource(this.makeUrl(dataModelId), id);
    }
    makeUrl(dataModelId) {
        return `dataModels/${dataModelId}/dataTypes/`;
    }
}
//# sourceMappingURL=mdm-data-type.resource.js.map