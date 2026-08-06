<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardSvelte from '../../../lib/20/solid/clipboard.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ClipboardSvelte,
		args: { class: '' },
	})
</script>

<Story name="Clipboard" />
