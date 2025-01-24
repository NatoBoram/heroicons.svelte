<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Battery50Svelte from '../../../lib/16/solid/battery-50.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: Battery50Svelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Battery50" />
