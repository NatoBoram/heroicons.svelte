<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingStorefrontSvelte from '../../../lib/20/solid/building-storefront.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BuildingStorefrontSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="BuildingStorefront" />
