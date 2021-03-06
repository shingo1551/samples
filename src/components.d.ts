/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Form3 } from "./components/app-focus3/form3";
import { Form4 } from "./components/app-focus4/form4";
export namespace Components {
    interface AppEvent {
    }
    interface AppFocus1 {
    }
    interface AppFocus2 {
    }
    interface AppFocus3 {
    }
    interface AppFocus4 {
    }
    interface AppHome {
    }
    interface AppInput3 {
        "disabled": boolean;
        "form": Form3;
        "tabIndex": number;
    }
    interface AppInput4 {
        "disabled": boolean;
        "focus4": () => Promise<void>;
        "form": Form4;
        "tabIndex": number;
    }
    interface AppProfile {
        "name": string;
    }
    interface AppRoot {
    }
    interface AppTable {
    }
}
declare global {
    interface HTMLAppEventElement extends Components.AppEvent, HTMLStencilElement {
    }
    var HTMLAppEventElement: {
        prototype: HTMLAppEventElement;
        new (): HTMLAppEventElement;
    };
    interface HTMLAppFocus1Element extends Components.AppFocus1, HTMLStencilElement {
    }
    var HTMLAppFocus1Element: {
        prototype: HTMLAppFocus1Element;
        new (): HTMLAppFocus1Element;
    };
    interface HTMLAppFocus2Element extends Components.AppFocus2, HTMLStencilElement {
    }
    var HTMLAppFocus2Element: {
        prototype: HTMLAppFocus2Element;
        new (): HTMLAppFocus2Element;
    };
    interface HTMLAppFocus3Element extends Components.AppFocus3, HTMLStencilElement {
    }
    var HTMLAppFocus3Element: {
        prototype: HTMLAppFocus3Element;
        new (): HTMLAppFocus3Element;
    };
    interface HTMLAppFocus4Element extends Components.AppFocus4, HTMLStencilElement {
    }
    var HTMLAppFocus4Element: {
        prototype: HTMLAppFocus4Element;
        new (): HTMLAppFocus4Element;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppInput3Element extends Components.AppInput3, HTMLStencilElement {
    }
    var HTMLAppInput3Element: {
        prototype: HTMLAppInput3Element;
        new (): HTMLAppInput3Element;
    };
    interface HTMLAppInput4Element extends Components.AppInput4, HTMLStencilElement {
    }
    var HTMLAppInput4Element: {
        prototype: HTMLAppInput4Element;
        new (): HTMLAppInput4Element;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppTableElement extends Components.AppTable, HTMLStencilElement {
    }
    var HTMLAppTableElement: {
        prototype: HTMLAppTableElement;
        new (): HTMLAppTableElement;
    };
    interface HTMLElementTagNameMap {
        "app-event": HTMLAppEventElement;
        "app-focus1": HTMLAppFocus1Element;
        "app-focus2": HTMLAppFocus2Element;
        "app-focus3": HTMLAppFocus3Element;
        "app-focus4": HTMLAppFocus4Element;
        "app-home": HTMLAppHomeElement;
        "app-input3": HTMLAppInput3Element;
        "app-input4": HTMLAppInput4Element;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "app-table": HTMLAppTableElement;
    }
}
declare namespace LocalJSX {
    interface AppEvent {
    }
    interface AppFocus1 {
    }
    interface AppFocus2 {
    }
    interface AppFocus3 {
    }
    interface AppFocus4 {
    }
    interface AppHome {
    }
    interface AppInput3 {
        "disabled"?: boolean;
        "form"?: Form3;
        "tabIndex"?: number;
    }
    interface AppInput4 {
        "disabled"?: boolean;
        "form"?: Form4;
        "tabIndex"?: number;
    }
    interface AppProfile {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface AppTable {
    }
    interface IntrinsicElements {
        "app-event": AppEvent;
        "app-focus1": AppFocus1;
        "app-focus2": AppFocus2;
        "app-focus3": AppFocus3;
        "app-focus4": AppFocus4;
        "app-home": AppHome;
        "app-input3": AppInput3;
        "app-input4": AppInput4;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "app-table": AppTable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-event": LocalJSX.AppEvent & JSXBase.HTMLAttributes<HTMLAppEventElement>;
            "app-focus1": LocalJSX.AppFocus1 & JSXBase.HTMLAttributes<HTMLAppFocus1Element>;
            "app-focus2": LocalJSX.AppFocus2 & JSXBase.HTMLAttributes<HTMLAppFocus2Element>;
            "app-focus3": LocalJSX.AppFocus3 & JSXBase.HTMLAttributes<HTMLAppFocus3Element>;
            "app-focus4": LocalJSX.AppFocus4 & JSXBase.HTMLAttributes<HTMLAppFocus4Element>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-input3": LocalJSX.AppInput3 & JSXBase.HTMLAttributes<HTMLAppInput3Element>;
            "app-input4": LocalJSX.AppInput4 & JSXBase.HTMLAttributes<HTMLAppInput4Element>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-table": LocalJSX.AppTable & JSXBase.HTMLAttributes<HTMLAppTableElement>;
        }
    }
}
