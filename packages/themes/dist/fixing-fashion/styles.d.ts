import type { ThemeWithName } from '../types/types';
export declare const colors: {
    white: string;
    offwhite: string;
    black: string;
    primary: string;
    softyellow: string;
    yellow: {
        base: string;
        hover: string;
    };
    blue: string;
    red: string;
    red2: string;
    softblue: string;
    bluetag: string;
    grey: string;
    green: string;
    error: string;
    background: string;
    silver: string;
    softgrey: string;
    lightgrey: string;
    darkGrey: string;
};
export declare const zIndex: {
    behind: number;
    level: number;
    default: number;
    slickArrows: number;
    modalProfile: number;
    logoContainer: number;
    mapFlexBar: number;
    header: number;
};
export declare type ButtonVariants = 'primary' | 'secondary' | 'outline' | 'disabled' | 'dark' | 'light' | 'subtle';
declare const StyledComponentTheme: ThemeWithName;
export default StyledComponentTheme;
