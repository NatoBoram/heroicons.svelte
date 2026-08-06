<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Battery100Svelte from '../../../lib/24/solid/battery-100.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: Battery100Svelte,
		args: { class: '' },
	})
</script>

<Story name="Battery100" />
