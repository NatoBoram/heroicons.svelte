<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentArrowDownSvelte from '../../../lib/20/solid/document-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentArrowDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentArrowDown" />
