/*
Copyright 2020-2021 University of Oxford
and Health and Social Care Information Centre, also known as NHS Digital

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
import {
  CatalogueItemDomainType,
  MdmIndexResponse,
  MdmResponse,
  Uuid,
  Version
} from '../mdm-common.model';
import { Exporter } from '../mdm-import-export.model';
import { ModelDomain } from '../mdm-model-types.model';

export interface DomainExportCatalogueItem {
  domainId?: Uuid;
  domainIds?: Uuid[];
  domainType: CatalogueItemDomainType;
}

export interface DomainExportDetails {
  fileName: string;
  contentType: string;
  fileSize: number;
}

export interface DomainExportLinks {
  relative: string;
  absolute: string;
}

/**
 * Represents a domain level export.
 */
export interface DomainExport {
  /**
   * The identifier of the export.
   */
  id: Uuid;
  /**
   * The details on the catalogue item that was exported.
   */
  exported: DomainExportCatalogueItem;
  /**
   * The details on the exporter used.
   */
  exporter: Exporter;
  /**
   * The details on the export itself - file and file size.
   */
  export: DomainExportDetails;
  /**
   * The date/time this was exported.
   */
  exportedOn: string;
  /**
   * The username of the user who created the export.
   */
  exportedBy: string;
  /**
   * The hyperlinks to the downloadable export.
   */
  links: DomainExportLinks;
}

export type DomainExportResponse = MdmResponse<DomainExport>;
export type DomainExportIndexResponse = MdmIndexResponse<DomainExport>;

/**
 * Represents filters for listing domain exports.
 */
export interface DomainExportListFilters {
  /**
   * Filter by domain type of a catalogue item. If provided, you must also specify the {@link DomainExportListFilters.domainId}.
   */
  domainType: ModelDomain;
  /**
   * Filter by domain object id of a catalogue item. If provided, you must also specify the {@link DomainExportListFilters.domainType}.
   */
  domainId: Uuid;
  /**
   * Filter by exporter namespace (optional).
   */
  namespace?: string;
  /**
   * Filter by exporter name (optional).
   */
  name?: string;
  /**
   * Filter by exporter version (optional).
   */
  version?: Version;
}
