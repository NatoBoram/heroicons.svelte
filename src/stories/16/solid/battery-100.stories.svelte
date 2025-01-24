<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Battery100Svelte from '../../../lib/16/solid/battery-100.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: Battery100Svelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Battery100" />
