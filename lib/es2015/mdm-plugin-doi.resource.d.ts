import { DoiSubmissionQueryParameters } from './mdm-plugin-doi.model';
import { ModelDomainType, QueryParameters, RequestSettings, Uuid } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * MDM resource for managing Digital Object Identifiers (DOI) on catalogue items.
 *
 * In order to use these endpoints, the [mdm-plugin-digital-object-identifiers](https://github.com/MauroDataMapper-Plugins/mdm-plugin-digital-object-identifiers)
 * plugin must be installed in the Mauro instance.
 *
 * The Digital Object Identifiers plugin allows for the submission and usage of DOIs on Mauro catalogue items. See https://www.doi.org/ for more details on
 * Digital Object Identifiers.
 */
export declare class MdmPluginDoiResource extends MdmResource {
    /**
     * `HTTP GET` - Gets the Digital Object Identifier status of catalogue item.
     *
     * @param domainType The multi-facet aware domain type of the item to get.
     * @param id The unique identifier of the item to get.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link DoiStatusResponse} containing a {@link DoiStatus} object.
     */
    get(domainType: ModelDomainType, id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP POST` - Submits the data required to generate a new Digital Object Identifier for a catalogue item.
     *
     * @param domainType The multi-facet aware domain type of the item to submit.
     * @param id The unique identifier of the item to submit.
     * @param query Optional query parameters to control the submission.
     * @param options Optional REST handler parameters.
     * @returns The result of the `POST` request.
     *
     * `200 OK` - will return a {@link DoiSubmissionResponse} containing a {@link DoiSubmissionState} object.
     */
    save(domainType: ModelDomainType, id: Uuid, query?: DoiSubmissionQueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP DELETE` - Removes an existing Digital Object Identifier from a catalogue item.
     *
     * @param domainType The multi-facet aware domain type of the item to remove the Digital Object Identifier from.
     * @param id The unique identifier of the item to remove the Digital Object Identifier from.
     * @param query Optional query string parameters, if required.
     * @param options Optional REST handler options, if required.
     * @returns The result of the `DELETE` request.
     *
     * On success, the response will be a `204 No Content` and the response body will be empty.
     */
    remove(domainType: ModelDomainType, id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
}
