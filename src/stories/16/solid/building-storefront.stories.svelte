<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingStorefrontSvelte from '../../../lib/16/solid/building-storefront.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BuildingStorefrontSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="BuildingStorefront" />
