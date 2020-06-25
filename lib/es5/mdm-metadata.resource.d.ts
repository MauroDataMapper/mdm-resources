import { MdmResource } from './mdm-resource';
import { MdmNamespacesResource } from './mdm-namespaces.resource';
import { MdmResourcesConfiguration } from './mdm-resources-configuration';
import { IMdmRestHandler } from './mdm-rest-handler';
export declare class MdmMetadataResource extends MdmResource {
    namespaces: MdmNamespacesResource;
    constructor(resourcesConfig?: MdmResourcesConfiguration, restHandler?: IMdmRestHandler);
}
