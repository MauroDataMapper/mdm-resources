/*
Copyright 2020-2024 University of Oxford and NHS England

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
import { Identifiable, MdmResponse } from '../mdm-common.model';
import { Historical } from '../mdm-model-types.model';

/**
 * The payload of an image file to create or update.
 */
export interface ImageFilePayload {
  /**
   * The image data stored as a string.
   *
   * This data would be in the format of a Data URI e.g.
   *
   * ```
   * data:image/png;base64,VBORw0KGgoAAAANSUhEUgAAA...
   * ```
   */
  image: string;

  /**
   * The MIME type of the image e.g. "image/png"
   */
  type: string;
}

/**
 * Represents the image file information for a stored image in Mauro.
 *
 * This does not provide the image itself, use other `GET` endpoints to view the image.
 */
export interface ImageFile extends Identifiable, Historical {
  domainType: 'UserImageFile' | 'ThemeImageFile';
  fileSize: number;
  fileName: string;
  fileType: string;
}

export type ImageFileResponse = MdmResponse<ImageFile>;
