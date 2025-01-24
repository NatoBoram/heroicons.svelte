<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentTextSvelte from '../../../lib/16/solid/document-text.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentTextSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="DocumentText" />
