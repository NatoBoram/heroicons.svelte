<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeEuropeAfricaSvelte from '../../../lib/16/solid/globe-europe-africa.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: GlobeEuropeAfricaSvelte,
		args: { class: '' },
	})
</script>

<Story name="GlobeEuropeAfrica" />
