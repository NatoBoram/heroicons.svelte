<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentSvelte from '../../../lib/24/outline/document.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Document" />
