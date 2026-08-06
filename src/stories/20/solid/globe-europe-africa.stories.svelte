<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeEuropeAfricaSvelte from '../../../lib/20/solid/globe-europe-africa.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: GlobeEuropeAfricaSvelte,
		args: { class: '' },
	})
</script>

<Story name="GlobeEuropeAfrica" />
