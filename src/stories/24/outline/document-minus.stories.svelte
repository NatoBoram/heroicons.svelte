<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentMinusSvelte from '../../../lib/24/outline/document-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentMinusSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentMinus" />
