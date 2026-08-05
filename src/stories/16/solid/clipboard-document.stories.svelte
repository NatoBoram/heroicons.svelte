<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardDocumentSvelte from '../../../lib/16/solid/clipboard-document.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ClipboardDocumentSvelte,
		args: { class: '' },
	})
</script>

<Story name="ClipboardDocument" />
