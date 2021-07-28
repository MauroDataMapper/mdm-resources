import { CommitMergePayload, MergableMultiFacetAwareDomainType } from './mdm-merge.model';
import { QueryParameters, RequestSettings, Uuid } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
/**
 * MDM resource for merge operations against catalogue items.
 *
 * Note: these endpoints work for the latest path-based merge responses. To use the original Mauro merge data, see the deprecated
 * {@link MdmVersioningResource} endpoints.
 */
export declare class MdmMergeResource extends MdmResource {
    /**
     * `HTTP GET` - Locates the catalogue item that acts as the "main" branch of the provided catalogue item.
     *
     * @param domainType The domain type of the catalogue item. Only supported {@link MultiFacetAwareDomainType} values are allowed.
     * @param id The unique identifier of the current item.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link MainBranchResponse} containing a {@link MainBranchItem} object.
     */
    currentMainBranch(domainType: MergableMultiFacetAwareDomainType, id: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP GET` - Gets a collection of differences between two catalogue items for the purpose of merging them together.
     *
     * @param domainType The domain type of catalogue items. Only supported {@link MultiFacetAwareDomainType} values are allowed.
     * @param sourceId The unique identifier of the source catalogue item - the catalogue item that is going to be _merged_ into the _target_.
     * @param targetId The unique identifier of the target catalogue item - the catalogue item that the _source_ will be _merged_ into.
     * @param query Optional query parameters, if required.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `GET` request.
     *
     * `200 OK` - will return a {@link MergeDiffResponse} containing a {@link MergeDiff} object.
     */
    mergeDiff(domainType: MergableMultiFacetAwareDomainType, sourceId: Uuid, targetId: Uuid, query?: QueryParameters, options?: RequestSettings): any;
    /**
     * `HTTP PUT` - Merges a _source_ catalogue item into a _target_ catalogue item.
     *
     * This is achieved by applying a list of _patches_ to the _target_ catalogue item to save/override previous values.
     *
     * @param domainType The domain type of catalogue items. Only supported {@link MultiFacetAwareDomainType} values are allowed.
     * @param sourceId The unique identifier of the source catalogue item - the catalogue item that is going to be _merged_ into the _target_.
     * @param targetId The unique identifier of the target catalogue item - the catalogue item that the _source_ will be _merged_ into.
     * @param data The payload of the request containing all the patch details.
     * @param options Optional REST handler parameters, if required.
     * @returns The result of the `PUT` request.
     *
     * `200 OK` - will return a {@link CommittedMergeResponse} containing a {@link CommittedMergeCatalogueItem}.
     */
    mergeInto(domainType: MergableMultiFacetAwareDomainType, sourceId: Uuid, targetId: Uuid, data: CommitMergePayload, options?: RequestSettings): any;
}
