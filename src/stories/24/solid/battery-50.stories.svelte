<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Battery50Svelte from '../../../lib/24/solid/battery-50.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: Battery50Svelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Battery50" />
