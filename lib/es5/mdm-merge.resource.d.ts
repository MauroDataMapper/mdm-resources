import { CommitMergePayload } from "mdm-merge.model";
import { ModelDomainType, QueryParameters, RequestSettings, Uuid } from "./mdm-common.model";
import { MdmResource } from "./mdm-resource";
export declare class MdmMergeResource extends MdmResource {
    apiEndpoint: any;
    /**
 * `HTTP GET` - Request a the current main branch of the current item.
 *
 * @param modelDomainType The model domain type of item
 * @param modelId The unique identifier of the item.
 * @param query Optional query parameters, if required.
 * @param options Optional REST handler parameters, if required.
 * @returns The result of the `GET` request.
 *
 * `200 OK` - will return a object containing the main branch.
 */
    currentMainBranch(modelDomainType: string | ModelDomainType, modelId: string, query?: QueryParameters, options?: RequestSettings): any;
    /**
 * `HTTP PUT` - Updates an existing data model.
 *
 * @param modelDomainType The model domain type of item
 * @param sourceModelId The id of the source model
 * @param targetModelId The id of the target model
 * @param data The payload of the request containing all the details for merge
 * @param options Optional REST handler parameters, if required.
 * @returns The result of the `POST` request.
 *
 * `200 OK`.
 */
    mergeInto(modelDomainType: string | ModelDomainType, sourceModelId: Uuid, targetModelId: Uuid, data: CommitMergePayload, restHandlerOptions?: RequestSettings): any;
}
