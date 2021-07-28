/*
Copyright 2021 University of Oxford

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
import { RequestSettings, QueryParameters, Uuid, Version, MultiFacetAwareDomainType, CatalogueItemDomainType, getMultiFacetAwareDomainType } from './mdm-common.model';
import { MdmResource } from './mdm-resource';

/**
 * Controller: mauroDataMapperServiceProvider
 |   GET    | /api/${catalogueItemDomainType}/${catalogueItemId}/profiles                                           | Action: profiles
 */

/**
 * MDM resource for the management of profiles over catalogue items.
 * 
 * Profiles act as projections over less structured catalogue item metadata.
 */
export class MdmProfileResource extends MdmResource {
  /**
   * `HTTP GET` - Gets a list of profiles used on a particular catalogue item.
   * 
   * @param domainType The domain type of the catalogue item to get.
   * @param catalogueItemId The unique identifier of the catalogue item to get.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ProfileSummaryIndexResponse} containing a list of {@link ProfileSummary} objects.
   */
  usedProfiles(
    domainType: MultiFacetAwareDomainType | CatalogueItemDomainType,
    catalogueItemId: Uuid,
    query?: QueryParameters,
    options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(domainType)}/${catalogueItemId}/profiles/used`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Gets a list of profiles not used on a particular catalogue item but are available.
   * 
   * @param domainType The domain type of the catalogue item to get.
   * @param catalogueItemId The unique identifier of the catalogue item to get.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ProfileSummaryIndexResponse} containing a list of {@link ProfileSummary} objects.
   */
  unusedProfiles(
    domainType: MultiFacetAwareDomainType | CatalogueItemDomainType,
    catalogueItemId: string,
    query?: QueryParameters,
    options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(domainType)}/${catalogueItemId}/profiles/unused`;
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Gets a list of all metadata for a catalogue item that is not attached to any profile on that item.
   * 
   * @param domainType The domain type of the catalogue item to get.
   * @param catalogueItemId The unique identifier of the catalogue item to get.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link MetadataIndexResponse} containing a list of {@link Metadata} objects.
   */
  otherMetadata(
    domainType: MultiFacetAwareDomainType | CatalogueItemDomainType,
    catalogueItemId: string,
    query?: QueryParameters,
    options?: RequestSettings) {
    const url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(domainType)}/${catalogueItemId}/profiles/otherMetadata`;
    return this.simpleGet(url, query, options);
  } 

  /**
   * `HTTP GET` - Gets a profile from a catalogue item.
   * 
   * @param domainType The domain type of the catalogue item to get.
   * @param catalogueItemId The unique identifier of the catalogue item to get.
   * @param profileNamespace The namespace of the profile to get.
   * @param profileName The name of the profile to get.
   * @param profileVersion Optional version of the profile to get. If not supplied, the latest version is used.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ProfileResponse} containing a {@link Profile}.
   */
  profile(
    domainType: MultiFacetAwareDomainType | CatalogueItemDomainType,
    catalogueItemId: Uuid,
    profileNamespace: string,
    profileName: string,
    profileVersion?: Version,
    query?: QueryParameters,
    options?: RequestSettings) {
    let url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(domainType)}/${catalogueItemId}/profile/${profileNamespace}/${profileName}`;
    if (profileVersion) {
      url += `/${profileVersion}`;
    }
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP POST` - Saves a profile and its metadata values to a catalogue item.
   *
   * @param domainType The domain type of the catalogue item to get.
   * @param catalogueItemId The unique identifier of the catalogue item to get.
   * @param profileNamespace The namespace of the profile to save.
   * @param profileName The name of the profile to save.
   * @param data The data payload containing the profile sections/fields to save.
   * @param profileVersion Optional version of the profile to save. If not supplied, the latest version is used.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link ProfileResponse} containing a {@link Profile}.
   */
  saveProfile(
    domainType: MultiFacetAwareDomainType | CatalogueItemDomainType,
    catalogueItemId: Uuid,
    profileNamespace: string,
    profileName: string,
    data: string,
    profileVersion?: Version,
    options?: RequestSettings) {
    let url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(domainType)}/${catalogueItemId}/profile/${profileNamespace}/${profileName}`;
    if (profileVersion) {
      url += `/${profileVersion}`;
    }
    return this.simplePost(url, data, options);
  }

  /**
   * `HTTP DELETE` - Removes an existing Digital Object Identifier from a catalogue item.
   *
   * @param domainType The domain type of the catalogue item to get.
   * @param catalogueItemId The unique identifier of the catalogue item to get.
   * @param profileNamespace The namespace of the profile to delete.
   * @param profileName The name of the profile to delete.
   * @param profileVersion Optional version of the profile to delete. If not supplied, the latest version is used.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `DELETE` request.
   *
   * On success, the response will be a `204 No Content` and the response body will be empty.
   */
  deleteProfile(
    domainType: MultiFacetAwareDomainType | CatalogueItemDomainType,
    catalogueItemId: Uuid,
    profileNamespace: string,
    profileName: string,
    profileVersion?: Version,
    query?: QueryParameters,
    options?: RequestSettings) {
    let url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(domainType)}/${catalogueItemId}/profile/${profileNamespace}/${profileName}`;
    if (profileVersion) {
      url += `/${profileVersion}`;
    }

    return this.simpleDelete(url, query, options);
  }

  /**
   * `HTTP POST` - Post a profile with values for a catalogue item and returns the same profile back with any validation errors included.
   *      
   * @param profileNamespace The namespace of the profile to validate.
   * @param profileName The name of the profile to validate.
   * @param domainType The domain type of the catalogue item to get.
   * @param catalogueItemId The unique identifier of the catalogue item to get.
   * @param data The data payload containing the profile sections/fields to validate.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link ProfileResponse} containing a {@link Profile}.
   */
  validateProfile(
    profileNamespace: string,
    profileName: string,
    domainType: MultiFacetAwareDomainType | CatalogueItemDomainType,
    catalogueItemId: Uuid,
    data: string) {
    const url = `${this.apiEndpoint}/profiles/${profileNamespace}/${profileName}/${getMultiFacetAwareDomainType(domainType)}/${catalogueItemId}/validate`;
    return this.simplePost(url, data);
  }

  providerDynamic() {
    const url = `${this.apiEndpoint}/profiles/providers/dynamic`;
    return this.simpleGet(url);
  }
}
