<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LightBulbSvelte from '../../../lib/20/solid/light-bulb.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: LightBulbSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="LightBulb" />
