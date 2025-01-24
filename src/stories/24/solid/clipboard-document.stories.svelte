<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardDocumentSvelte from '../../../lib/24/solid/clipboard-document.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ClipboardDocumentSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ClipboardDocument" />
