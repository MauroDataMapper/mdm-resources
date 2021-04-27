import { RequestOptions } from "mdm-common.model";
/**
 * Interface to define a REST handler for all `MdmResource` objects to handle HTTP requests/responses.
 *
 * @see [[DefaultMdmRestHandler]]
 */
export interface IMdmRestHandler {
    /**
     * Processes a REST resource request and returns the response and data.
     * @param url The URL to the resource to request.
     * @param options The options as part of the request to further control the request.
     * @returns The response from the REST resource request.
     */
    process(url: string, options: RequestOptions): any;
}
/**
 * Default implementation of the [[IMdmRestHandler]] interface, using the `fetch` API to
 * complete HTTP requests.
 *
 * By using the `fetch` API, all `process()` return values will become promises
 * to handle the asynchronous responses and finally return the `json` body content of each response.
 *
 * @example
 *
 * ```ts
 * const handler = new DefaultMdmRestHandler();
 * handler.process(url, options).then(json => { ... });
 * ```
 */
export declare class DefaultMdmRestHandler implements IMdmRestHandler {
    process(url: string, options: RequestOptions): Promise<any>;
}
