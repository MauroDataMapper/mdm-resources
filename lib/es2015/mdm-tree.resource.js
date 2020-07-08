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
export class MdmTreeResource extends MdmResource {
    get(id, action, options) {
        return this.getResource('tree/folders', id, action, null);
    }
    getDomainItem(id, domainType, options = {}) {
        return this.simpleGet(`${this.apiEndpoint}/tree/folders/${domainType}/${id}`, options);
    }
}
//# sourceMappingURL=mdm-tree.resource.js.map