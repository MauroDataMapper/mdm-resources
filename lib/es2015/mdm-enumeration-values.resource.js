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
export class MdmEnumerationValuesResource extends MdmResource {
    delete(dataModelId, dataTypeId, id) {
        return this.deleteResource(this.makeUrl(dataModelId, dataTypeId), id);
    }
    put(dataModelId, dataTypeId, id, action, options) {
        return this.putResource(this.makeUrl(dataModelId, dataTypeId), id, action, options);
    }
    post(dataModelId, dataTypeId, options) {
        return this.postResource(this.makeUrl(dataModelId, dataTypeId), null, null, options);
    }
    makeUrl(dataModelId, dataTypeId) {
        return `dataModels/${dataModelId}/enumerationTypes/${dataTypeId}/enumerationValues/`;
    }
}
//# sourceMappingURL=mdm-enumeration-values.resource.js.map