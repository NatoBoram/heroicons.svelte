<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingStorefrontSvelte from '../../../lib/24/outline/building-storefront.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BuildingStorefrontSvelte,
		args: { class: '' },
	})
</script>

<Story name="BuildingStorefront" />
