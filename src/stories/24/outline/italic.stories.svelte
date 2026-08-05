<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ItalicSvelte from '../../../lib/24/outline/italic.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ItalicSvelte,
		args: { class: '' },
	})
</script>

<Story name="Italic" />
