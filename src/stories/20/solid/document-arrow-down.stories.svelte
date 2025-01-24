<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentArrowDownSvelte from '../../../lib/20/solid/document-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentArrowDownSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="DocumentArrowDown" />
