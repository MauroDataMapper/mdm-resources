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

export class MdmFacetsResource extends MdmResource {
//   get(id, action, options) {
//     return this.getResource('facets', id, action, options);
//   }

//   post(id, action, options) {
//     return this.postResource('facets', id, action, options);
//   }

//   put(id, action, childId, options) {
//     if (!options) {
//       options = {};
//     }
//     id = !id ? '' : id;
//     action = !action ? '' : action + '/';
//     childId = !childId ? '' : childId;
//     return this.putResource('facets', id, action + childId, options);
//   }

//   delete(id, action, childId) {
//     id = !id ? '' : id;
//     action = !action ? '' : action + '/';
//     childId = !childId ? '' : childId;
//     return this.deleteResource('facets', id, action + childId, null, null);
//   }

  attachReferenceFile(id, formData, restHandlerOptions?) {

    const url = this.apiEndpoint + '/facets/' + id + '/referenceFiles';


    return this.simplePost(url, {
      method: 'POST',
      withCredentials: true,
      data: formData
    }, restHandlerOptions);
  }

  downloadLinkReferenceFile(elementId, fileId) {
    return this.apiEndpoint + '/facets/' + elementId + '/referenceFiles/' + fileId;
  }

}
