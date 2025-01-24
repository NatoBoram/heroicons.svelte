<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ItalicSvelte from '../../../lib/16/solid/italic.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ItalicSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Italic" />
