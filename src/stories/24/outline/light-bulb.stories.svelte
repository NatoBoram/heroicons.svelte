<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LightBulbSvelte from '../../../lib/24/outline/light-bulb.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: LightBulbSvelte,
		args: { class: '' },
	})
</script>

<Story name="LightBulb" />
