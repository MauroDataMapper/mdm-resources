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
import {
  Profile,
  ProfileContextIndexPayload,
  ProfileContextPayload,
  ProfileProviderQueryParameters
} from './mdm-profile.model';
import {
  RequestSettings,
  QueryParameters,
  Uuid,
  Version,
  MultiFacetAwareDomainType,
  CatalogueItemDomainType,
  getMultiFacetAwareDomainType,
  SearchQueryParameters
} from '../mdm-common.model';
import { MdmResource } from '../mdm-resource';

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
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(
      domainType
    )}/${catalogueItemId}/profiles/used`;
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
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(
      domainType
    )}/${catalogueItemId}/profiles/unused`;
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
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(
      domainType
    )}/${catalogueItemId}/profiles/otherMetadata`;
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
    options?: RequestSettings
  ) {
    let url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(
      domainType
    )}/${catalogueItemId}/profile/${profileNamespace}/${profileName}`;
    if (profileVersion) {
      url += `/${profileVersion}`;
    }
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Gets a profile definition for a namespace/name. This is similar to a full profile but
   * without any assigned values or mapped to a catalogue item.
   *
   * @param profileNamespace The namespace of the profile to get.
   * @param profileName The name of the profile to get.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ProfileDefinitionResponse} containing a {@link ProfileDefinition}.
   */
  definition(
    profileNamespace: string,
    profileName: string,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/profiles/${profileNamespace}/${profileName}`;
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
    data: Profile,
    profileVersion?: Version,
    options?: RequestSettings
  ) {
    let url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(
      domainType
    )}/${catalogueItemId}/profile/${profileNamespace}/${profileName}`;
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
    options?: RequestSettings
  ) {
    let url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(
      domainType
    )}/${catalogueItemId}/profile/${profileNamespace}/${profileName}`;
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
   * `422 Unprocessable Entity` - will return a {@link ProfileValidationResponse} containing a {@link ProfileValidationErrorList}.
   */
  validateProfile(
    profileNamespace: string,
    profileName: string,
    domainType: MultiFacetAwareDomainType | CatalogueItemDomainType,
    catalogueItemId: Uuid,
    data: Profile,
    profileVersion?: Version
  ) {
    let url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(
      domainType
    )}/${catalogueItemId}/profile/${profileNamespace}/${profileName}`;
    if (profileVersion) {
      url += `/${profileVersion}`;
    }
    url += '/validate';
    return this.simplePost(url, data);
  }

  /**
   * `HTTP GET` - Gets a list of all profile providers available.
   *
   * @param query Optional query parameters to control what is returned.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ProfileSummaryIndexResponse} containing a list of {@link ProfileSummary} objects.
   */
  providers(query?: ProfileProviderQueryParameters, options?: RequestSettings) {
    const url = `${this.apiEndpoint}/profiles/providers`;
    return this.simpleGet(url, query, options);
  }

  /**
   * 'HTTP GET` - Gets the details of a single profile provider.
   *
   * @param profileNamespace The namespace of the profile provider to get.
   * @param profileName The name of the profile provider to get.
   * @param profileVersion Optional version of the profile provider to get. If not provided, will assume to get the latest version.
   * @param query Optional query string parameters, if required.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ProfileSummaryResponse} containing a {@link ProfileSummary} object.
   */
  provider(
    profileNamespace: string,
    profileName: string,
    profileVersion?: Version,
    query?: QueryParameters,
    options?: RequestSettings
  ) {
    let url = `${this.apiEndpoint}/profiles/providers/${profileNamespace}/${profileName}`;
    if (profileVersion) {
      url += `/${profileVersion}`;
    }
    return this.simpleGet(url, query, options);
  }

  /**
   * `HTTP GET` - Gets a list of dynamic profile providers available.
   *
   * @returns The result of the `GET` request.
   *
   * `200 OK` - will return a {@link ProfileSummaryIndexResponse} containing a list of {@link ProfileSummary} objects.
   */
  providerDynamic() {
    const url = `${this.apiEndpoint}/profiles/providers/dynamic`;
    return this.simpleGet(url);
  }

  /**
   * `HTTP POST` - Gets a list of all profiles on a particular catalogue item.
   *
   * @param domainType The domain type of the catalogue item to get.
   * @param catalogueItemId The unique identifier of the catalogue item to get.
   * @param payload The payload containing the information to filter by.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link ProfileContextIndexResponse} containing an {@link ProfileContextIndexBody} object.
   */
  getMany(
    domainType: MultiFacetAwareDomainType | CatalogueItemDomainType,
    catalogueItemId: Uuid,
    payload: ProfileContextIndexPayload,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(
      domainType
    )}/${catalogueItemId}/profile/getMany`;
    return this.simplePost(url, payload, options);
  }

  /**
   * `HTTP POST` - Saves a list of all profiles on a particular catalogue item.
   *
   * @param domainType The domain type of the catalogue item to get.
   * @param catalogueItemId The unique identifier of the catalogue item to get.
   * @param payload Array of profile context information containing the data to save.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link ProfileContextIndexResponse} containing an {@link ProfileContextIndexBody} object.
   */
  saveMany(
    domainType: MultiFacetAwareDomainType | CatalogueItemDomainType,
    catalogueItemId: Uuid,
    payload: ProfileContextPayload,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(
      domainType
    )}/${catalogueItemId}/profile/saveMany`;
    return this.simplePost(url, payload, options);
  }

  /**
   * `HTTP POST` - Validates a list of profiles on a particular catalogue item.
   *
   * @param domainType The domain type of the catalogue item to get.
   * @param catalogueItemId The unique identifier of the catalogue item to get.
   * @param payload Array of profile context information containing the data to validate.
   * @param options Optional REST handler options, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link ProfileContextIndexResponse} containing an {@link ProfileContextIndexBody} object.
   *
   * `422 Unprocessable Entity` - will return a {@link ProfileContextIndexResponse} containing a {@link ProfileContextIndexBody}.
   * Each {@link ProfileContext} will contain an `errors` object containing all validation errors.
   */
  validateMany(
    domainType: MultiFacetAwareDomainType | CatalogueItemDomainType,
    catalogueItemId: Uuid,
    payload: ProfileContextPayload,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(
      domainType
    )}/${catalogueItemId}/profile/validateMany`;
    return this.simplePost(url, payload, options);
  }

  /**
   * `HTTP POST` - Search within the catalogue for one or more search terms and return profile fields matching
   * the provided profile.
   *
   * @param profileNamespace The namespace of the profile to validate.
   * @param profileName The name of the profile to validate.
   * @param query The query parameters to control the search.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link ProfileSearchResponse} containing a collection of
   * {@link ProfileSearchResult} objects.
   */
  search(
    profileNamespace: string,
    profileName: string,
    query: SearchQueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/profiles/${profileNamespace}/${profileName}/search`;
    return this.simplePost(url, query, options);
  }

  /**
   * `HTTP POST` - Search within a single catalogue item for one or more search terms and return profile fields matching
   * the provided profile.
   *
   * @param domainType The domain type of the catalogue item to search in.
   * @param id The unique identifier of the catalogue item to search in.
   * @param profileNamespace The namespace of the profile to validate.
   * @param profileName The name of the profile to validate.
   * @param query The query parameters to control the search.
   * @param options Optional REST handler parameters, if required.
   * @returns The result of the `POST` request.
   *
   * `200 OK` - will return a {@link ProfileSearchResponse} containing a collection of
   * {@link ProfileSearchResult} objects.
   */
  searchCatalogueItem(
    domainType: MultiFacetAwareDomainType,
    id: Uuid,
    profileNamespace: string,
    profileName: string,
    query: SearchQueryParameters,
    options?: RequestSettings
  ) {
    const url = `${this.apiEndpoint}/${getMultiFacetAwareDomainType(
      domainType
    )}/${id}/profiles/${profileNamespace}/${profileName}/search`;
    return this.simplePost(url, query, options);
  }
}
