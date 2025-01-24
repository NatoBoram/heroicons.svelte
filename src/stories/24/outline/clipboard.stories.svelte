<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardSvelte from '../../../lib/24/outline/clipboard.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ClipboardSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Clipboard" />
