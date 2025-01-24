<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CakeSvelte from '../../../lib/20/solid/cake.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CakeSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Cake" />
