<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Battery0Svelte from '../../../lib/20/solid/battery-0.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: Battery0Svelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Battery0" />
