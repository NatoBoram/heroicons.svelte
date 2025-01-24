<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardDocumentCheckSvelte from '../../../lib/24/solid/clipboard-document-check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ClipboardDocumentCheckSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ClipboardDocumentCheck" />
