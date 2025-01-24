<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentArrowDownSvelte from '../../../lib/16/solid/document-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentArrowDownSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="DocumentArrowDown" />
