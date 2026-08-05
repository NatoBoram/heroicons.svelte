<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardDocumentCheckSvelte from '../../../lib/24/outline/clipboard-document-check.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ClipboardDocumentCheckSvelte,
		args: { class: '' },
	})
</script>

<Story name="ClipboardDocumentCheck" />
