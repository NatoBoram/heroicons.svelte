<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import IdentificationSvelte from '../../../lib/16/solid/identification.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: IdentificationSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Identification" />
