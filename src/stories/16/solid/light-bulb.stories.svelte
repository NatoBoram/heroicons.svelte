<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LightBulbSvelte from '../../../lib/16/solid/light-bulb.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: LightBulbSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="LightBulb" />
