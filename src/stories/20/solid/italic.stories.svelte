<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ItalicSvelte from '../../../lib/20/solid/italic.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ItalicSvelte,
		args: { class: '' },
	})
</script>

<Story name="Italic" />
