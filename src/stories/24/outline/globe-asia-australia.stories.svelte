<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeAsiaAustraliaSvelte from '../../../lib/24/outline/globe-asia-australia.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: GlobeAsiaAustraliaSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="GlobeAsiaAustralia" />
