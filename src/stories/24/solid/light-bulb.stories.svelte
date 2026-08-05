<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LightBulbSvelte from '../../../lib/24/solid/light-bulb.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: LightBulbSvelte,
		args: { class: '' },
	})
</script>

<Story name="LightBulb" />
