<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardDocumentListSvelte from '../../../lib/16/solid/clipboard-document-list.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ClipboardDocumentListSvelte,
		args: { class: '' },
	})
</script>

<Story name="ClipboardDocumentList" />
