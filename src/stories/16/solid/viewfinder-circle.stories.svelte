<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ViewfinderCircleSvelte from '../../../lib/16/solid/viewfinder-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ViewfinderCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ViewfinderCircle" />
