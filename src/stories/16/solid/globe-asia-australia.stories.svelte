<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeAsiaAustraliaSvelte from '../../../lib/16/solid/globe-asia-australia.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: GlobeAsiaAustraliaSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="GlobeAsiaAustralia" />
