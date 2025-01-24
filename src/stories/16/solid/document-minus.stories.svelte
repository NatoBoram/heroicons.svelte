<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentMinusSvelte from '../../../lib/16/solid/document-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentMinusSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="DocumentMinus" />
