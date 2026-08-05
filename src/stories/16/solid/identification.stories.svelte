<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import IdentificationSvelte from '../../../lib/16/solid/identification.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: IdentificationSvelte,
		args: { class: '' },
	})
</script>

<Story name="Identification" />
