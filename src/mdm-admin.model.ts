/*
Copyright 2020 University of Oxford

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

import { MdmResponse } from "mdm-common.model";

/**
 * Type to represent the status information of a Mauro instance.
 * 
 * Indexed property names are used as the names may be simple strings.
 */
export interface MauroStatus {
  [key: string]: any
}

/**
 * Type alias for an endpoint response to request current status of the Mauro instance.
 */
export type MauroStatusResponse = MdmResponse<MauroStatus>;

/**
 * Represents details about a module loaded into the current Mauro instance.
 */
export interface Module {
  name: string;
  version: string;
}

/**
 * Type alias for an endpoint response to request module information on the current Mauro instance.
 */
export type ModulesResponse = MdmResponse<Module[]>;