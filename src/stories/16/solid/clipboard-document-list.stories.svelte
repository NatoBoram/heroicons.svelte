<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardDocumentListSvelte from '../../../lib/16/solid/clipboard-document-list.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ClipboardDocumentListSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ClipboardDocumentList" />
