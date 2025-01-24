<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardDocumentCheckSvelte from '../../../lib/16/solid/clipboard-document-check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ClipboardDocumentCheckSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ClipboardDocumentCheck" />
