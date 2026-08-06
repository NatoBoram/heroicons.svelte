<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PauseCircleSvelte from '../../../lib/24/outline/pause-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PauseCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="PauseCircle" />
