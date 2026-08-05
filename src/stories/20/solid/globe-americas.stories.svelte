<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeAmericasSvelte from '../../../lib/20/solid/globe-americas.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: GlobeAmericasSvelte,
		args: { class: '' },
	})
</script>

<Story name="GlobeAmericas" />
