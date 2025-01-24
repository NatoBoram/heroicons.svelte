<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentMinusSvelte from '../../../lib/24/outline/document-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentMinusSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentMinus" />
