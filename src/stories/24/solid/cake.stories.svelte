<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CakeSvelte from '../../../lib/24/solid/cake.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CakeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Cake" />
