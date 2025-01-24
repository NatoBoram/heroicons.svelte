<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Battery100Svelte from '../../../lib/20/solid/battery-100.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: Battery100Svelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Battery100" />
