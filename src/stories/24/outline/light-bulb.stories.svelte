<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LightBulbSvelte from '../../../lib/24/outline/light-bulb.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: LightBulbSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="LightBulb" />
