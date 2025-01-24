<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentArrowUpSvelte from '../../../lib/24/solid/document-arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DocumentArrowUpSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentArrowUp" />
