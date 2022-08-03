// The Theme Interface is used to define the Themes used in the application.
export interface Theme {
	[index: string]: string
}

// The ThemeList is a list of Theme objects.
export type ThemeList = Theme[]
