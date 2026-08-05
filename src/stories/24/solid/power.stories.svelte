<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PowerSvelte from '../../../lib/24/solid/power.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PowerSvelte,
		args: { class: '' },
	})
</script>

<Story name="Power" />
