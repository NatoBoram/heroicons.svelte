<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentArrowUpSvelte from '../../../lib/24/outline/document-arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentArrowUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentArrowUp" />
