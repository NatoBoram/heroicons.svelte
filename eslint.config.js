import eslint from '@eslint/js'
import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import svelteParser from 'svelte-eslint-parser'
import tseslint from 'typescript-eslint'

/* eslint-disable @typescript-eslint/no-unsafe-member-access,
@typescript-eslint/no-unsafe-assignment */

export default tseslint.config(
	{
		files: ['*.js', '*.mjs', '*.svelte', '*.ts', '**/*.js', '**/*.mjs', '**/*.svelte', '**/*.ts'],
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.strictTypeChecked,
			...tseslint.configs.stylisticTypeChecked,
			prettier,
		],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parser: tseslint.parser,
			parserOptions: { extraFileExtensions: ['.svelte'], project: './tsconfig.eslint.json' },
		},
	},

	{
		extends: [...svelte.configs['flat/recommended'], ...svelte.configs['flat/prettier']],
		files: ['*.svelte', '**/*.svelte'],
		languageOptions: {
			globals: globals.browser,
			parser: svelteParser,
			parserOptions: { parser: tseslint.parser, project: './tsconfig.eslint.json' },
		},
	},

	{
		ignores: [
			'.pnpm-store',
			'.storybook',
			'.svelte-kit',
			'build',
			'dist',
			'node_modules',
			'package',
			'storybook-static',
			'vite.config.js.timestamp-*',
			'vite.config.ts.timestamp-*',
		],
	},
)
