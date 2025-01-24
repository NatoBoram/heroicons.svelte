<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeAsiaAustraliaSvelte from '../../../lib/20/solid/globe-asia-australia.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: GlobeAsiaAustraliaSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="GlobeAsiaAustralia" />
