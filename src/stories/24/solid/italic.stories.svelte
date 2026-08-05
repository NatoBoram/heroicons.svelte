<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ItalicSvelte from '../../../lib/24/solid/italic.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ItalicSvelte,
		args: { class: '' },
	})
</script>

<Story name="Italic" />
