<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeAmericasSvelte from '../../../lib/24/solid/globe-americas.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: GlobeAmericasSvelte,
		args: { class: '' },
	})
</script>

<Story name="GlobeAmericas" />
