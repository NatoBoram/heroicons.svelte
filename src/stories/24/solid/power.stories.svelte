<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PowerSvelte from '../../../lib/24/solid/power.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PowerSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Power" />
