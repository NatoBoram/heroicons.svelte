<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ViewfinderCircleSvelte from '../../../lib/16/solid/viewfinder-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ViewfinderCircleSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ViewfinderCircle" />
