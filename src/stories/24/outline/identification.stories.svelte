<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import IdentificationSvelte from '../../../lib/24/outline/identification.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: IdentificationSvelte,
		args: { class: '' },
	})
</script>

<Story name="Identification" />
