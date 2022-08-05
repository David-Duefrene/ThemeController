import {
	expect, test, beforeEach, describe,
} from 'vitest'

import ThemeController from './ThemeController'

describe('ThemeController', () => {
	let themeController
	beforeEach(() => {
		const themes = {
			'light': { 'main-color': 'white', },
			'dark': { 'main-color': 'black', },
		}
		themeController = new ThemeController(themes,)
	},)

	describe('constructor', () => {
		test('should create a new ThemeController', () => {
			expect(themeController,).toBeInstanceOf(ThemeController,)
		},)
	},)

	describe('doesThemeExist', () => {
		test('should return true if theme exists', () => {
			expect(themeController.doesThemeExist('Dark',),).toBe(true,)
		},)

		test('should return false if theme does not exist', () => {
			expect(themeController.doesThemeExist('NotATheme',),).toBe(false,)
		},)
	},)

	describe('addNewTheme', () => {
		test('should add a new theme', () => {
			themeController.addNewTheme({ 'NewTheme': { 'main-color': 'red', }, },)
			expect(themeController.doesThemeExist('NewTheme',),).toBe(true,)
		},)

		test('should throw an error if theme already exists', () => {
			expect(() => themeController.addNewTheme({ 'Light': { 'main-color': 'white', }, },),)
				.toThrowError('Theme Light already exists',)
		},)
	},)

	describe('deleteTheme', () => {
		test('should delete a theme', () => {
			themeController.deleteTheme('Light',)
			expect(themeController.doesThemeExist('Light',),).toBe(false,)
		},)

		test('should throw an error if theme does not exist', () => {
			expect(() => themeController.deleteTheme('NotATheme',),)
				.toThrowError('Theme NotATheme does not exist',)
		},)
	},)

	describe('set updateTheme', () => {
		test('should set the theme', () => {
			themeController.updateTheme({ 'Dark': { 'main-color': 'red', }, },)
			expect(themeController.Themes.Dark['main-color'],).toBe('red',)
		},)

		test('should throw an error if theme does not exist', () => {
			expect(() => themeController.updateTheme({ 'NotATheme': { 'main-color': 'red', }, },),)
				.toThrowError('Theme NotATheme does not exist',)
		},)
	},)

	describe('set theme', () => {
		test('should set the theme to the theme specified', () => {
			themeController.theme = 'Dark'
			expect(themeController.theme,).toBe('Dark',)
		},)

		test('should throw an error if the theme does not exist', () => {
			expect(() => themeController.theme = 'NotATheme',).toThrowError('Theme NotATheme does not exist',)
		},)
	},)

	describe('get theme', () => {
		test('should return the current theme', () => {
			themeController.theme = 'Dark'
			expect(themeController.theme,).toBe('Dark',)
		},)
	},)

	describe('get themeList', () => {
		test('should return the list of themes', () => {
			expect(themeController.themeList,).toEqual([ 'Light', 'Dark', ],)
		},)
	},)
},)
