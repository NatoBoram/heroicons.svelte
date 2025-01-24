<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CakeSvelte from '../../../lib/16/solid/cake.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CakeSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Cake" />
