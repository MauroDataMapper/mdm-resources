/*
Copyright 2020-2021 University of Oxford

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

import { CatalogueItem, MdmIndexResponse, MdmResponse, Payload } from './mdm-common.model';

/**
 * Represents a reference file (attachment) for model.
 */
export interface ReferenceFile extends CatalogueItem {
  /**
   * The name of the reference file.
   */
  fileName: string;

  /**
   * The size of the reference file in bytes.
   */
  fileSize: number;

  /**
   * The MIME type of the reference file.
   */
  fileType: string;

  /**
   * The date/time the reference file was last updated in string format.
   */
  lastUpdated: string;

  [key: string]: any;
}

export type ReferenceFileIndexResponse = MdmIndexResponse<ReferenceFile>;
export type ReferenceFileDetailResponse = MdmResponse<ReferenceFile>;

export interface ReferenceFileCreatePayload extends Payload {
  fileName: string;
  fileSize: number;
  fileType: string;

  /**
   * The raw data of the file contents to store in the reference file.
   */
  fileContents: any[]  
}