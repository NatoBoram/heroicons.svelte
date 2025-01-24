<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentPlusSvelte from '../../../lib/24/outline/document-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentPlusSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentPlus" />
