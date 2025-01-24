<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeAmericasSvelte from '../../../lib/24/solid/globe-americas.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: GlobeAmericasSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="GlobeAmericas" />
