<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentArrowUpSvelte from '../../../lib/16/solid/document-arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentArrowUpSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="DocumentArrowUp" />
