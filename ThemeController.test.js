import { expect, test, beforeEach, describe } from 'vitest'

import ThemeController from './ThemeController';

describe('ThemeController', () => {
    let themeController;
    beforeEach(() => {
        const themes = {
            "Light": {
                "main-color": "hsl(0, 0%, 13%)",
                "text-color": "black",
                "line-color": "hsl(267, 95%, 76%)",
                "alt-color": "hsl(0, 0%, 66%)"
            },
            "Dark": {
                "main-color": "hsl(0, 0%, 90%)",
                "text-color": "white",
                "line-color": "hsl(267, 95%, 76%)",
                "alt-color": "hsl(0, 0%, 66%)"
            }
        }
        themeController = new ThemeController(themes, "Light");
    });

    describe('constructor', () => {
        test('should create a new ThemeController', () => {
            expect(themeController).toBeInstanceOf(ThemeController);
        });
    });

    describe('doesThemeExist', () => {
        test('should return true if theme exists', () => {
            expect(themeController.doesThemeExist('Dark')).toBe(true);
        });

        test('should return false if theme does not exist', () => {
            expect(themeController.doesThemeExist('NotATheme')).toBe(false);
        });
    });

    describe('setTheme', () => {
        test('should set the theme to the theme specified', () => {
            themeController.setTheme('Dark');
            expect(themeController.theme).toBe('Dark');
        });

        test('should throw an error if the theme does not exist', () => {
            expect(() => themeController.setTheme('NotATheme')).toThrowError('Theme NotATheme does not exist');
        });
    });

    describe('get theme', () => {
        test('should return the current theme', () => {
            themeController.setTheme('Dark');
            expect(themeController.theme).toBe('Dark');
        });
    });

    describe('get themeList', () => {
        test('should return the list of themes', () => {
            expect(themeController.themeList).toEqual(['Light', 'Dark']);
        });
    });
});
