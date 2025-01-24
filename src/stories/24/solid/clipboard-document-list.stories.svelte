<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardDocumentListSvelte from '../../../lib/24/solid/clipboard-document-list.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ClipboardDocumentListSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ClipboardDocumentList" />
