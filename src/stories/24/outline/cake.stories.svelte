<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CakeSvelte from '../../../lib/24/outline/cake.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CakeSvelte,
		args: { class: '' },
	})
</script>

<Story name="Cake" />
