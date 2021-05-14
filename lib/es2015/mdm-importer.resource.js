import { MdmResource } from './mdm-resource';
/**
 * Controller: importer
 |   GET    | /api/importer/parameters/${ns}?/${name}?/${version}?                                                  | Action: parameters
 */
export class MdmImporterResource extends MdmResource {
    get(namespace, name, version, queryStringParams, restHandlerOptions) {
        const url = `${this.apiEndpoint}/importer/parameters${namespace ? `/${namespace}` : ''}${name ? `/${name}` : ''}${version ? `/${version}` : ''}`;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    }
}
//# sourceMappingURL=mdm-importer.resource.js.map