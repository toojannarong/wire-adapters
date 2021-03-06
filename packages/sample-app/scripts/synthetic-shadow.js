/*
    Copyright (c) 2020, salesforce.com, inc.
    All rights reserved.
    SPDX-License-Identifier: BSD-3-Clause
    For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
*/
const SYNTHETIC_IMPORT = 'import "@lwc/synthetic-shadow";';

module.exports = function() {
    let input;
    return {
        name: 'synthetic-shadow',
        options(rollupOpts) {
            input = rollupOpts.input;
        },
        transform(src, id) {
            if (id === input) {
                src = SYNTHETIC_IMPORT + src;
            }

            return { code: src, map: null };
        },
    };
};
