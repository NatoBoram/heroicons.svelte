<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardDocumentSvelte from '../../../lib/24/solid/clipboard-document.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ClipboardDocumentSvelte,
		args: { class: '' },
	})
</script>

<Story name="ClipboardDocument" />
