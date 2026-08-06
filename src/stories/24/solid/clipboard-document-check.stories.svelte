<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardDocumentCheckSvelte from '../../../lib/24/solid/clipboard-document-check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ClipboardDocumentCheckSvelte,
		args: { class: '' },
	})
</script>

<Story name="ClipboardDocumentCheck" />
