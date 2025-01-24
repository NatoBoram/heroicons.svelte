<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardDocumentSvelte from '../../../lib/20/solid/clipboard-document.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ClipboardDocumentSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ClipboardDocument" />
