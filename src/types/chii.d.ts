export { };

interface GeneralConfigRadioParams {
    title: string;
    name: string;
    type: 'radio';
    defaultValue: string;
    getCurrentValue: () => string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
}

interface GeneralConfigCustomParams {
    title: string;
    name: string;
    type: 'custom';
    customContent: () => string;
}

type GeneralConfigParams = GeneralConfigRadioParams | GeneralConfigCustomParams;

interface PanelTabOptionsParams {
    type: 'options';
    tab: string;
    label: string;
    config: GeneralConfigParams[];
}

interface PanelTabCustomParams {
    type: 'custom';
    tab: string;
    label: string;
    customContent: () => string;
}

type PanelTabParams = PanelTabOptionsParams | PanelTabCustomParams;

interface Ukagaka {
    addGeneralConfig(params: GeneralConfigParams): void;
    removeGeneralConfig(name: string): void;
    addPanelTab(params: PanelTabParams): void;
    removePanelTab(name: string): void;
    showCustomizePanelWithTab(tabName: string): void;
}

interface CloudSettings {
    getAll(): Record<string, string>;
    get(key: string): string | undefined;
    update(settings: Record<string, any>): void;
    delete(key: string): void;
    save(): void;
}

interface ChiiApp {
    cloud_settings: CloudSettings;
}

declare global {
    interface Window {
        chiiLib: {
            ukagaka: Ukagaka;
        };
        chiiApp: ChiiApp;
        CHOBITS_UID: number | string;
        CHOBITS_USERNAME: string;
    }

    const chiiLib: {
        ukagaka: Ukagaka;
    };
    const chiiApp: ChiiApp;
}
