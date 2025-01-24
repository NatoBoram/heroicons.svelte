<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardSvelte from '../../../lib/16/solid/clipboard.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ClipboardSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Clipboard" />
