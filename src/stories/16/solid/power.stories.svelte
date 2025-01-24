<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PowerSvelte from '../../../lib/16/solid/power.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PowerSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Power" />
