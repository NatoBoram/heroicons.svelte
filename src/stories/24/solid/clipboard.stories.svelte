<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardSvelte from '../../../lib/24/solid/clipboard.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ClipboardSvelte,
		args: { class: '' },
	})
</script>

<Story name="Clipboard" />
