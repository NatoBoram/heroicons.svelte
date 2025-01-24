<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardDocumentSvelte from '../../../lib/16/solid/clipboard-document.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ClipboardDocumentSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ClipboardDocument" />
