/*---------------------------------------------------------------------------------------------
 *  Copyright (c) IBAX All rights reserved.
 *  See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

declare module 'ibax/gui' {
  interface IInferredArguments {
    readonly privateKey?: string;
    readonly honornode?: string[];
    readonly networkID?: number;
    readonly networkName?: string;
    readonly dry?: boolean;
    readonly offsetX?: number;
    readonly offsetY?: number;
    readonly socketUrl?: string;
    readonly disableHonorNodesSync?: boolean;
    readonly activationEmail?: string;
    readonly guestMode?: boolean;
  }
}