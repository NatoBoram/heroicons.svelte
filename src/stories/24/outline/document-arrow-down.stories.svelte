<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentArrowDownSvelte from '../../../lib/24/outline/document-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentArrowDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentArrowDown" />
