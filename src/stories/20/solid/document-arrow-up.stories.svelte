<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentArrowUpSvelte from '../../../lib/20/solid/document-arrow-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentArrowUpSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="DocumentArrowUp" />
