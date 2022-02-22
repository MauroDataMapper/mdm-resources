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

import { Historical } from './mdm-model-types.model';
import { CatalogueItem, MdmIndexResponse, MdmResponse, Payload, Uuid } from './mdm-common.model';

/**
 * Represents a reference file (attachment) for model.
 */
export interface ReferenceFile extends CatalogueItem {

  [key: string]: any;
  /**
   * The name of the reference file.
   */
  fileName: string;

  /**
   * The size of the reference file in bytes.
   */
  fileSize?: number;

  /**
   * The MIME type of the reference file.
   */
  fileType?: string;

  /**
   * The date/time the reference file was last updated in string format.
   */
  lastUpdated?: string;

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
  fileContents: any[];
}

/**
 * Represents an annotation, or comment, attached to a catalogue item.
 */
export interface Annotation extends Historical {

  [key: string]: any;
  /**
   * The unique identifier of this annotation.
   */
  id: Uuid;

  /**
   * The label/title of this annotation.
   */
  label: string;

  /**
   * An optional description, or further details, to apply to the annotation.
   */
  description?: string;

  /**
   * Gets the name of the user who created this annotation.
   */
  createdBy: string;

  /**
   * Annotations that are children to this annotation.
   */
  childAnnotations?: Annotation[];

}

export type AnnotationIndexResponse = MdmIndexResponse<Annotation>;
export type AnnotationDetailResponse = MdmResponse<Annotation>;

export interface AnnotationCreatePayload extends Payload {
  label: string;
  description?: string;
}

export interface AnnotationChildCreatePayload extends Payload {
  description: string;
}

/**
 * Represents all the domain types that can be used with the Mauro path APIs.
 */
export type PathableDomainType =
  'annotations'
  | 'authorities'
  | 'classifiers'
  | 'codeSets'
  | 'catalogueUsers'
  | 'dataClasses'
  | 'dataClassComponents'
  | 'dataElements'
  | 'dataElementComponents'
  | 'dataFlows'
  | 'dataModels'
  | 'enumerationTypes'
  | 'edits'
  | 'enumerationValues'
  | 'folders'
  | 'groupRoles'
  | 'metadata'
  | 'referenceDataElements'
  | 'referenceDataModels'
  | 'referenceEnumerationTypes'
  | 'referenceDataValues'
  | 'referenceEnumerationValues'
  | 'referenceFiles'
  | 'ruleRepresentations'
  | 'referenceSummaryMetadata'
  | 'referenceSummaryMetadataReports'
  | 'rules'
  | 'semanticLinks'
  | 'summaryMetadata'
  | 'summaryMetadataReports'
  | 'terminologies'
  | 'terms'
  | 'termRelationships'
  | 'termRelationshipTypes'
  | 'userGroups'
  | 'userImageFiles'
  | 'versionedFolders'
  | 'versionLinks';