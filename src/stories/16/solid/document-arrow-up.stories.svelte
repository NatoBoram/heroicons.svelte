<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentArrowUpSvelte from '../../../lib/16/solid/document-arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentArrowUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentArrowUp" />
