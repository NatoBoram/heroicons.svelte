<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeEuropeAfricaSvelte from '../../../lib/24/outline/globe-europe-africa.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: GlobeEuropeAfricaSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="GlobeEuropeAfrica" />
