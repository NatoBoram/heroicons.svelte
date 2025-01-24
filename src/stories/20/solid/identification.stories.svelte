<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import IdentificationSvelte from '../../../lib/20/solid/identification.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: IdentificationSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Identification" />
