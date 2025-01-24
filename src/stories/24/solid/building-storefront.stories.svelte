<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingStorefrontSvelte from '../../../lib/24/solid/building-storefront.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BuildingStorefrontSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="BuildingStorefront" />
