<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ViewfinderCircleSvelte from '../../../lib/20/solid/viewfinder-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ViewfinderCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="ViewfinderCircle" />
