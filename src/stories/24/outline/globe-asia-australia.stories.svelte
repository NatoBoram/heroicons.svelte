<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GlobeAsiaAustraliaSvelte from '../../../lib/24/outline/globe-asia-australia.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: GlobeAsiaAustraliaSvelte,
		args: { class: '' },
	})
</script>

<Story name="GlobeAsiaAustralia" />
