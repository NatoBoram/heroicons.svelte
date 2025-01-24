<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ClipboardDocumentSvelte from '../../../lib/24/outline/clipboard-document.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ClipboardDocumentSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ClipboardDocument" />
