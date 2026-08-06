<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CakeSvelte from '../../../lib/16/solid/cake.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CakeSvelte,
		args: { class: '' },
	})
</script>

<Story name="Cake" />
