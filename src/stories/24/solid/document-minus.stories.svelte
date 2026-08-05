<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentMinusSvelte from '../../../lib/24/solid/document-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DocumentMinusSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentMinus" />
