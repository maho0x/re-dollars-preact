// Bangumi site globals - available before userscript loads
declare const chiiApp: typeof window.chiiApp;
declare const chiiLib: typeof window.chiiLib;

export function getChiiApp() {
    return chiiApp;
}

export function getChiiLib() {
    return chiiLib;
}
