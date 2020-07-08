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

export class MdmPublicResource extends MdmResource {
  get(name) {
    return this.getResource('public', name, null);
  }

  dataFlowExporterPlugins() {
    return this.getResource('public', null, 'plugins/dataFlowExporters');
  }

  dataFlowImportPlugins() {
    return this.getResource('public', null, 'plugins/dataFlowImporters');
  }

  dataModelExporterPlugins(multiple = false) {
    const options: any = {};

    if (multiple === true) {
      options.filters = 'multipleDataModels=true';
    }
    // return this.getResource('public', null, 'plugins/dataModelExporters', options);
    return this.getResource('dataModels', null, 'providers/exporters', options);
  }

  dataModelImporterPlugins(multiple) {
    const options: any = {};
    if (multiple === true) {
      options.filters = 'multipleDataModels=true';
    }
    // return this.getResource('public', null, 'plugins/dataModelImporters', options);
    return this.getResource('dataModels', null, 'providers/importers', options);
  }
}
