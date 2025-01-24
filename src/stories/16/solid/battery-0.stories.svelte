<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Battery0Svelte from '../../../lib/16/solid/battery-0.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: Battery0Svelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Battery0" />
