<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ViewfinderCircleSvelte from '../../../lib/24/outline/viewfinder-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ViewfinderCircleSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ViewfinderCircle" />
