import React from 'react';

let Mui4Module;
let Mui5Module;
let anyModuleLoaded = false;

let debugMessage = 'mui-validate: No Material UI package found, using fallback mechanism.';

// try loading Material UI v5
try {
    // eslint-disable-next-line
    Mui5Module = require('@mui/material');
    debugMessage = 'mui-validate: Loded @mui/material for internal usage.';
    anyModuleLoaded = true;
// eslint-disable-next-line
} catch (e: any) { console.debug(e); }

if (!anyModuleLoaded) {
// try loading Material UI v4
    try {
        // eslint-disable-next-line
        Mui4Module = require('@material-ui/core');
        debugMessage = 'mui-validate: Loded @material-ui/core for internal usage.';
        anyModuleLoaded = true;
    // eslint-disable-next-line
    } catch (e: any) { console.debug(e); }
}

// eslint-disable-next-line
console.info(debugMessage);

export const { FormControl, FormHelperText } = (
    Mui5Module || Mui4Module || { FormControl: React.Fragment, FormHelperText: React.Fragment }
);