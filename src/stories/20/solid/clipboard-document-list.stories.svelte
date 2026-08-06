<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardDocumentListSvelte from '../../../lib/20/solid/clipboard-document-list.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ClipboardDocumentListSvelte,
		args: { class: '' },
	})
</script>

<Story name="ClipboardDocumentList" />
